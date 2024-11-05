import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import './Profile.css'
import cookies from 'react-cookies';
import { BiImageAdd } from 'react-icons/bi';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { stateAuth, setLoadingOff, setLoadingOn } from '../../store/auth';
import Register from '../../components/register/Register';
import Loader from '../../components/Loader/Loader';
function Profile() {
    const state = useSelector(stateAuth);
    const dispatch = useDispatch();

    const [imageProfile, setImageProfile] = useState(null);


    useEffect(() => {
        if (cookies.load('userId')) {
            getUser();
        }
    }, []);

    const getUser = async () => {
        if (cookies.load('userId')) {
            dispatch(setLoadingOn());
            await axios.get(`http://localhost:4006/user/${cookies.load('userId')}`).then((res) => {
                console.log("DataProfileDDD>>>>", res.data)
                cookies.save('imageprofile', `http://localhost:4006/${res.data.imageprofile}`);
                setImageProfile(res.data.imageprofile);
                dispatch(setLoadingOff());
            }).catch((err) => {
                console.log(err);
                dispatch(setLoadingOff());
            })
        }
    }



    const handelchange = async (e) => {

        const id = cookies.load('userId');
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        dispatch(setLoadingOn());

        await axios.put(`http://localhost:4006/users/${id}`, formData,
            {
                headers: {
                    Authorization: `Bearer ${cookies.load('token')}`
                }
            }
        ).then(res => {
            getUser();
            dispatch(setLoadingOff());
        }
        ).catch(err => {
            console.log(err,);
            dispatch(setLoadingOff());
        }
        )

    }

    return (
        <>
            {state.isLogin &&
                <>
                    {state.isLoading && <Loader />}
                    <Navbar />
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center text-white">
                                    <div className="m-b-25">
                                        <img className='img-radius' style={{ margin: '20px auto' }} src={`${!imageProfile?.includes("https") ? `http://localhost:4006/${imageProfile}` : imageProfile}`} alt='UserProfileImage' />

                                    </div>
                                    <h6 className="f-w-600">WELCOME</h6>
                                    <p>{cookies.load('username')}</p>
                                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-blocki">
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Email</p>
                                            <h6 className="text-muted f-w-400">{cookies.load('email')}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Phone</p>
                                            <h6 className="text-muted f-w-400">{cookies.load('phonenumber')}</h6>
                                        </div>
                                    </div>
                                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">.</h6>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">UserRole</p>
                                            <h6 className="text-muted f-w-400">{cookies.load('userRole')}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Change Image </p>

                                            <h6 className="text-muted f-w-400">
                                                <label htmlFor="file-upload" name='file' className="custom-file-upload">
                                                    <i className="fa fa-cloud-upload"></i> <BiImageAdd style={{ color: 'rgb(26, 45, 109)', fontSize: '35px' }} />
                                                </label>
                                                <input id="file-upload" type="file" onChange={handelchange} />
                                            </h6>
                                        </div>
                                    </div>
                                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
            {!state.isLogin && <Register />}

        </>
    )

}

export default Profile;