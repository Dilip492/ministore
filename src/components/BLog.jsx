import post2 from "../images/post-item2.jpg"
import post1 from "../images/post-item1.jpg"
import post3 from "../images/post-item3.jpg"

// import post1 from "../web_images/mysterygiftbox.jpg"
// import post2 from "../web_images/premium.jpg"
// import post3 from "../web_images/boxes.png"
import quote from "../images/quotation1.png"
import left from "../images/left.png";

// import btn from "../images/arrow.png";


const Blog = () => {

    let currentSlide = 1;
    const slider_right = () => {



        const slides = document.querySelectorAll(".slide-post");

        const sliderPost = document.querySelector(".slider-post");

        let totalslides = slides.length;

        if (currentSlide < totalslides) {
            sliderPost.style.transform = `translateX(-${currentSlide * 100}%)`
            currentSlide++
        } else {

            sliderPost.style.transform = `translateX(-0%)`
            currentSlide = 1;
        }

        //  if (currentSlide === totalslides) {
        //     currentSlide = 0;
        //     sliderPost.style.transform = `translateX(-${currentSlide * 100}%)`;
        // }
    }


    const slider_left = () => {
        const slides = document.querySelectorAll(".slide-post");

        const sliderPost = document.querySelector(".slider-post");

        let totalslides = slides.length;

        if (currentSlide > totalslides) {
            sliderPost.style.transform = `translateX(${currentSlide * 100}%)`
            currentSlide++
        } else {

            sliderPost.style.transform = `translateX(0%)`
            currentSlide = 1;
        }


    }

    //   setInterval(slider, 3000);

    return (

        <div>
            {/* this is blog container */}
            <div className="blog-container">


                <div className="blog-header">

                    <h1>LATEST POST</h1>
                    <button>READ POST</button>
                </div>

                <div className="blog-post">

                    <div className="post">
                        <img src={post1} alt="img-post" />

                        <div className="post-text">
                            <span>FEB 22, 2023 </span>
                            <span>- GADGETS </span>
                            <h3>GET SOME COOL GADGETS IN 2023</h3>
                        </div>
                    </div>
                    <div className="post">
                        <img src={post2} alt="img-post" />
                        <div className="post-text">
                            <span>FEB 22, 2023 </span>
                            <span>- GADGETS </span>
                            <h3>TECHNOLOGY HACK YOU WON'T GET</h3>
                        </div>
                    </div>
                    <div className="post">
                        <img src={post3} alt="img-post" />
                        <div className="post-text">
                            <span>FEB 22, 2023 </span>
                            <span>- GADGETS </span>
                            <h3>TOP 10 SMALL CAMERA IN THE WORLD</h3>
                        </div>
                    </div>


                </div>

                {/* this is slider   */}

            <div className="slide-btn1">
                    <img className="left-arrow" onClick={slider_left} src={left} alt="btn" />
                    <img className="right-arrow" onClick={slider_right} src={left} alt="btn" />

                </div>
                <div className="slider-container">
                    <div className="svg-quote">
                        <img src={quote} alt="svg" />

                    </div>
                    <div className="slider-post">

                        <div className="slide-post">
                            <p>“A blog is a digital publication that can complement a website or exist<br></br> independently. A blog may include articles, short posts, listicles,<br></br> infographics, videos, and other digital content.”</p>
                        </div>
                        <div className="slide-post">
                            <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis<br></br> lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise<br></br> sagittis lorem habi tasse morbi.”</p>

                        </div>

                        <div className="slide-post">
                            <p>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis<br></br> lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise<br></br> sagittis lorem habi tasse morbi.”</p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )


}

export default Blog;