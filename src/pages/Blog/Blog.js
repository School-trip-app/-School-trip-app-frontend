import React, { useEffect } from 'react';
import './blog.css';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
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
    await axios.get('http://localhost:4006/memories')
      .then(res => {
        console.log("MEM>>>>>>>>>>>>>>>>>>>>", res.data)
        setMemory(res.data);
        dispatch(setLoadingOff());
      }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
      })
  }

  const handellike = (id) => {
    axios.patch(`http://localhost:4006/like/${id}`)
    getallmemory();
  }
  const handeldislike = (id) => {
    axios.patch(`http://localhost:4006/dislike/${id}`)
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

  const handledelete = async (id) => {
    await axios.delete(`http://localhost:4006/memory/${id}`).then(() => {
      getallmemory();
    }).catch((err) => {
      console.log(err)
    })
  }

  const handeldeletecomment = (id) => {
    axios.delete(`http://localhost:4006/comment/${id}`).then(() => {
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
    await axios.post(`http://localhost:4006/comments`, {
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



  const handeldiSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoadingOn());
    const formData = new FormData();
    formData.append('userId', cookies.load('userId'));
    formData.append('title', e.target.title.value);
    formData.append('discription', e.target.description.value);
    formData.append('image', image);
    await axios.post('http://localhost:4006/memory', formData)
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
  }, [])
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
                    <img className='imgpost' src={`http://localhost:4006/${item.image}`} alt='test' />                  <div class="post-content">
                      <div class="post-actions">
                        <div class="likes">
                          ❤️ <span>123 Likes</span>
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
                  // <div key={item.id}>
                  //   <div className='post' >
                  //     <div className='post1'>
                  //       <img className='imgpost' src={`http://localhost:4006/${item.image}`} alt='test' />
                  //     </div>
                  //     <div className='divcomment'>
                  //       <div className='post2'>
                  //         <div className='row1'>
                  //           <h1 className='titlepost'>{item.title}</h1>
                  //           <p className='prapost'>{item.discription}</p>
                  //           <div className='commentsContainer'>
                  //             {item?.comments?.map((item) => {
                  //               return (
                  //                 <>
                  //                   <span className='nameComment'>{item?.user.username}</span>
                  //                   <div className='row3' key={item.id}>
                  //                     <p className='coment'>{item.content}</p>
                  //                     {/* <AiOutlineClose onClick={() => { handeldeletecomment(item.id) }} /> */}
                  //                   </div>
                  //                 </>
                  //               )
                  //             })}
                  //           </div>
                  //         </div>
                  //         <div className='row2'>
                  //           <button className='icon-blog'
                  //             onClick={() => { handledelete(item.id) }}
                  //           ><AiOutlineDelete style={{ color: 'rgb(126, 160, 255)' }} size={27} /></button>
                  //           <button className='icon-blog'
                  //             onClick={() => { handellike(item.id) }}
                  //             onMouseEnter={() => { handleshowlike(item.likes) }}>
                  //             {like === item.likes ? <p className='like'>{item.likes}</p> :
                  //               <AiFillLike style={{ color: 'rgb(126, 160, 255)' }} size={25} />
                  //             }
                  //           </button>
                  //           <button className='icon-blog'
                  //             onClick={() => { handeldislike(item.id) }}
                  //             onMouseEnter={() => { handleshowdislike(item.dislikes) }}>
                  //             {dislike === item.dislikes ? <p className='like'>{item.dislikes}</p> :
                  //               <AiFillDislike style={{ color: 'rgb(126, 160, 255)' }} size={25} />
                  //             }
                  //           </button>
                  //         </div>
                  //       </div>
                  //       <form className='post3' onSubmit={(e) => { handeladdcomment(e, item.id) }}>
                  //         <input className='inputcomment' type='text' placeholder='Add a comment' name='comment' />
                  //         <button className='icon-blog'
                  //           type='submit'
                  //         ><BiCommentDetail style={{ color: 'rgb(126, 160, 255)' }} size={27} /></button>
                  //       </form>
                  //     </div>
                  //   </div>
                  // </div>
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