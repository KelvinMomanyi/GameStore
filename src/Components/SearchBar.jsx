import React, { Component, useState, useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
// import { InputAdornment, TextField} from '@material-ui/core'
import api from "../API/api";



function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // // const[data,setData]=useState([])

  
  // // data to be filtered
  // const data = [
  //   'Call of Duty',
  //   'Fifa 23', 
  //    'Watch Dogs 2',
  //   'GTA 5'
  // ];
  // // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./games.json');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // const[games,setGames]=useState([])
    
  // useEffect(() => {
  //   const fetchData= async()=>{
     

      
  //     // let finalArray= dataArray.map(game=>{
  //     //    let newURL =game.box_art_url.replace('{width}','980').replace('{height}','550');
  //     //    game.box_art_url=newURL
  //     // })
  //   console.log(result)
  //   }
    
  // })

      // setInterval(() => {
      //   setCurrentIndex((currentIndex + 1) % dataArray.length);     
      // }, 3000);

          
      useEffect(() => {
        const fetchData = async () => {
          const response = await api.get(`https://api.twitch.tv/helix/analytics/games?${searchQuery}`);
          const data = await response.json();
          setSuggestions(data);
          console.log(data);
        };
      
        if (searchQuery) {
          fetchData();
        } else {
          setSuggestions([]);
        }
      }, [searchQuery]);
      








  // const gamArray=[
  //   {name:'Call of Duty'},
  //   {name:'Fifa 23'}, 
  //   {name: 'Watch Dogs 2'},
  //   {naame:'GTA 5'}
  // ]
  //  const result= api.get('https://api.twitch.tv/helix/search/categories')
  //   const filterData = (value) => {
  //      if(value===''){
  //        setSuggestions([])
  //      }else{
  //       const res = result.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
  //         setSuggestions(res);
  //      }
    
  //   };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const availableSuggestions = suggestions.filter((suggestion) => suggestion.available);
 
  return (
    <div className='searchbar'>
       <input
        placeholder="Search"
        style={{ backgroundColor: 'aqua', color: 'black', fontSize: '20px', borderRadius:'20px'}}
       />
      {/* <TextField
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" left='100px'>
             <BiSearch />
          </InputAdornment>
        ),
      }}
      style={{ backgroundColor: 'aqua', color: 'black', fontSize: '20px', borderRadius:'20px'}}
      // onChange={(event)=>{
      //  const searchString=event.target.value.toLocaleLowerCase()
      //  const filterGames= gamArray.filter((game)=>{
      //  return game.name.toLocaleLowercase().includes(searchString)
      //  })
      // setGames(()=>{
      //   return{games:filterGames}
      //  })
      // }}

      onChange={handleInputChange}
     
    /> */}
     <ul>
      {availableSuggestions.map((suggestion) => (
        <li key={suggestion.id}>{suggestion.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default SearchBar