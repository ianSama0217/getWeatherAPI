//氣象資料API
const apiURL = "YOUR request API URL";

let weatherData = []; //用來儲存API資料

fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); //查看API資料
    weatherData = data; //創建一個陣列儲存data資料
  })
  .catch((e) => {
    console.log("錯誤訊息: " + e);
  });

//印出城市,天氣,氣溫,降雨機率
function print(num) {
  let city = weatherData.records.location[num].locationName;
  let weather =
    weatherData.records.location[num].weatherElement[0].time[0].parameter
      .parameterName;
  let minTemperature =
    weatherData.records.location[num].weatherElement[2].time[0].parameter
      .parameterName;
  let maxTemperature =
    weatherData.records.location[num].weatherElement[4].time[0].parameter
      .parameterName;
  let chanceOfRainfall =
    weatherData.records.location[num].weatherElement[1].time[0].parameter
      .parameterName;

  console.log(
    `城市:${city} 天氣:${weather} 氣溫: ${minTemperature}-${maxTemperature}℃ 降雨機率: ${chanceOfRainfall}% `
  );

  return {
    city,
    weather,
    minTemperature,
    maxTemperature,
    chanceOfRainfall,
  };
}

//如果改變select項目則改變底下顯示內容
let select = document.getElementById("select");
//宣告要改變的元素id
let cityText = document.getElementById("cityText");
let weatherText = document.getElementById("weatherText");
let temperatureText = document.getElementById("temperatureText");
let chanceOfRainfallText = document.getElementById("chanceOfRainfallText");
let weatherPicture = document.getElementById("weatherPicture");

select.addEventListener("change", (e) => {
  //選取選擇的option
  let selectedOption = e.target.options[e.target.selectedIndex];

  //依照不同選擇改變底下的顯示資料
  let num = 0;
  switch (selectedOption.value) {
    case "嘉義縣":
      num = 0;
      break;
    case "新北市":
      num = 1;
      break;
    case "嘉義市":
      num = 2;
      break;
    case "新竹縣":
      num = 3;
      break;
    case "新竹市":
      num = 4;
      break;
    case "台北市":
      num = 5;
      break;
    case "台南市":
      num = 6;
      break;
    case "宜蘭縣":
      num = 7;
      break;
    case "苗栗縣":
      num = 8;
      break;
    case "雲林縣":
      num = 9;
      break;
    case "花蓮縣":
      num = 10;
      break;
    case "台中市":
      num = 11;
      break;
    case "台東縣":
      num = 12;
      break;
    case "桃園市":
      num = 13;
      break;
    case "南投縣":
      num = 14;
      break;
    case "高雄市":
      num = 15;
      break;
    case "金門縣":
      num = 16;
      break;
    case "屏東縣":
      num = 17;
      break;
    case "基隆市":
      num = 18;
      break;
    case "澎湖縣":
      num = 19;
      break;
    case "彰化縣":
      num = 20;
      break;
    case "連江縣":
      num = 21;
      break;
    default:
      num = null;
  }

  //取得print方法內的屬性
  let getElement = print(num);

  if (num) {
    cityText.innerHTML = getElement.city;
    weatherText.innerHTML = getElement.weather;
    temperatureText.innerHTML = `${getElement.minTemperature}-${getElement.maxTemperature}℃`;
    chanceOfRainfallText.innerHTML = `降雨機率: ${getElement.chanceOfRainfall}%`;
  } else if (num == 0) {
    cityText.innerHTML = getElement.city;
    weatherText.innerHTML = getElement.weather;
    temperatureText.innerHTML = `${getElement.minTemperature}-${getElement.maxTemperature}℃`;
    chanceOfRainfallText.innerHTML = `降雨機率: ${getElement.chanceOfRainfall}%`;
  } else {
    cityText.innerHTML = "=====================";
    weatherText.innerHTML = "=====================";
    temperatureText.innerHTML = "=====================";
    chanceOfRainfallText.innerHTML = "=====================";
  }

  //依照不同的天氣更換圖片
  switch (getElement.weather) {
    case "陰短暫陣雨":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "陰時多雲短暫陣雨":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "多雲時陰陣雨":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "陰時多雲陣雨":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "陰時多雲陣雨":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "陰天":
      weatherPicture.setAttribute("src", "./icon/rainy.svg");
      break;
    case "陰時多雲":
      weatherPicture.setAttribute("src", "./icon/cloud.svg");
      break;
    case "多雲時陰":
      weatherPicture.setAttribute("src", "./icon/cloud.svg");
      break;
    case "多雲時晴":
      weatherPicture.setAttribute("src", "./icon/sun.svg");
      break;
    default:
      weatherPicture.setAttribute("src", "./icon/image.svg");
  }
});
