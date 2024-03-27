import React from 'react'

function popup(props) {

  

  return (props.trigger) ? (
    <div className="popup">
      <div className="popupInterior">
        <button className="fechar">
          SAIR
        </button>
        {props.children}
      </div>
    </div> 
  ): "";
}

export default popup
