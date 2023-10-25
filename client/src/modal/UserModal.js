import { useEffect, useRef } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
// import '../style/userModal.css'
import '../style/modal.css'


export function UserModal() {

    const baseUrl = process.env.REACT_APP_API_URL;
    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    const location = useLocation();
    const masechtotName = location.state.masechtotName;
    const hasKadish = location.state.hasKadish;

    const slain = useRef({});
    const navigate = useNavigate();

    async function getslainName() {
        const dataOfSlain = {
            "masechtot_arr": masechtotName,
            "kadish": hasKadish
        }

        await axios.get(`${baseUrl}/Slain`, dataOfSlain)
            .then((response) => {
                if (response.status >= 200 & response.status <= 300) {
                    console.log(response.data);
                    slain.current = response.data;
                }
            })
            .catch((error) => {
                // if (error.response.status === 404) {
                //     navigate("/error", { state: { error: "דף זה לא נמצא (שגיאת 404) נסה שוב מאוחר יותר" } });
                // }
                // else if (error.response.status >= 400 && error.response.status < 500) {
                //     navigate("/error", { state: { error: "שגיאת לקוח. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                // }
                // else if (error.response.status >= 500)
                //  {
                //     navigate("/error", { state: { error: "שגיאת שרת. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });
                // }
                // else{
                //     navigate("/error", { state: { error: "נראה שיש תקלה או שאין לך חיבור לאינטרנט . נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                // }
            });
    }


    useEffect(() => {
        handeShow();
        getslainName()
    }, [])



    const schema = yup.object().shape({
        name: yup.string().required("נא להכניס ערך"),
        email: yup.string().default(' '),

    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {

        if (masechtotName != []) {
            data.masechtot_name = masechtotName;
            data.slain_id = slain.current.id
        }
        if (hasKadish === true) {
            data.kadish = hasKadish
            data.slain_id = slain.current.id
        }
        await axios.post(`${baseUrl}/User`, data)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response.data);

                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    navigate("/error", { state: { error: "דף זה לא נמצא (שגיאת 404) נסה שוב מאוחר יותר" } });
                }
                else if (error.response.status >= 400 && error.response.status < 500) {
                    navigate("/error", { state: { error: "שגיאת לקוח. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                }
                else if (error.response.status >= 500)
                 {
                    navigate("/error", { state: { error: "שגיאת שרת. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });
                }
                else{
                    navigate("/error", { state: { error: "נראה שיש תקלה או שאין לך חיבור לאינטרנט . נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                }
            });
        handeClose()
        navigate('/')
    }


    return (
        <>
            <Modal className="modal" show={show} onHide={() => setShow(false)}>
                <h4>:שם החייל</h4>
                <h4>{slain.current.name}</h4>
                <form className="form" onSubmit={handleSubmit(onSubmit)} >
                    <>
                        <div class="form-row">
                            <div class="form-group">

                                <input id ="inputName" class="form-control" type="text" name="name" {...register('name')} />
                                <label for="name" id="label">שם</label>
                                <small class="text-danger">
                                    {errors?.name && errors.name.message}
                                </small>
                                <br></br>

                                <input
                                    id="inputEmail"
                                    class="form-control"
                                    type="email"
                                    name="email"
                                    pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+"
                                    maxLength="255"
                                    {...register('email')}
                                />
                                <label id="label">דואר אלקטרוני</label>
                                <small class="text-danger">
                                    {errors?.email && errors.email.message}
                                </small>
                                {masechtotName != [] ? <div>
                                    <p>
                                        :מסכתות
                                    </p>
                                    {masechtotName.map((masechet) => (
                                        <p>
                                            {masechet}
                                        </p>
                                    ))}
                                </div> : <></>}



                            </div>
                        </div>

                    </>
                    <input class="btn btn-outline-dark" type="submit"></input>
                </form>
                {/* <Button onClick={handeCloseNavigate}>אישור</Button> */}
            </Modal>
        </>
    )

}