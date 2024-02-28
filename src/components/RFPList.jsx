import React from 'react'

function RFPList() {
  return (
    <div id="midSec">
      <div id="listLeftSec" className='center'>
        <p>Home</p>
        <h2>RFP List</h2>
      </div>
      <div id="listMidSec">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked/>
            <label class="btn btn-outline-danger fw-bold text-dark" for="btnradio1">All RFP's</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2"/>
            <label class="btn btn-outline-danger fw-bold text-dark" for="btnradio2">Submitted RFP's</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3"/>
            <label class="btn btn-outline-danger fw-bold text-dark" for="btnradio3">Awarded RFP's</label>
        </div>
      </div>
      <div id="listRightSec" className='center'>
        <input type="text" name="search" id="search" placeholder='Search in table'/>
      </div>
    </div>
  )
}

export default RFPList
