import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const photos = [
    {
        name: "img1",
        url: "imgs/blowdryer.jpeg"
    },
    {
        name: "img2",
        url: "imgs/masacara.jpeg"  
    },
    {
        name: "img3",
        url: "imgs/flatiron.jpg"
    },
    {
        name: "img4",
        url: "imgs/blush.jpg"
    }
]


class SlideShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            className: "slides"
        }
        return (
            <div>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <img height="350px" width="100%" src={photo.url}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default SlideShow;