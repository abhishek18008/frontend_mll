import React from 'react'

function TopBar() {
  return (
    <>
        <div id="topBar" className='center'>
            <div id="logo" className='center'>
                <img src={process.env.PUBLIC_URL+"/image.png"} alt="Error Loading Image" />
            </div>
            <div id="user" className='center'>
                <p><a href="#">User</a></p>
                <img src={process.env.PUBLIC_URL+"/userIcon.jpg"} alt="Error Loading Image" />
            </div>
        </div>
    </>
  )
}

export default TopBar
