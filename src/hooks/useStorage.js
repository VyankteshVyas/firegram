import {useState, useEffect} from 'react';
import {projectStorage,projectfirestore,timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress]=useState(0);
    const [err,setErr]=useState(null);
    const [url,setUrl]=useState(null);

    useEffect(function (){
        const storageRef=projectStorage.ref(file.name);
        const collectionRef = projectfirestore.collection('images');

        storageRef.put(file).on('statte_changed',function (snap){
            let per=(snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(per);
        },function (err){
            setErr(err);
        },async () => {
            const url=await storageRef.getDownloadURL();
            const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    },[file])
    
    return {progress,url,err};
}
 
export default useStorage;