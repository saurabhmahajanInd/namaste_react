// before custom hook 

import RestroCard, {FnRestroCardwithLabel} from './RestroCard';
import restroList from '../utils/mockData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestroContainer = () => {

  const  {restroId} = useParams();
 // alert(restroId)

  // one way
  //const [dataList, setDataList] = useState(restroList);

  // another way
  // const arr = useState(restroList);
  // let [dataList, setDataList] = arr;


 
  //Third way 
  const arr = useState([]);
  const filteredDataList = arr[0];
  const setDataList = arr[1];

  const [allRestaurentData, setAllRestaurentData] = useState([]);

  const [txtSearch, setTxtSearch] = useState([]);

  const RestaurentCardWithPromoted = FnRestroCardwithLabel(RestroCard);
  
  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async () =>  {
    const Some_URL = "https://raw.githubusercontent.com/saurabhmahajanInd/mockdata/refs/heads/main/restaurents.json";
    const res = await fetch(Some_URL);
    const Data = (await res.json()).data;
    
    setAllRestaurentData(Data);
    setDataList(Data)
  }

  // const onSearch = () => {
  //  setDataList(allRestaurentData.filter(rest => rest.name.includes(txtSearch)));
  // }


  // onSearch() {
  //   setDataList(dataList.filter(rest => rest.name.includes(txtSearch)));
  // }

  //debugger;
  // conditional rendering
  if (filteredDataList.length == 0) {
    // loaing logic, we can use shimaar ui here
    // return <Shimmar/> // create this component and show a dummy UI of cards
    return <h3>Loading....</h3>
  }

  return (
    <>
    <input type="text" value={txtSearch} onChange={(event) => {
      // serach and filter
      setTxtSearch(event.target.value);
    }}/>
    
    <button onClick={()=> {
     // debugger;
      setDataList(allRestaurentData.filter(rest => rest.name.includes(txtSearch)));
    }}>Search Please...</button>

    <button onClick={()=> {
      // console.log('here')
      // //dataList = dataList.filter(rest => rest.ratings > 4.5);
      // console.log(dataList);
      setDataList(allRestaurentData.filter(rest => rest.ratings > 4.5));
    }}>Top Latest Restaurent</button>
    <div id="resto-container">
      {filteredDataList.map((restaurent, index) => {
        return restaurent.isPromoted ? <RestaurentCardWithPromoted key={index} restroInfo={restaurent} /> : <RestroCard key={index} restroInfo={restaurent} />;
      })}

      {/* <RestroCard restroInfo={restroList[0]} />
      <RestroCard restroInfo={restroList[1]} />
      <RestroCard restroInfo={restroList[2]} />
      <RestroCard restroInfo={restroList[3]} /> */}
    </div>
    </>
  );
};

export default RestroContainer;