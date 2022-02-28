import { useEffect, useState } from 'react';
import {Box} from '@material-ui/core';
import NavBar from './components/NavBar';
import BreadCrumb from './components/BreadCrumb';
import {getImages} from './services/api';
import Images from './components/images';
import Snackbar from './components/SnackBar';
function App() {
  const [data,setData] = useState([]);
  const [count, setCount] = useState(10);
  const [text, setText] = useState('mountains');
  const [open,toggleSnack] = useState(false);

  useEffect(()=>{
    if(count<3||count>200){
      toggleSnack(true);
      return;
    }
    toggleSnack(false);

    getImages(text,count).then(response=>{
      setData(response.data.hits);
    })
  },[text,count])

  const onTextChange = (text) =>{
    setText(text);
  }

  const onCountChange = (count) =>{
    setCount(count);
  }

  return (
    <div className="App">
      <NavBar/>
      <BreadCrumb onTextChange={onTextChange} onCountChange = {onCountChange}/>
      <Images data = {data}/>
      <Snackbar open ={open} toggleSnack={toggleSnack}/>
    </div>
  );
}

export default App;
