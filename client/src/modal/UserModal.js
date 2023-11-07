import { useEffect, useRef } from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";


export function UserModal() {

    const baseUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [blockButton, setblockButton] = useState(false);
    const [XblockButton, setXblockButton] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    const location = useLocation();
    const masechtotName = location.state.masechtotName;
    const [masechtotNamelen, setmasechtotNamelen] = useState(masechtotName.length);
    const hasKadish = location.state.hasKadish;
    const [hasKadishState, sethasKadishState] = useState(hasKadish);

    const slain = location.state.slain;
    const isSuccess = useRef(false)

    // async function getslainName() {
    //     const dataOfSlain = {
    //         "masechtot_arr": masechtotName,
    //         "kadish": hasKadish
    //     }

    //     await axios.get(`${baseUrl}/Slain`, dataOfSlain)
    //         .then((response) => {
    //             if (response.status >= 200 & response.status <= 300) {
    //                 console.log(response.data);
    //                 slain.current = response.data;
    //             }
    //         })
    //         .catch((error) => {
    //             if (error.response.status === 404) {
    //                 navigate("/error", { state: { error: "דף זה לא נמצא (שגיאת 404) נסה שוב מאוחר יותר" } });
    //             }
    //             else if (error.response.status >= 400 && error.response.status < 500) {
    //                 navigate("/error", { state: { error: "שגיאת לקוח. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

    //             }
    //             else if (error.response.status >= 500)
    //              {
    //                 navigate("/error", { state: { error: "שגיאת שרת. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });
    //             }
    //             else{
    //                 navigate("/error", { state: { error: "נראה שיש תקלה או שאין לך חיבור לאינטרנט . נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

    //             }
    //         });
    // }


    useEffect(() => {
        handeShow();
        console.log('dd');
        getslainName()

        // getslainName()
    }, [])

    const handleClose = () => {
        setShow(false);
        navigate('/')
    };

    const schema = yup.object().shape({
        name: yup.string().required("נא להכניס שם"),
        email: yup.string().default(' '),

    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
        setblockButton(true);
        setXblockButton(true);
        if (masechtotName != []) {
            data.masechtot_name = masechtotName;
            data.slain_id = slain.current.id
        }
        if (hasKadish === true) {
            data.kadish = hasKadish
            data.slain_id = slain.current.id
        }
        data.masechtot_name = masechtotName;
        data.slain_id = slain.id
        data.kadish = hasKadish
        await axios.post(`${baseUrl}/User`, data)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    isSuccess.current = true;
                    setXblockButton(false);
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    navigate("/error", { state: { error: "דף זה לא נמצא (שגיאת 404) נסה שוב מאוחר יותר" } });
                }
                else if (error.response.status >= 400 && error.response.status < 500) {
                    navigate("/error", { state: { error: "שגיאת לקוח. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                }
                else if (error.response.status >= 500) {
                    navigate("/error", { state: { error: "שגיאת שרת. נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });
                }
                else {
                    navigate("/error", { state: { error: "נראה שיש תקלה או שאין לך חיבור לאינטרנט . נסה שוב מאוחר יותר, באם התקלה ממשיכה אנא צור קשר" } });

                }
            });
    }


    return (
        <>
            <Modal backdrop="static" className="modal" show={show} onHide={() => setShow(false)}>
                <div class="modal-content">
                    <div class="modal-header" style={{ textAlign: "center" }}>
                        <h5 class="modal-title" id="exampleModalLabel" style={{ margin: "auto" }}>הכנס פרטים בכדי לאשר ולקבל תזכורת למייל</h5>
                        <button disabled={XblockButton} onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" dir="rtl">
                        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center", margin: "10px" }}>
                            <div className="form-outline mb-4" style={{ width: "60%", margin: "auto" }}>
                                <input id="form2Example27" className="form-control"
                                    placeholder="שם"
                                    type="text"
                                    name="name"
                                    {...register('name')}
                                />
                                <small className="text-danger">
                                    {errors?.name && errors.name.message}
                                </small>
                            </div>
                            <div className="form-outline mb-4" style={{ width: "60%", margin: "auto" }}>
                                <input id="form2Example17" className="form-control form-control"
                                    placeholder="כתובת מייל"
                                    type="email"
                                    name="email"
                                    pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+"
                                    {...register('email')}
                                />
                                <small className="text-danger">
                                    {errors?.email && errors.email.message}
                                </small>
                            </div>
                            {masechtotNamelen != 0 ?
                                <div>
                                    <p style={{ fontWeight: "bold" }}>המסכתות שזכית לקחת וללמוד:</p>
                                    {masechtotName.map((masechet) => (
                                        <p>{masechet}</p>
                                    ))}
                                    {hasKadishState &&
                                        <p style={{ fontWeight: "bold" }}>וזכית לומר קדיש</p>
                                    }
                                </div> : <p style={{ fontWeight: "bold" }}>זכית לומר קדיש</p>}

                            <h5 id="slainName">לעילוי נשמת הקדוש:</h5>
                            <h5>{slain.name}</h5>
                            <div class="modal-footer" style={{ margn: "auto" }}>
                                <p style={{color: "brown", marginBottom: "5px"}}>שים לב, כאשר תלחץ על אישור אתה קובע בכך את התחייבותך ללמוד את מה שבחרת. לאחר מכן לא תוכל לשנות את הבחירה או להתחרט</p>
                                <button disabled={blockButton} className="btn btn-dark btn-lg btn-block">אישור</button></div>
                        </form>
                    </div>
                </div>
                {isSuccess.current === true ? <h3><>.</>אשריך, זכית לקחת חלק! תודה תזכורת נשלחה למייל</h3> : <></>}
            </Modal>
        </>
    )

}