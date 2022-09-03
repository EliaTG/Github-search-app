import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import React, {useEffect, useState} from "react";
import axios from "axios";    
import './App.scss'



function App() {
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    fetchUserData('eliatg')
  },[])

  function handleSearch(username){
    setLoading(true)
    setUser('')
    fetchUserData(username)
  }
  function fetchUserData(username){
      axios.get(`https://api.github.com/users/${username}`)
           .then((res) =>{
              setLoading(false)
              setError(false)
              setUser(res.data)
           }).catch(() =>{
              setLoading(false)
              setError(true)
           })
  }

  return (
         <div className="App">
           <Header handleSearch={handleSearch} hasError={error} hasLoading={loading}/>
           <Card userData={user} hasError={error} hasLoading={loading}/>
         </div>
  );
}

export default App;
