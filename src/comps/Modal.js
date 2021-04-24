import React from 'react';
const Modal = ({selectedImg,setselectedImg}) => {
    function handleClick(e){
        if(e.target.classList.contains('backdrop')){
            setselectedImg(null);
        }
        
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
     );
}
 
export default Modal;