import { useState, useEffect } from "react";
import Grid from "../../Components/Grid";
import { useNavigate } from "react-router-dom";

function Lists() {
  const [listData, setListData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  let limit =10;
  let page =1 ;

  useEffect(()=>{
    getLists(page)
  },[]);

  const getLists = async (page:number) => {
    setIsFetching(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    if(page == 1) {
      setListData(data);
    } else{
      setListData((prevPosts) => [...prevPosts, ...data]);
    }
    setIsFetching(false);
  };

  const handleScroll =  () => {
    var bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight 
		if(bottom){
			getLists(++page);
		}
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const goToDashboard =()=> {
    navigate('/')
  }

  return (
    <>
      <section   className="bg-light py-4 my-5 ImageAPI">
        <div className="container ">
          <div className="row">
            <div className="col-12">
            <button type="button" onClick={goToDashboard} className="btn btn-secondary backbtn"><i className="fas fa-chevron-left"></i>Back</button>
              <h2 className="mb-3 text-primary">Total Available List</h2>
            </div>
          { 
          listData.length > 0  ? listData.map((list) =>(
            <Grid key={list.id} data ={list}/>
          
          )) :(<h1>Loading.....</h1>) 
          }
          {
           listData.length != 0 && isFetching && (<h1>Loading.....</h1>) 
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Lists;
