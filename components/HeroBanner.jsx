import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>Small text</p>
        <h3>Mid text</h3>
        <img src='' alt='headphones' className='hero-banner-image' />

        <div>
          <Link href='/product/ID'>
            <button type='button'>Button text</button>
          </Link>
          <div className='desc'>
            <h5>desciption</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
