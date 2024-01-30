
import "./Popup.css"
import imagerules from "../assets/image-rules.svg"
import iconclose from "../assets/icon-close.svg"

function Popup(props: any) {
  return (props.trigger) ? (
  <div className="popupcontainer" onClick={()=> props.setTrigger(false)}>
    <div className='popup'>
        
            <div className='rulestext'><h1>RULES</h1></div>
            <div className="imgcontainer"><img className="imgrules"src={imagerules} /></div>
           <button className='closebtn' onClick={()=> props.setTrigger(false)}><img src={iconclose}/>
            </button>
           {props.children}
        
    </div>
  </div>
  ) : "";
}

export default Popup