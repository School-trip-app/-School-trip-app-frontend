import React, { useEffect } from 'react';
import './blog.css';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import axios from 'axios';
import { BiCommentDetail } from 'react-icons/bi';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateAuth, setLoadingOff, setLoadingOn } from '../../store/auth';
import Register from '../../components/register/Register';
import { useSelector, useDispatch } from "react-redux";
import cookies from 'react-cookies';
import Loader from '../../components/Loader/Loader';

function Memory() {
  const state = useSelector(stateAuth);
  const dispatch = useDispatch();

  const [like, setLike] = useState('')
  const [dislike, setDislike] = useState('')

  const [image, setImage] = useState('');
  const [memory, setMemory] = useState([]);

  const handelchange = (e) => {
    setImage(e.target.files[0]);
  }

  const getallmemory = async () => {
    dispatch(setLoadingOn());
    if (localStorage.getItem('userId')) {
      console.log("localStorage.getItem('userId')>>>", localStorage.getItem('userId'))
      await axios.get(`https://school-trip-app-backend.onrender.com/memory/${localStorage.getItem('userId')}`, {
        userId: localStorage.getItem('userId'),
      })
        .then(res => {
          setMemory(res.data);
          dispatch(setLoadingOff());
        }).catch((err) => {
          console.log(err);
          dispatch(setLoadingOff());
        })
    }
  }


  const handledelete = async (id) => {
    await axios.delete(`https://school-trip-app-backend.onrender.com/memory/${id}`).then(() => {
      getallmemory();
    }).catch((err) => {
      console.log(err)
    })
  }

  const handeldeletecomment = (id) => {
    axios.delete(`https://school-trip-app-backend.onrender.com/comment/${id}`).then(() => {
      getallmemory();
    }).catch((err) => {
      console.log(err)
    })
  }

  const handeladdcomment = async (e, id) => {
    e.preventDefault();
    const user = cookies.load('userId');
    const memoryId = id;
    const comment = e.target.comment.value;
    dispatch(setLoadingOn());
    // Send data as JSON instead of FormData
    await axios.post(`https://school-trip-app-backend.onrender.com/comments`, {
      userId: user,
      memoryId: memoryId,
      content: comment
    })
      .then(() => {
        getallmemory();
        dislike(setLoadingOff());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
      });
  };

  const handleLikes = async (memoryId, dislikedByUser) => {
    console.log("user<<<<<<<<", localStorage.getItem('userId'),)
    if (localStorage.getItem('userId')) {
      const userId = localStorage.getItem('userId');
      const reactionType = dislikedByUser ? 'like' : 'dislike'
      const payload = {
        userId,
        reactionType
      }
      await axios.post(`https://school-trip-app-backend.onrender.com/memories/${memoryId}/reaction`, payload).then((res) => {
        console.log("memory>>>>>>>>>>>>Likes")
        getallmemory()
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  const handeldiSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoadingOn());
    const formData = new FormData();
    formData.append('userId', cookies.load('userId'));
    formData.append('title', e.target.title.value);
    formData.append('discription', e.target.description.value);
    formData.append('image', image);
    await axios.post('https://school-trip-app-backend.onrender.com/memory', formData)
      .then(res => {
        console.log(res.data);
        getallmemory();
        dispatch(setLoadingOff());
      }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff())
      })

  }
  useEffect(() => {
    getallmemory();
  }, []);


  console.log("memory>>>>>>>>>>>>", memory)
  return (
    <>
      {state.isLogin &&
        <>
          {state.isLoading && <Loader />}
          <Navbar />

          <div>
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
          <div>
            <div className='postform'>
              <h1 className='titlepostform'>Add your memory</h1>
              <form className='form' onSubmit={handeldiSubmit}>
                <input className='input' type='text' maxLength="40" placeholder='Title' name='title' />
                <textarea className='textarea' type='text' maxLength="250" placeholder='Description' name='description' />
                <label htmlFor="file-upload" name='file' className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> <BiImageAdd style={{ color: 'rgb(126, 160, 255)', fontSize: '35px' }} />
                </label>
                <input id="file-upload" type="file" onChange={handelchange} />
                <button className='btn'
                  type='submit'
                ><AiOutlineSend style={{ color: 'rgb(126, 160, 255)', fontSize: '35px' }} /></button>
              </form>
            </div>

            <div className='cardsBody'>
             

              {memory && memory.map((item) => {
                return (
                  <div class="post-card">
                    <img className='imgpost' src={`https://school-trip-app-backend.onrender.com/${item.image}`} alt='test' />                  <div class="post-content">
                      <div class="post-actions">
                        <div class="likes" onClick={() => handleLikes(item?.id, item.dislikedByUser)}>
                          {!item.dislikedByUser ? "❤️" : " 🤍 "} <span>{item.likes} Likes</span>
                        </div>
                        <div class="comments-btn">
                          💬 <span>View Comments</span>
                        </div>
                      </div>
                      <div class="comments-section">
                        {item?.comments?.map((item) => {
                          return <div class="comment">
                            <span class="commenter-name">{item?.user.username}</span>
                            <span class="comment-text">{item.content}</span>
                          </div>
                        })}
                      </div>
                      <form className='post3' onSubmit={(e) => { handeladdcomment(e, item.id) }}>
                        <input className='inputcomment' type='text' placeholder='Add a comment' name='comment' />
                        <button className='icon-blog'
                          type='submit'
                        ><BiCommentDetail style={{ color: 'rgb(126, 160, 255)', }} size={25} /></button>
                      </form>
                    </div>
                  </div>
                )
              }
              )}
            </div>
          </div>
          <Footer />
        </>}
      {!state.isLogin && <Register />}
    </>
  )
}

export default Memory