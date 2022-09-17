import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"


function App() {
  const [searchText, setSearchText]= useState('');
  const [playerData, setPlayerData] = useState({});
  const [playerDataR, setPlayerDataR] = useState({});
  const [playerDataChamp, setPlayerDataChamp] = useState({});
  const API_KEYS = "RGAPI-3aced726-9ef5-4658-bee5-8fd5eee9bc72"



  function searchForPlayerRank(event,idd){
    var APICallString = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+idd+"?api_key=" + API_KEYS;

    var APICallStringChamp ="https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+idd+"?api_key=" + API_KEYS;
    axios.get(APICallString).then(function (r2){
      //success

      setPlayerDataR(r2.data[0]);
      console.log(r2.data[0]);

    }).catch(function (error){
      //Error
      console.log(error);
    });


    axios.get(APICallStringChamp).then(function (r3){
      //success

      setPlayerDataChamp(r3.data[0]);
      console.log(r3.data[0]);

    }).catch(function (error){
      //Error
      console.log(error);
    });


  }
//    https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/+idd+"?api_key=" + API_KEYS;








  function searchForPlayer(event){
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?api_key=" + API_KEYS;
    axios.get(APICallString).then(function (response){
      //success

      setPlayerData(response.data);
      console.log(playerData);
      searchForPlayerRank(event,response.data.id)



    }).catch(function (error){
      //Error
      console.log(error);
    });
  }
  //https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Santhosh8121?api_key=RGAPI-2a6eb91a-0d61-421c-bbbe-14d69f8bba24

  //https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Santhosh8121?api_key=RGAPI-2a6eb91a-0d61-421c-bbbe-14d69f8bba24
  //https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/+searchText+"?api_key=" + API_KEYS;





  return (
    <div className="App">
      <div className="container">
        <h5>helllo </h5>
        <input type="text" onChange={e => setSearchText(e.target.value)} ></input>
        <button onClick={e => searchForPlayer(e)}> search for player </button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <div className="content flex text-left">
            <img className=" h-48 w-48" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/"+playerData.profileIconId+".png"}></img>

            <p className="text-blue-800">{playerData.name}</p>



          </div>
          <div>
          <p className="bg-blue-800">{playerData.summonerLevel}</p>
            <p>{playerDataR.tier} {playerDataR.rank}</p>
            <p>{playerDataR.leaguePoints}lp</p>
            <p>{playerDataR.wins}wins</p>
            <p>{playerDataR.losses}losses</p>
            <p>{(playerDataR.wins/(playerDataR.wins+playerDataR.losses)).toFixed(2)*100}%</p>

          </div>
          <div >
            <p>{playerDataChamp.championId}  </p>
              </div>
        </>
        :
        <>  <p>NO DATA</p>  </>

      }

    </div>
  );
}

export default App;
