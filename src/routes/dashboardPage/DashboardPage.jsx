import React from 'react'
import './dashboardPage.css'

const DashboardPage = () => {
  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="dashboardPage logo image" />
          <h1>KARMA AI</h1>
        </div>

        {/* contains options to help you */}
        <div className="options_container">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>

          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          
          {/* <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div> */}

        </div>
      </div>

      <div className="formContainer">
        <form>
          <input type="text" placeholder="Message Me..."/>
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage