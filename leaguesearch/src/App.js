import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"



function App() {
  const [searchText, setSearchText]= useState('');
  const [playerData, setPlayerData] = useState({});
  const [playerDataR, setPlayerDataR] = useState({});
  const [playerDataChamp, setPlayerDataChamp] = useState({});
  const [playerDataChamp2, setPlayerDataChamp2] = useState({});
  const [playerDataChamp3, setPlayerDataChamp3] = useState({});
  const [playerDataChamp4, setPlayerDataChamp4] = useState({});
  const [playerDataChamp5, setPlayerDataChamp5] = useState({});
  const [playerDataChamp6, setPlayerDataChamp6] = useState({});
  const [playerDataChamp7, setPlayerDataChamp7] = useState({});
  const [playerDataChamp8, setPlayerDataChamp8] = useState({});
  const [playerDataChamp9, setPlayerDataChamp9] = useState({});
  const [playerDataChamp10, setPlayerDataChamp10] = useState({});
  const [playerDataChamp11, setPlayerDataChamp11] = useState({});
  const [playerDataChamp12, setPlayerDataChamp12] = useState({});
  const [playerDataChamp13, setPlayerDataChamp13] = useState({});
  const [playerDataChamp14, setPlayerDataChamp14] = useState({});
  const [playerDataChamp15, setPlayerDataChamp15] = useState({});
  const [playerDataMatch1, setPlayerDataMatch1] = useState({});
  const [playerDataMatchid, setPlayerDataMatchid] = useState({});
  const [g1p1, setg1p1] = useState({});
  const [g1p2, setg1p2] = useState({});
  const [g1p3, setg1p3] = useState({});
  const [g1p4, setg1p4] = useState({});
  const [g1p5, setg1p5] = useState({});
  const [g1p6, setg1p6] = useState({});
  const [g1p7, setg1p7] = useState({});
  const [g1p8, setg1p8] = useState({});
  const [g1p9, setg1p9] = useState({});
  const [g1p10, setg1p10] = useState({});

  const [g2p1, setg2p1] = useState({});
  const [g2p2, setg2p2] = useState({});
  const [g2p3, setg2p3] = useState({});
  const [g2p4, setg2p4] = useState({});
  const [g2p5, setg2p5] = useState({});
  const [g2p6, setg2p6] = useState({});
  const [g2p7, setg2p7] = useState({});
  const [g2p8, setg2p8] = useState({});
  const [g2p9, setg2p9] = useState({});
  const [g2p10, setg2p10] = useState({});

  const [g3p1, setg3p1] = useState({});
  const [g3p2, setg3p2] = useState({});
  const [g3p3, setg3p3] = useState({});
  const [g3p4, setg3p4] = useState({});
  const [g3p5, setg3p5] = useState({});
  const [g3p6, setg3p6] = useState({});
  const [g3p7, setg3p7] = useState({});
  const [g3p8, setg3p8] = useState({});
  const [g3p9, setg3p9] = useState({});
  const [g3p10, setg3p10] = useState({});

  const [g4p1, setg4p1] = useState({});
  const [g4p2, setg4p2] = useState({});
  const [g4p3, setg4p3] = useState({});
  const [g4p4, setg4p4] = useState({});
  const [g4p5, setg4p5] = useState({});
  const [g4p6, setg4p6] = useState({});
  const [g4p7, setg4p7] = useState({});
  const [g4p8, setg4p8] = useState({});
  const [g4p9, setg4p9] = useState({});
  const [g4p10, setg4p10] = useState({});

  const [g5p1, setg5p1] = useState({});
  const [g5p2, setg5p2] = useState({});
  const [g5p3, setg5p3] = useState({});
  const [g5p4, setg5p4] = useState({});
  const [g5p5, setg5p5] = useState({});
  const [g5p6, setg5p6] = useState({});
  const [g5p7, setg5p7] = useState({});
  const [g5p8, setg5p8] = useState({});
  const [g5p9, setg5p9] = useState({});
  const [g5p10, setg5p10] = useState({});


  const [g1, setg1] = useState({});
  const [g2, setg2] = useState({});
  const [g3, setg3] = useState({});
  const [g4, setg4] = useState({});
  const [g5, setg5] = useState({});
  const [g6, setg6] = useState({});
  const [g7, setg7] = useState({});
  const [g8, setg8] = useState({});
  const [g9, setg9] = useState({});
  const [g10, setg10] = useState({});
  const [g11, setg11] = useState({});
  const [g12, setg12] = useState({});
  const [g13, setg13] = useState({});
  const [g14, setg14] = useState({});
  const [g15, setg15] = useState({});





  //var g1player1 = "HELOO";
  //var g1player2 = "HELOO2";
  //var g1player3 = "HELOO3";
  //var g1player4 = "HELOO4";
  //var g1player5 = "HELOO5";

  function findplayer(idd,pn){
    var player = "player";
    try {
      player = idd.info.participants[pn].summonerName;
    }
    catch(err) {
    }
    return player
  }



  function changeColor() {
          var colorCode = document.getElementById('color').value;
          var nav = document.getElementById('nav');

          nav.style.background = colorCode;
      }

  const API_KEYS = "RGAPI-404eac0e-ff94-4fde-aa1f-6692d3711f72"




  function searchForPlayerRank(event,idd){
    var APICallString = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+idd+"?api_key=" + API_KEYS;

    var APICallStringChamp ="https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+idd+"?api_key=" + API_KEYS;

    axios.get(APICallString).then(function (r2){
      //success

      setPlayerDataR(r2.data[0]);

      //tier = r2.data[0].tier;
      //console.log(r2.data[0].tier);
      //console.log(r2.data[0])

    }).catch(function (error){
      //Error
      //console.log(error);
    });


    axios.get(APICallStringChamp).then(function (r3){
      //success

      setPlayerDataChamp(r3.data[0]);
      setPlayerDataChamp2(r3.data[1]);
      setPlayerDataChamp3(r3.data[2]);
      setPlayerDataChamp4(r3.data[3]);
      setPlayerDataChamp5(r3.data[4]);
      setPlayerDataChamp6(r3.data[5]);
      setPlayerDataChamp7(r3.data[6]);
      setPlayerDataChamp8(r3.data[7]);
      setPlayerDataChamp9(r3.data[8]);
      setPlayerDataChamp10(r3.data[9]);
      setPlayerDataChamp11(r3.data[10]);
      setPlayerDataChamp12(r3.data[11]);
      setPlayerDataChamp13(r3.data[12]);
      setPlayerDataChamp14(r3.data[13]);
      setPlayerDataChamp15(r3.data[14]);
      ////console.log(r3.data[0]);

    }).catch(function (error){
      //Error
      //console.log(error);
    });

  }

  function searchForPlayerMatch(event,idd){
    var APICallStringMatch ="https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/"+idd+"/ids?api_key="+ API_KEYS;

    axios.get(APICallStringMatch).then(function (r4){
      //success

      setPlayerDataMatch1(r4.data);
      //console.log(r4.data);
      searchforPlayerMatchid(event,r4.data)

    }).catch(function (error){
      //Error
      //console.log(error);
    });
  }
  const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
  });
  var testing= "wrong"
  async function searchforPlayerMatchid(event,idd){

    var APICallStringMatchid1 ="https://americas.api.riotgames.com/lol/match/v5/matches/"+idd[0]+"?api_key="+ API_KEYS;
    var APICallStringMatchid2 ="https://americas.api.riotgames.com/lol/match/v5/matches/"+idd[1]+"?api_key="+ API_KEYS;
    var APICallStringMatchid3 ="https://americas.api.riotgames.com/lol/match/v5/matches/"+idd[2]+"?api_key="+ API_KEYS;
    var APICallStringMatchid4 ="https://americas.api.riotgames.com/lol/match/v5/matches/"+idd[3]+"?api_key="+ API_KEYS;
    var APICallStringMatchid5 ="https://americas.api.riotgames.com/lol/match/v5/matches/"+idd[4]+"?api_key="+ API_KEYS;

    //await delay(2000);
    console.log('axios request1')
    axios.get(APICallStringMatchid1).then(function (r5){
      //success


      //setPlayerDataMatchid(r5.data.metadata);
      console.log(r5.data);
      console.log(r5.data.info.participants[0].championId);
      testing = "r5.data.info.teams[0].win";
      //settesti(r5.data.info.teams[0].win)

      //console.log(r5.data.info.participants[0].summonerName);
      setg1(r5.data);
      //console.log("hi")
      //searchForPlayerfrompuuid(event,r5.data.metadata.participants,1)

    }).catch(function (error){
      //Error
      //console.log(error);
    });

    //await delay(2000);
    console.log('axios request2')
    axios.get(APICallStringMatchid2).then(function (r5){
      //success
      setg2(r5.data);
      //searchForPlayerfrompuuid(event,r5.data.metadata.participants,2)

    }).catch(function (error){
      //Error
      //console.log(error);
    });

    //await delay(2000);
    console.log('axios request3')
    axios.get(APICallStringMatchid3).then(function (r5){
      //success
      setg3(r5.data);
      //searchForPlayerfrompuuid(event,r5.data.metadata.participants,3)

    }).catch(function (error){
      //Error
      //console.log(error);
    });
    //await delay(2000);
    console.log('axios request4')
    axios.get(APICallStringMatchid4).then(function (r5){
      //success
      setg4(r5.data);
      //searchForPlayerfrompuuid(event,r5.data.metadata.participants,4)

    }).catch(function (error){
      //Error
      //console.log(error);
    });
    //await delay(2000);
    console.log('axios request5')
    axios.get(APICallStringMatchid5).then(function (r5){
      //success
      setg5(r5.data);
      //searchForPlayerfrompuuid(event,r5.data.metadata.participants,5)

    }).catch(function (error){
      //Error
      //console.log(error);
    });


  }


  async function searchForPlayerfrompuuid(event,idd,game){


    var g1p1 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[0]+"?api_key="+API_KEYS;
    var g1p2 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[1]+"?api_key="+API_KEYS;
    var g1p3 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[2]+"?api_key="+API_KEYS;
    var g1p4 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[3]+"?api_key="+API_KEYS;
    var g1p5 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[4]+"?api_key="+API_KEYS;
    var g1p6 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[5]+"?api_key="+API_KEYS;
    var g1p7 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[6]+"?api_key="+API_KEYS;
    var g1p8 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[7]+"?api_key="+API_KEYS;
    var g1p9 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[8]+"?api_key="+API_KEYS;
    var g1p10 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/"+idd[9]+"?api_key="+API_KEYS;

    if (game==1){




      axios.all([
        axios.get(g1p1),
        axios.get(g1p2),
        axios.get(g1p3),
        axios.get(g1p4),
        axios.get(g1p5),
        axios.get(g1p6),
        axios.get(g1p7),
        axios.get(g1p8),
        axios.get(g1p9),
        axios.get(g1p10)

      ]).then( r6 =>{
        setg1p1(r6[0].data);
        setg1p2(r6[1].data);
        setg1p3(r6[2].data);
        setg1p4(r6[3].data);
        setg1p5(r6[4].data);
        setg1p6(r6[5].data);
        setg1p7(r6[6].data);
        setg1p8(r6[7].data);
        setg1p9(r6[8].data);
        setg1p10(r6[9].data);

      });




    }

    else if (game==2){



      axios.all([
        axios.get(g1p1),
        axios.get(g1p2),
        axios.get(g1p3),
        axios.get(g1p4),
        axios.get(g1p5),
        axios.get(g1p6),
        axios.get(g1p7),
        axios.get(g1p8),
        axios.get(g1p9),
        axios.get(g1p10)

      ]).then( r6 =>{
        setg2p1(r6[0].data);
        setg2p2(r6[1].data);
        setg2p3(r6[2].data);
        setg2p4(r6[3].data);
        setg2p5(r6[4].data);
        setg2p6(r6[5].data);
        setg2p7(r6[6].data);
        setg2p8(r6[7].data);
        setg2p9(r6[8].data);
        setg2p10(r6[9].data);

      });



    }


    else if (game==3){



      axios.all([
        axios.get(g1p1),
        axios.get(g1p2),
        axios.get(g1p3),
        axios.get(g1p4),
        axios.get(g1p5),
        axios.get(g1p6),
        axios.get(g1p7),
        axios.get(g1p8),
        axios.get(g1p9),
        axios.get(g1p10)

      ]).then( r6 =>{
        setg3p1(r6[0].data);
        setg3p2(r6[1].data);
        setg3p3(r6[2].data);
        setg3p4(r6[3].data);
        setg3p5(r6[4].data);
        setg3p6(r6[5].data);
        setg3p7(r6[6].data);
        setg3p8(r6[7].data);
        setg3p9(r6[8].data);
        setg3p10(r6[9].data);

      });



    }

    else if (game==4){

      axios.all([
        axios.get(g1p1),
        axios.get(g1p2),
        axios.get(g1p3),
        axios.get(g1p4),
        axios.get(g1p5),
        axios.get(g1p6),
        axios.get(g1p7),
        axios.get(g1p8),
        axios.get(g1p9),
        axios.get(g1p10)

      ]).then( r6 =>{
        setg4p1(r6[0].data);
        setg4p2(r6[1].data);
        setg4p3(r6[2].data);
        setg4p4(r6[3].data);
        setg4p5(r6[4].data);
        setg4p6(r6[5].data);
        setg4p7(r6[6].data);
        setg4p8(r6[7].data);
        setg4p9(r6[8].data);
        setg4p10(r6[9].data);

      });



    }
    else if (game==5){

      axios.all([
        axios.get(g1p1),
        axios.get(g1p2),
        axios.get(g1p3),
        axios.get(g1p4),
        axios.get(g1p5),
        axios.get(g1p6),
        axios.get(g1p7),
        axios.get(g1p8),
        axios.get(g1p9),
        axios.get(g1p10)

      ]).then( r6 =>{
        setg5p1(r6[0].data);
        setg5p2(r6[1].data);
        setg5p3(r6[2].data);
        setg5p4(r6[3].data);
        setg5p5(r6[4].data);
        setg5p6(r6[5].data);
        setg5p7(r6[6].data);
        setg5p8(r6[7].data);
        setg5p9(r6[8].data);
        setg5p10(r6[9].data);

      });



    }


  }





  function searchForPlayer(event){
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?api_key=" + API_KEYS;
    axios.get(APICallString).then(function (response){
      //success

      setPlayerData(response.data);
      //console.log(playerData);
      searchForPlayerRank(event,response.data.id)
      searchForPlayerMatch(event,response.data.puuid)



    }).catch(function (error){
      //Error
      //console.log(error);
    });
  }

  function rankimage(idd){
    var temp = "silver"

    try {
      temp = idd.tier.toLowerCase()
    }
    catch(err) {
    }
    return temp
  }


  function didwewin(user,idd){

    var temp = "no";
    //id.info.teams[0].win"
    try {

      if (((user==idd.info.participants[0].summonerName)||
          (user==idd.info.participants[1].summonerName)||
          (user==idd.info.participants[2].summonerName)||
          (user==idd.info.participants[3].summonerName)||
          (user==idd.info.participants[4].summonerName))&&(idd.info.teams[0].win==true)){
        temp = "yes";

      }
      if (((user==idd.info.participants[0].summonerName)||
          (user==idd.info.participants[1].summonerName)||
          (user==idd.info.participants[2].summonerName)||
          (user==idd.info.participants[3].summonerName)||
          (user==idd.info.participants[4].summonerName))&&(idd.info.teams[0].win==false)){
        temp = "no";

      }
      else if (((user==idd.info.participants[6].summonerName)||
          (user==idd.info.participants[7].summonerName)||
          (user==idd.info.participants[8].summonerName)||
          (user==idd.info.participants[9].summonerName)||
          (user==idd.info.participants[10].summonerName))&&(idd.info.teams[1].win==true)){
        temp = "yes";
      }

      else if (((user==idd.info.participants[6].summonerName)||
          (user==idd.info.participants[7].summonerName)||
          (user==idd.info.participants[8].summonerName)||
          (user==idd.info.participants[9].summonerName)||
          (user==idd.info.participants[10].summonerName))&&(idd.info.teams[1].win==false)){
        temp = "no";
      }
    }
    catch(err) {
    }

    return temp


  }

  function playerchampsel(idd,p) {

    var ret = "http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Akali.png";

    //"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp.championId)+".png"
    try{
      var num =idd.info.participants[p].championId ;
      ret = "http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(num)+".png"

      console.log("YOO")
      console.log(num);

    }
    catch(err){

    }
    return ret

  }




  return (
    <div className="App">
      <div className="container">
        <h1>League Stats</h1>



        <input class="leaguename" type="text" onChange={e => setSearchText(e.target.value)} ></input>
        <button class="leaguebutton" onClick={e => searchForPlayer(e)}> search for player </button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <div className="content flex text-center">
            <img className=" h-48 w-48" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/"+playerData.profileIconId+".png"}></img>
            <div class="profile">
              <p className="text-blue-800">{playerData.name}</p>
              <p>lvl {playerData.summonerLevel} </p>


            </div>



          </div>

          <div >
          <div class="rankcontent"   >
            <img class="rankimg" src={"https://static.u.gg/assets/lol/s12_rank_icons/"+rankimage(playerDataR)+".png"}></img>
            <div class="textcontainer">
              <div class="ranktext">
                <p>{playerDataR.tier} {playerDataR.rank}</p>
                <p>{playerDataR.leaguePoints}lp</p>
              </div>
              <div class="rankwins">
                <p>{playerDataR.wins}W {playerDataR.losses}L</p>
                <p>{(playerDataR.wins/(playerDataR.wins+playerDataR.losses)).toFixed(2)*100}% Win Rate</p>
              </div>


            </div>
          </div>

          </div>

          <div class="float-container">
            <div class="float-child">
              <p class="hm">Champions</p>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp.championId)+".png"}></img>
                <div className=" w-15">
                  <p class="champsd">{champID_to_Champ(playerDataChamp.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp2.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp2.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp2.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp3.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp3.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp3.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp4.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp4.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp4.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp5.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp5.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp5.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp6.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp6.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp6.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp7.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp7.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp7.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp8.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp8.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp8.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp9.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp9.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp9.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp10.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp10.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp10.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp11.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp11.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp11.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp12.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp12.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp12.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp13.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp13.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp13.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp14.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp14.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp14.championPoints} pts  </p>
                </div>
              </div>
              <div className="content flex">
                <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp15.championId)+".png"}></img>
                <div>
                  <p class="champsd">{champID_to_Champ(playerDataChamp15.championId)}</p>
                  <p style={{color: "grey"}}>{playerDataChamp15.championPoints} pts  </p>
                </div>
              </div>

            </div>

            <div class="float-child2" >
              <p class="">Match history</p>

              <div class={didwewin(playerData.name,g1)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,0)}></img>
                    <p class="t1" >{findplayer(g1,0)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,1)}></img>
                    <p class="t1" >{findplayer(g1,1)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,2)}></img>
                    <p class="t1" >{findplayer(g1,2)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,3)}></img>
                    <p class="t1" >{findplayer(g1,3)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,4)}></img>
                    <p class="t1" >{findplayer(g1,4)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g1)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,5)}></img>
                    <p class="t1" >{findplayer(g1,5)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,6)}></img>
                    <p class="t1" >{findplayer(g1,6)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,7)}></img>
                    <p class="t1" >{findplayer(g1,7)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,8)}></img>
                    <p class="t1" >{findplayer(g1,8)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g1,9)}></img>
                    <p class="t1" >{findplayer(g1,9)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g2)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,0)}></img>
                    <p class="t1" >{findplayer(g2,0)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,1)}></img>
                    <p class="t1" >{findplayer(g2,1)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,2)}></img>
                    <p class="t1" >{findplayer(g2,2)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,3)}></img>
                    <p class="t1" >{findplayer(g2,3)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,4)}></img>
                    <p class="t1" >{findplayer(g2,4)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g2)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,5)}></img>
                    <p class="t1" >{findplayer(g2,5)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,6)}></img>
                    <p class="t1" >{findplayer(g2,6)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,7)}></img>
                    <p class="t1" >{findplayer(g2,7)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,8)}></img>
                    <p class="t1" >{findplayer(g2,8)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g2,9)}></img>
                    <p class="t1" >{findplayer(g2,9)}</p>
                  </div>
                </div>
              </div>



              <div class={didwewin(playerData.name,g3)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,0)}></img>
                    <p class="t1" >{findplayer(g3,0)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,1)}></img>
                    <p class="t1" >{findplayer(g3,1)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,2)}></img>
                    <p class="t1" >{findplayer(g3,2)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,3)}></img>
                    <p class="t1" >{findplayer(g3,3)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,4)}></img>
                    <p class="t1" >{findplayer(g3,4)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g3)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,5)}></img>
                    <p class="t1" >{findplayer(g3,5)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,6)}></img>
                    <p class="t1" >{findplayer(g3,6)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,7)}></img>
                    <p class="t1" >{findplayer(g3,7)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,8)}></img>
                    <p class="t1" >{findplayer(g3,8)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g3,9)}></img>
                    <p class="t1" >{findplayer(g3,9)}</p>
                  </div>
                </div>
              </div>



              <div class={didwewin(playerData.name,g4)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,0)}></img>
                    <p class="t1" >{findplayer(g4,0)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,1)}></img>
                    <p class="t1" >{findplayer(g4,1)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,2)}></img>
                    <p class="t1" >{findplayer(g4,2)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,3)}></img>
                    <p class="t1" >{findplayer(g4,3)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,4)}></img>
                    <p class="t1" >{findplayer(g4,4)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g4)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,5)}></img>
                    <p class="t1" >{findplayer(g4,5)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,6)}></img>
                    <p class="t1" >{findplayer(g4,6)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,7)}></img>
                    <p class="t1" >{findplayer(g4,7)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,8)}></img>
                    <p class="t1" >{findplayer(g4,8)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g4,9)}></img>
                    <p class="t1" >{findplayer(g4,9)}</p>
                  </div>
                </div>
              </div>





              <div class={didwewin(playerData.name,g5)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,0)}></img>
                    <p class="t1" >{findplayer(g5,0)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,1)}></img>
                    <p class="t1" >{findplayer(g5,1)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,2)}></img>
                    <p class="t1" >{findplayer(g5,2)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,3)}></img>
                    <p class="t1" >{findplayer(g5,3)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,4)}></img>
                    <p class="t1" >{findplayer(g5,4)}</p>
                  </div>
                </div>
              </div>

              <div class={didwewin(playerData.name,g5)}>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,5)}></img>
                    <p class="t1" >{findplayer(g5,5)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,6)}></img>
                    <p class="t1" >{findplayer(g5,6)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,7)}></img>
                    <p class="t1" >{findplayer(g5,7)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,8)}></img>
                    <p class="t1" >{findplayer(g5,8)}</p>
                  </div>
                </div>
                <div class="t2">
                  <div class="t3">
                    <img class="champimage" src={playerchampsel(g5,9)}></img>
                    <p class="t1" >{findplayer(g5,9)}</p>
                  </div>
                </div>
              </div>




            </div>



          </div>


        </>
        :
        <>    </>

      }


    </div>


  );
}

export default App;












  function champID_to_Champ(id){


    var li = {'266': 'Aatrox',

'103': 'Ahri',

'84': 'Akali',

'166': 'Akshan',

'12': 'Alistar',

'32': 'Amumu',

'34': 'Anivia',

'1': 'Annie',

'523': 'Aphelios',

'22': 'Ashe',

'136': 'AurelionSol',

'268': 'Azir',

'432': 'Bard',

'53': 'Blitzcrank',

'63': 'Brand',

'201': 'Braum',

'51': 'Caitlyn',

'164': 'Camille',

'69': 'Cassiopeia',

'31': 'Chogath',

'42': 'Corki',

'122': 'Darius',

'131': 'Diana',

'119': 'Draven',

'36': 'DrMundo',

'245': 'Ekko',

'60': 'Elise',

'28': 'Evelynn',

'81': 'Ezreal',

'9': 'Fiddlesticks',

'114': 'Fiora',

'105': 'Fizz',

'3': 'Galio',

'41': 'Gangplank',

'86': 'Garen',

'150': 'Gnar',

'79': 'Gragas',

'104': 'Graves',

'887': 'Gwen',

'120': 'Hecarim',

'74': 'Heimerdinger',

'420': 'Illaoi',

'39': 'Irelia',

'427': 'Ivern',

'40': 'Janna',

'59': 'JarvanIV',

'24': 'Jax',

'126': 'Jayce',

'202': 'Jhin',

'222': 'Jinx',

'145': 'Kaisa',

'429': 'Kalista',

'43': 'Karma',

'30': 'Karthus',

'38': 'Kassadin',

'55': 'Katarina',

'10': 'Kayle',

'141': 'Kayn',

'85': 'Kennen',

'121': 'Khazix',

'203': 'Kindred',

'240': 'Kled',

'96': 'KogMaw',

'7': 'Leblanc',

'64': 'LeeSin',

'89': 'Leona',

'876': 'Lillia',

'127': 'Lissandra',

'236': 'Lucian',

'117': 'Lulu',

'99': 'Lux',

'54': 'Malphite',

'90': 'Malzahar',

'57': 'Maokai',

'11': 'MasterYi',

'21': 'MissFortune',

'62': 'MonkeyKing',

'82': 'Mordekaiser',

'25': 'Morgana',

'267': 'Nami',

'75': 'Nasus',

'111': 'Nautilus',

'518': 'Neeko',

'76': 'Nidalee',

'56': 'Nocturne',

'20': 'Nunu',

'2': 'Olaf',

'61': 'Orianna',

'516': 'Ornn',

'80': 'Pantheon',

'78': 'Poppy',

'555': 'Pyke',

'246': 'Qiyana',

'133': 'Quinn',

'497': 'Rakan',

'33': 'Rammus',

'421': 'RekSai',

'526': 'Rell',

'58': 'Renekton',

'107': 'Rengar',

'92': 'Riven',

'68': 'Rumble',

'13': 'Ryze',

'360': 'Samira',

'113': 'Sejuani',

'235': 'Senna',

'147': 'Seraphine',

'875': 'Sett',

'35': 'Shaco',

'98': 'Shen',

'102': 'Shyvana',

'27': 'Singed',

'14': 'Sion',

'15': 'Sivir',

'72': 'Skarner',

'37': 'Sona',

'16': 'Soraka',

'50': 'Swain',

'517': 'Sylas',

'134': 'Syndra',

'223': 'TahmKench',

'163': 'Taliyah',

'91': 'Talon',

'44': 'Taric',

'17': 'Teemo',

'412': 'Thresh',

'18': 'Tristana',

'48': 'Trundle',

'23': 'Tryndamere',

'4': 'TwistedFate',

'29': 'Twitch',

'77': 'Udyr',

'6': 'Urgot',

'110': 'Varus',

'67': 'Vayne',

'45': 'Veigar',

'161': 'Velkoz',

'254': 'Vi',

'234': 'Viego',

'112': 'Viktor',

'8': 'Vladimir',

'106': 'Volibear',

'19': 'Warwick',

'498': 'Xayah',

'101': 'Xerath',

'5': 'XinZhao',

'157': 'Yasuo',

'777': 'Yone',

'83': 'Yorick',

'350': 'Yuumi',

'154': 'Zac',

'238': 'Zed',

'115': 'Ziggs',

'26': 'Zilean',

'142': 'Zoe',

'143': 'Zyra'}

    return li[id]
  }
