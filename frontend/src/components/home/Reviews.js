import React from 'react'
import './reviews.css'

const reviews = [
    {
        id:'1',
        heading:'Good Quality',
        discrip:'I highly recommend shopping from this store',
        rating: 4.5,
        img:'https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg',
        userimg:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
    },
    {
        id:'1',
        heading:'very good',
        discrip:'I highly recommend shopping from this store',
        rating: 4,
        img:'https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg',
        userimg:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
    },
    {
        id:'1',
        heading:'very good',
        discrip:'I highly recommend shopping from this store',
        rating: 5,
        img:'https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg',
        userimg:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
    }
]

const StarRating = (rating) => {
    const MAX_RATING = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;


  const stars = Array.from(Array(MAX_RATING)).map((_, index) => {
    if (index < fullStars) {
        return(
            <img src="https://www.freeiconspng.com/uploads/yellow-christmas-star-png-18.png" alt="" className='reviewboxstar'/>
        )
    } else if (hasHalfStar && index === fullStars) {
        return(
            <img src="https://www.kindpng.com/picc/m/361-3617070_star-half1600-half-star-rating-icon-hd-png.png" alt="" className='reviewboxstar_half'/>
        )
    }
    return(
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/2048px-Empty_Star.svg.png" alt="" className='reviewboxstar'/>
    )
  });

  return <div className="star-rating">{stars}</div>;
};




const Reviews = () => {
    const screenWidth = window.innerWidth;

    let reviewslist = reviews.slice(0,3)

    if(screenWidth <= 450){
        reviewslist = reviews.slice(0,1) 
    }
    else if(screenWidth <= 768){
        reviewslist = reviews.slice(0,2) 
    }
    else{
        reviewslist = reviews.slice(0,3)
    }

    const displayreviews = reviewslist.map(review=>{
        return(
            <div className='reviewbox'>
                <div className='reviewboxtop'>
                    <div className='reviewboxtopleft'>
                        <h4 className='reviewboxtopleftheading'>
                            {review.heading}
                        </h4>
                        <span>
                            {review.discrip}
                        </span>
                        <div className='reviewboxrating'>
                            <span>{StarRating(review.rating)}</span>
                            <span className='reviewshown'>{review.rating}</span>
                        </div>
                    </div>
                    <div className='reviewboxtopright'>
                        <div className='reviewboxtoprightimgbox'>
                            <img src={review.userimg} alt="" className='reviewboxtoprightimg'/>
                        </div>
                    </div>
                    
                </div>

                <div className='reviewboxbottom'>
                    <img src={review.img} alt="" className='reviewimg' />
                </div>
            </div>
        )
    })

  return (
    <>
        <div className='reviews'>
            <div className='reviewsheadingarea'>
                <div>
                    <span className='reviewsheading'>
                        Reviews
                    </span>
                </div>

                <div>
                    <button className='reviewsbutton'>
                        see all
                    </button>
                </div>
            </div>

            <div className='reviewscontainer'>
                {displayreviews}
            </div>
        </div>
    </>
  )
}

export default Reviews
