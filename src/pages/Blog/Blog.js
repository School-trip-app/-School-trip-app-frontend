import React, { useEffect } from 'react';
import './blog.css';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
function Memory() {

    const toast = useToast()

    const [like, setLike] = useState('')
    const [dislike, setDislike] = useState('')

    const [image, setImage] = useState('');
    const [memory, setMemory] = useState([]);

    const handelchange = (e) => {
        setImage(e.target.files[0]);
    }

    const getallmemory = () => {
        axios.get('https://sophisticated-steel-production.up.railway.app/memory')
            .then(res => {
                setMemory(res.data);
            })
    }

    const handellike = (id) => {
        axios.patch(`https://sophisticated-steel-production.up.railway.app/like/${id}`)
        getallmemory();
    }
    const handeldislike = (id) => {
        axios.patch(`https://sophisticated-steel-production.up.railway.app/dislike/${id}`)
        getallmemory();

    }

    const handleshowlike = (likes) => {
        setLike(likes);
        setTimeout(() => {
            setLike('');
        }, 1000);
    }
    const handleshowdislike = (dislikes) => {
        setDislike(dislikes);
        setTimeout(() => {
            setDislike('');
        }, 1000);
    }

    const handledelete = (id) => {
        axios.delete(`https://sophisticated-steel-production.up.railway.app/memory/${id}`)
        getallmemory();
    }

    const handeldeletecomment = (id) => {
        axios.delete(`https://sophisticated-steel-production.up.railway.app/comment/${id}`)
        getallmemory();
    }

    const handeladdcomment = (e, id) => {
        e.preventDefault();
        const user = 1;
        const memoryId = id;
        const comment = {
            comment: e.target.comment.value
        }


        axios.post(`https://sophisticated-steel-production.up.railway.app/comment/${user}/${memoryId}`, comment)
        getallmemory();
    }



    const handeldiSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', '1');
        formData.append('title', e.target.title.value);
        formData.append('discription', e.target.description.value);
        formData.append('image', image);




        axios.post('https://sophisticated-steel-production.up.railway.app/memory', formData)
            .then(res => {
                console.log(res.data);
                getallmemory();
            })

        toast({
            title: "Memory added.",
            description: "We've added your memory for the world to see.",
            status: "success",
            duration: 2000,
            isClosable: true,
        })

    }

    useEffect(() => {
        getallmemory();
    }, [])

    return (
        <>
        <Navbar/>
            <div>

                <div className='postform'>

                    <h1 className='titlepostform'>Add your memory</h1>

                    <form className='form' onSubmit={handeldiSubmit}>
                        <input className='input' type='text' maxlength="40" placeholder='Title' name='title' />
                        <textarea className='textarea' type='text' maxlength="250" placeholder='Description' name='description' />

                        <label for="file-upload" name='file' className="custom-file-upload">
                            <i className="fa fa-cloud-upload"></i> <BiImageAdd style={{ color: 'rgb(126, 160, 255)', fontSize: '35px' }} />
                        </label>
                        <input id="file-upload" type="file" onChange={handelchange} />

                        <button className='btn'
                            type='submit'
                        ><AiOutlineSend style={{ color: 'rgb(126, 160, 255)', fontSize: '35px' }} /></button>
                    </form>

                </div>

                {memory && memory.map((item) => {
                    return (
                        <>
                            <div className='post'>

                                <div className='post1'>
                                    <img className='imgpost' src={`https://sophisticated-steel-production.up.railway.app/${item.image}`} alt='test' />
                                </div>

                                <div className='divcomment'>

                                    <div className='post2'>

                                        <div className='row1'>
                                            <h1 className='titlepost'>{item.title}</h1>
                                            <p className='prapost'>{item.discription}</p>


                                            {item.comments !== [] && item.comments.map((item) => {
                                                return (
                                                    <>
                                                        <div className='row3'>
                                                            <p className='coment'>{item.comment}</p>
                                                            <AiOutlineClose onClick={() => { handeldeletecomment(item.id) }} />
                                                        </div>
                                                    </>
                                                )
                                            })}

                                        </div>

                                        <div className='row2'>
                                            <button className='icon'
                                                onClick={() => { handledelete(item.id) }}
                                            ><AiOutlineDelete style={{ color: 'rgb(126, 160, 255)' }} size={27} /></button>

                                            <button className='icon'
                                                onClick={() => { handellike(item.id) }}
                                                onMouseEnter={() => { handleshowlike(item.likes) }}>
                                                {like === item.likes ? <p className='like'>{item.likes}</p> :
                                                    <AiFillLike style={{ color: 'rgb(126, 160, 255)' }} size={25} />
                                                }
                                            </button>

                                            <button className='icon'
                                                onClick={() => { handeldislike(item.id) }}
                                                onMouseEnter={() => { handleshowdislike(item.dislikes) }}>
                                                {dislike === item.dislikes ? <p className='like'>{item.dislikes}</p> :
                                                    <AiFillDislike style={{ color: 'rgb(126, 160, 255)' }} size={25} />
                                                }
                                            </button>

                                        </div>
                                    </div>

                                    <form className='post3' onSubmit={(e) => { handeladdcomment(e, item.id) }}>
                                        <input className='inputcomment' type='text' placeholder='Add a comment' name='comment' />
                                        <button className='icon'
                                            type='submit'
                                        ><BiCommentDetail style={{ color: 'rgb(126, 160, 255)' }} size={27} /></button>
                                    </form>

                                </div>


                            </div>
                        </>

                    )
                }
                )}

            </div>
            <Footer/>
        </>
    )
}

export default Memory