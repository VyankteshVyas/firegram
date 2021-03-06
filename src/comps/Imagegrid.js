import React from 'react'
import useFirestore from '../hooks/useFirestore';


const Imagegrid = ({setselectedImg}) => {
    const { docs } = useFirestore('images');

    return ( <div className="img-grid">
    {docs&&docs.map(doc=>(
        <div className="img-wrap" key={doc.id}
        onClick={function(){
            setselectedImg(doc.url)
        }}>
            <img src={doc.url} alt="uploaded pic"/>
        </div>
    ))}
    </div> );
}
 
export default Imagegrid;