const express = require('express');
const riotKey = "?api_key=" + "RGAPI-0e9de2b5-139c-4dc8-adf3-d4fbb9b021ea";
const america_route = 'https://americas.api.riotgames.com';
const na_route = 'https://na1.api.riotgames.com';
const fetch = require('node-fetch');

async function getAccountBySummonerName(summonerName){
  const api_url = na_route + "/tft/summoner/v1/summoners/by-name/"+summonerName;
  return account_info = await fetch(api_url+riotKey)
}

function get(gameName, tagLine){
  var api_url = america_route + "/riot/account/v1/accounts/by-riot-id/"+gameName+"/"+tagLine;
  fetch(api_url+riotKey)
    
}

var test = await getAccountBySummonerName("Jashy");
