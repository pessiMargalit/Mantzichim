import { useEffect, useRef } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import '../style/userModal.css'

export function UserModal(props) {

    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);

    const slainName = useRef('');
    const masechtotName = props.masechtotName;

    const navigate = useNavigate();

    async function getslainName() {
        await axios.get(`url${props}`)
            .then((response) => {
                if (response.status >= 200 & response.status <= 300)
                    console.log(response.data);
                slainName.current = response.data;
            })
            .catch((error) => {
                console.log(error);
            }, []);
    }


    useEffect(() => {
        handeShow();
        getslainName()
    }, [])



    const schema = yup.object().shape({
        id: yup.string(),
        name: yup.string().required("נא להכניס ערך"),
        email: yup.string().default(' '),

    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {

        if (props.masechtotName != []) {
            data.masechtot_name = props.masechtotName;
        }
        if (props.hasKadish == true) {
            data.kadish_name = slainName.current
            data.mishna_name = slainName.current
        }
        await axios.post('url', data)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response.data);

                }
            })
            .catch(error => {
                console.log(error);
            });
        console.log(data);
        handeClose()
        navigate('/')
    }


    return (
        <>
            <Modal id="modal" show={show} onHide={() => setShow(false)} style={{ margin: "2vw" }}>
                <h4>:שם החייל</h4>
                <h4>{slainName.current}</h4>
                <form className="form" onSubmit={handleSubmit(onSubmit)} style={{ width: "40vw", marginLeft: "6vw", marginRight: "3vw", padding: "10vh" }}>
                    <>
                        {/* <div style={{ "display": "flex" }}> */}

                        <div class="form-row">
                            <div class="form-group">

                                <input class="form-control" type="text" name="name" id="name" {...register('name')} />
                                <label for="name" id="label">שם</label>
                                <small class="text-danger">
                                    {errors?.name && errors.name.message}
                                </small>

                                <input
                                    id="form3Example1m"
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
                                <div>
                                    <p>
                                        :מסכתות
                                    </p>
                                    {masechtotName.map((masechet) => (
                                        <p>
                                            {masechet}
                                        </p>
                                    ))}
                                </div>



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