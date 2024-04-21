import { useEffect, useState } from 'react'
import '../Screens/Lists/list.scss'

function Grid(props:any) {
const [favListID, setFavListID] = useState([]);
let finalFavList =[];
let favListIDData =[];
const addToFav = (data :any[]) =>{
   let favlist = JSON.parse(localStorage.getItem('favlist')) || [];
    favListIDData = JSON.parse(localStorage.getItem('favlistID')) || [];
   if(favListID.includes(data?.id)) {
    favListIDData.splice(favListIDData.indexOf(data.id), 1);
    console.log(favListIDData)
     setFavListID(favListIDData);
     localStorage.setItem('favlistID', JSON.stringify(favListIDData))
      finalFavList = favlist.filter((list) =>{
       return list.id != data.id
     })
     localStorage.setItem('favlist', JSON.stringify(finalFavList));
   } else {
      favlist.push(data);
      favListIDData.push(data.id); 
      setFavListID(favListIDData);
      localStorage.setItem('favlistID', JSON.stringify(favListIDData))
      localStorage.setItem('favlist', JSON.stringify(favlist));
   } 
} 

useEffect(() =>{
setFavListID(JSON.parse(localStorage.getItem('favlistID')) || []);
},[]);

  return (
    <>
            <div className="col-md-6 col-lg-3">
                <div className="card my-3">
                    <img src={props.data.thumbnailUrl} className="card-image-top" alt="thumbnail"/>
                   
                    {
                       
                        favListID.includes(props?.data?.id) ?(<i className="fas fa-heart addTofav" onClick={() =>addToFav(props.data)}></i>) :(<i className="fas fa-heart addTofav1" onClick={() =>addToFav(props.data)}></i>)
                    }
                    
                    <div className="card-body">
                        <p className="card-text">{props.data.title} </p>    
                    </div>
                </div>
            </div>
    </>
  )
}

export default Grid