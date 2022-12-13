import React from 'react'
import Slider from 'react-slick';

function Card() {


  return (
    // <div className="card">
    //   <div className="card-top">
    //     <img src='https://www.color-meanings.com/wp-content/uploads/Blue_and_yellow_colored_wood-1024x683.jpeg' alt='picTrip' />
    //   </div>
    //   <div className="card-bottom">
    //     <div className='card-text'>
    //       <h1>titledddddddddddddddddddddddddddddddddddd</h1>
    //       <h1 className='price'>price</h1>
    //     </div>
    //     <div className='card-date'>
    //       <h3 className='month'>date/date/date</h3>
    //       <h3 className='days'>duration</h3>
    //     </div>
    //   </div>
    // </div>
    <div className='trip-card-holder'>
      <div className='trip-card-image'>
        {/* <Slider {...settings} > */}
        <img src={'https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0'} alt='img' />
        {/* <img src={'https://preview.colorlib.com/theme/tralive/assets/img/gallery/services3.jpg'} alt='img' />
          <img src={'https://preview.colorlib.com/theme/tralive/assets/img/gallery/services3.jpg'} alt='img' />
          <img src={'https://preview.colorlib.com/theme/tralive/assets/img/gallery/services3.jpg'} alt='img' /> */}
        {/* </Slider > */}
      </div>
      <div className='trip-card-data'>
        <div className='card-data-header'>
          <h4 className='card-data-header-h4'>package el-7baieb </h4>
          <p className='card-data-header-p'>$10JD/person</p>
        </div>
        <div className='card-data-middle'>
          <p className='card-data-middle-p'>(Irbid)</p>
        </div>
        <div className='card-data-bottom'>
          <h4 className='card-data-bottom-h4'>25/5/2023</h4>
          <div className='card-data-bottom-gap'></div>
          <p className='card-data-bottom-p'>10:30am-12:30pm</p>
        </div>
      </div>
    </div >
  )
}

export default Card
