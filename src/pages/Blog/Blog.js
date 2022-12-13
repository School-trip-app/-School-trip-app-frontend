import React from 'react';
import './blog.css';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { Spinner } from '@chakra-ui/react'
import { useState, state } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import { useToast } from '@chakra-ui/react'

function Memory() {

    const toast = useToast()

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const handellike = () => {
        setLike(true);
        setTimeout(() => {
            setLike(false);
        }, 1500);
    }

    const handeldislike = () => {
        setDislike(true);
        setTimeout(() => {
            setDislike(false);
        }, 1500);
    }
    const handeldiSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        toast({
            title: "Memory added.",
            description: "We've added your memory for the world to see.",
            status: "success",
            duration: 2000,
            isClosable: true,
        })

    }
    return (
        <>
            <div>
                <div >
                    <section className='top-background-about'>
                        <p>Memories</p>
                    </section>
                </div>
                <section className='packages'>
                    <div>
                        <span className='check'> Old Is Gold </span>
                        <p className='upcome'>Share your happy moments</p>
                    </div>
                </section>
                <div className='postform'>
                    <h1 className='titlepostform'>Add your Memory</h1>
                    <form >
                        <div className='form-group'>
                            <input className='input' type='text' maxlength="40" placeholder='Title' />
                            <textarea className='textarea' type='text' maxlength="250" placeholder='Description' />
                            <label for="file-upload" className="custom-file-upload">
                                <i className="fa fa-cloud-upload"></i> <BiImageAdd style={{ color: 'rgb(126, 160, 255)', fontSize: '30px' }} />
                            </label>
                            <input id="file-upload" className='input-ib' type="file" />
                            <button className='btn'
                                onClick={handeldiSubmit}
                            ><AiOutlineSend style={{ color: 'rgb(126, 160, 255)', fontSize: '30px', marginBottom: '100px' }} /></button>
                        </div>
                    </form>
                </div>
                <div className='post'>
                    <div className='post1'>
                        <img className='imgpost' src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" />
                    </div>
                    <div className='post2'>
                        <h1 className='titlepost'>Image title</h1>
                        <p className='prapost'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='like-unlike'>
                            <h6 className='like' onClick={handellike}>
                                {like ? <Spinner /> : <AiFillLike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                            <div className='cont'>
                                <h6 className='likecount'>99</h6>
                                <h6 className='unlikecount'>30</h6>
                            </div>
                            <h6 className='unlike' onClick={handeldislike}>
                                {dislike ? <Spinner /> : <AiFillDislike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='post'>
                    <div className='post1'>
                        <img className='imgpost' src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" />
                    </div>
                    <div className='post2'>
                        <h1 className='titlepost'>Image title</h1>
                        <p className='prapost'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='like-unlike'>
                            <h6 className='like' onClick={handellike}>
                                {like ? <Spinner /> : <AiFillLike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                            <div className='cont'>
                                <h6 className='likecount'>99</h6>
                                <h6 className='unlikecount'>30</h6>
                            </div>
                            <h6 className='unlike' onClick={handeldislike}>
                                {dislike ? <Spinner /> : <AiFillDislike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='post'>
                    <div className='post1'>
                        <img className='imgpost' src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" />
                    </div>
                    <div className='post2'>
                        <h1 className='titlepost'>Image title</h1>
                        <p className='prapost'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='like-unlike'>
                            <h6 className='like' onClick={handellike}>
                                {like ? <Spinner /> : <AiFillLike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                            <div className='cont'>
                                <h6 className='likecount'>99</h6>
                                <h6 className='unlikecount'>30</h6>
                            </div>
                            <h6 className='unlike' onClick={handeldislike}>
                                {dislike ? <Spinner /> : <AiFillDislike style={{ color: 'rgb(126, 160, 255)' }} />}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memory