import React from 'react'
import Others from './components/Others'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
    //imported settings from  react slick
    const settings = {
        dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"

        
      };
    
  return (
    //main container
    <div className='centered'>
        {/*header logos and links */}
       <div className='header'>
           <div className='header-logo'><h2>W.<span> uu</span></h2></div>
           <ul className='headerlinks'>
            <li>Home</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>New</li>
            <li>Categories</li>
            <li><i class="fa-solid fa-moon fa-flip-270"	></i></li>
           </ul>
       </div>
       {/*content container */}
    <div className='contentwrapper'>

          <div className='content'>
            {/*top section of the content */}
               <div className='top'> 
                {/*image section  */}
                    <div className='imagesection'>
                        <div className='image'>

                            {/*addding a slider to toggle various images from unsplash */}
                            <Slider {...settings}>

                                <div>
                                    <img src="https://images.unsplash.com/photo-1586527155314-1d25428324ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1enpsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            <div><img src="https://plus.unsplash.com/premium_photo-1687919417157-90b7a8fe7263?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" /></div>
                           <div>
                            <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                           </div>
                           <div>
                            <img src="https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                           </div>
                           <div>
                            <img src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                           </div>
                            </Slider>
                        </div>
            {/*info about the website */}
                       <div className='info'>
                            <h2>The Bright Future of Web 3.0?</h2>
                            <div className='text'>
                                <p>We dive in to the next evolution of the web that claims to put the power of the platforms back in to the hands of the people.But is it ready fulfilling  its promise?</p>
                                <button>Read More</button>

                            </div>
                    </div>
                    </div>
                    {/*new section with various questions and suspense */}
                    <div className='newsection'>
                        <h2>New</h2>
                        <div className='trends'>
                            <h5>Hydrogen vs ElectricCars</h5>
                            <p>will hydrogen fueled cars ever catch up to electric ones?</p>
                        </div>
                        <div className='trends'> 
                            <h5>The Downsides of AI Artistry</h5>
                            <p>What are the possible adverse effects od on demand AI images generations?</p>

                        </div>
                        <div className='trends'>
                            <h5>Is VC Funding Drying Up?</h5>
                            <p>Private funding by vc firms is down 50% YOY.We take a look at what that means</p>
                        </div>
                        
                                 </div>
                {/*bottom div import others.jsx component */}
                <div className='bottom'>
                    
                    <Others/>

                    </div>
                </div>
          </div>

    </div>
    </div>
    
    
  )
}
