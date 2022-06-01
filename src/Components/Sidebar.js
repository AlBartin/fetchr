import React from 'react'

function Sidebar({filter}) {

  return (
    <div className="filter">
      <h3> filter by:</h3>
      <div className="sidebar-age">
        <h4>age</h4>
        
          <button value="all" onClick={ () => filter("all")}> all </button>
          <button value="1" onClick={ () => filter("1")}> 1 </button>
          <button value="2" onClick={ () => filter("2")}> 2 </button>
          <button value="3" onClick={filter}> 3 </button>
          <button value="4" onClick={filter}> 4 </button>
          <button value="5" onClick={filter}> 5 </button>
          <button value="6" onClick={filter}> 6 </button>
          <button value="7" onClick={filter}> 7 </button>
       
      </div>

      <div className="sidebar-sex">
        <h4>sex</h4>
        <select  >
          <option value="all"> all </option>
          <option value="female"> female </option>
          <option value="male"> male </option>
        </select>
      </div>

      <div className="sidebar-size">
        <h4>size</h4>
        <select >
          <option value="all"> all </option>
          <option value="small"> small </option>
          <option value="medium"> medium </option>
          <option value="large"> large </option>
        </select>
      </div>

      <div className="sidebar-location">
        <h4>location</h4>
        <select >
          <option value="all"> all </option>
          <option value="dog park"> dog park </option>
          <option value="beach"> beach </option>
          <option value="hiking trail"> hiking trail </option>
        </select>
      </div>

    
    </div>
  );
}

export default Sidebar