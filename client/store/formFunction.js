export function getBest3(cityArray){
  let cityRankings = {};

  for(let i = 0; i < cityArray.length; i++){
    for(let j = 0; j < cityArray[i].length; j++){
      let city = cityArray[i][j]
      if(cityRankings[city.cityId]){
        cityRankings[city.cityId] += city.index;
      } else{
        cityRankings[city.cityId] = city.index
      }
    }
  }
  return sort(cityRankings)
}

function sort(cityObj){
  let sortable = [];
  for (let city in cityObj) {
    sortable.push([Number(city), cityObj[city]])
  }
  sortable.sort(function(a, b) {
      return a[1] - b[1];
  });
  return sortable;
}
