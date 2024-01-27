const convertButton = document.querySelector(".convert-button");
const selectCurrency = document.querySelector(".select-conversion-for");
const currencyNameConvert = document.querySelector(".currency-name-converted");
const convertFlag = document.querySelector(".convert-flag");


function convertFunction() {
  const inputCurrencyValue = document.querySelector(".input-value").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-money-typed"
  );
  const currencyValueConvert = document.querySelector(
    ".currency-money-changed"
  );

  const dolarToday = 4.92;
  const euroToday = 5.34;
  const libraToday = 6.26;

  if (selectCurrency.value == "dolar") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (selectCurrency.value == "euro") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
    currencyNameConvert.innerHTML = "€ Euro";
  }

  if (selectCurrency.value == "libra") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeNameAndFlag() {
  if (selectCurrency.value == "euro") {
    currencyNameConvert.innerHTML = "Euro";
    convertFlag.setAttribute("src", "./assets/euro.png");
  }
  if (selectCurrency.value == "libra") {
    currencyNameConvert.innerHTML = "Libra";
    convertFlag.setAttribute("src", "./assets/libra.png");
  }
  if (selectCurrency.value == "dolar") {
    currencyNameConvert.innerHTML = "American dollar";
    convertFlag.setAttribute("src", "./assets/dolar.png");
  }
  if (selectCurrency.value == "real") {
    currencyNameConvert.innerHTML = "Real";
    convertFlag.setAttribute("src", "./assets/real.png");
  }

  convertFunction();
}

selectCurrency.addEventListener("change", changeNameAndFlag);
convertButton.addEventListener("click", convertFunction);
