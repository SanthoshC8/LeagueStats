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
      setPlayerDataChamp2(r3.data[1]);
      setPlayerDataChamp3(r3.data[2]);
      setPlayerDataChamp4(r3.data[3]);
      setPlayerDataChamp5(r3.data[4]);
      console.log(r3.data[0]);

    }).catch(function (error){
      //Error
      console.log(error);
    });


  }
//    https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/+idd+"?api_key=" + API_KEYS;



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
          <div className="content flex">
            <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp.championId)+".png"}></img>
            <p>{playerDataChamp.championPoints}  </p>
            <p>{champID_to_Champ(playerDataChamp.championId)}</p>

          </div>

          <div className="content flex">
            <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp2.championId)+".png"}></img>
            <p>{playerDataChamp2.championPoints}  </p>
            <p>{champID_to_Champ(playerDataChamp2.championId)}</p>
          </div>

          <div className="content flex">
            <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp3.championId)+".png"}></img>
            <p>{playerDataChamp3.championPoints}  </p>
            <p>{champID_to_Champ(playerDataChamp3.championId)}</p>
          </div>

          <div className="content flex">
            <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp4.championId)+".png"}></img>
            <p>{playerDataChamp4.championPoints}  </p>
            <p>{champID_to_Champ(playerDataChamp4.championId)}</p>
          </div>
          <div className="content flex">
            <img className=" h-20 w-20" src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/"+champID_to_Champ(playerDataChamp5.championId)+".png"}></img>
            <p>{playerDataChamp5.championPoints}  </p>
            <p>{champID_to_Champ(playerDataChamp5.championId)}</p>
          </div>

        </>
        :
        <>  <p>NO DATA</p>  </>

      }

    </div>
  );
}

export default App;
