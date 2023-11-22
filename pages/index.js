import React from "react"

const Home = () => {
  return (
    <>
      Hero Banner
      <div>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>{["product 1", "product 2"].map((product) => product)}</div>
      Footer
    </>
  )
}

export default Home
