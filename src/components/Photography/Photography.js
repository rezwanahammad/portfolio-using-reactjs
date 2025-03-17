import React from 'react'
import './Photography.css'
import pic1 from '../../assets/Pic1.jpg'
import pic2 from '../../assets/Pic2.jpg'
import pic3 from '../../assets/Pic4.jpg'
import pic4 from '../../assets/Pic5.jpg'
import pic5 from '../../assets/Pic6.jpg'
import pic6 from '../../assets/Pic7.jpg'
import pic8 from '../../assets/Pic9.jpg'
import pic9 from '../../assets/Pic10.jpg'

const Photography = () => {
  return (
    <section id='Photography'>
        <span className='PhotographyTitle'>Photography</span>
        <span className='PhotographyDesc'>
            <div className="photographyText">
                {/* <h2>Photography</h2> */}
                <p>Besides study,I love to capture the beauty around me.Whenever something attracts my eye,I take out my phone and capture it as memory. </p>
                <p>Here are the few captures of mine:</p>
            </div>
            <div className="photographyPic">
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
                <img src={pic3} alt="pic3" />
                <img src={pic4} alt="pic4" />
                <img src={pic5} alt="pic5" />
                <img src={pic6} alt="pic6" />
                <img src={pic8} alt="pic8" />
                <img src={pic9} alt="pic9" />


            </div>
        </span>

    </section>
  )
}

export default Photography
