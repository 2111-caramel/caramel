
//find the city with he lowest overall points
export function getBest3(cityArray){
  let cityRankings = {};

  for(let i = 0; i < cityArray.length; i++){
    let points = 0;

    for(let j = 0; j < cityArray[i].length; j++){
      let city = cityArray[i][j]
      if(!cityRankings[city.cityId]){
        cityRankings[city.cityId] = points;
      } else{
        cityRankings[city.cityId] += points;
      }
      points++;
    }
  }
  return sort(cityRankings).slice(0,3)
}
function sort(cityObj){
  let sortable = [];

  for (let cityIndex in cityObj) {
    sortable.push([Number(cityIndex), cityObj[cityIndex]])
  }
  sortable.sort((a, b)=> a[1] - b[1]);

  return sortable;
}
