import { useEffect, useState } from "react";
import "./dashboard.scss";
import Grid from "../../Components/Grid";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let [favList,setFavList] = useState([]);  
  const navigate = useNavigate();
  useEffect(()=>{
  let localFavlist = JSON.parse(localStorage.getItem('favlist')) || [];
  setFavList(localFavlist)
  },[favList]);
  const goToListPage =()=> {
    navigate('/lists')
  }
  return (
    <>

      <section className="bg-light py-4 my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3 text-primary">User Favourite List</h2>  <button type="button" onClick={goToListPage} className="btn btn-secondary goto-list-btn">All Lists <i className="fas fa-angle-double-right"></i></button>
            </div>
            {
                favList.length >0 ?favList.map((list)=>(
                    <Grid key={list.id} data ={list}/>
                )) :(<h1>You have no favourite list</h1>)
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
