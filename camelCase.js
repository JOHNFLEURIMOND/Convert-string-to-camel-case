function toCamelCase(str) {
  let strArray;

  if (str === "") {
    return "";
  }

  if (str.indexOf("-") !== -1) {
    strArray = str.split("-");
  } else {
    strArray = str.split("_")
  }

  let resilientString = strArray[0];

  for (let i = 1; i < strArray.length; i++) {
    resilientString += capitalize(strArray[i]);
  }
  return resilientString
}

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1)

}


//https://github.com/JOHNFLEURIMOND     Created by @fleurimond_john​