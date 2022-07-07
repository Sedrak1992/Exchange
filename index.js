const exchange1 = document.querySelector("#exchange1");
const exchange2 = document.querySelector("#exchange2");
const currency1 = document.querySelector("#currency1");
const currency2 = document.querySelector("#currency2");
const text = document.querySelector("#text");
const swap = document.querySelector("#swap");

currency2.addEventListener("input", updateValue);
currency1.addEventListener("input", updateValue2);

exchange1.addEventListener("input", updateValue);
exchange2.addEventListener("input", updateValue2);

const valuta = {
  AMD_USD: 0.0025,
  GEL_AMD: 139.24,
  GEL_USD: 0.0072,
  GEL_RUB: 21.45,
  GEL_EUR: 0.33,
  EUR_GUR: 2.99,
  USD_GEL: 2.94,
  AMD_GEL: 0.0072,
  RUB_GEL: 0.47,
  AMD_RUB: 0.14,
  AMD_EURO: 0.0022,
  USD_AMD: 400,
  USD_RUB: 50,
  USD_EUR: 0.8,
  RUB_AMD: 7,
  RUB_USD: 0.02,
  RUB_EUR: 0.017,
  EUR_AMD: 450,
  EUR_USD: 1.125,
};
function updateValue() {
  if (currency1.value === currency2.value) {
    exchange2.value = exchange1.value;
  } else {
    const sam = `${currency1.value}_${currency2.value}`;

    text.innerHTML =
      `${currency1.value}   1  ` + " = " + `${currency2.value} ${valuta[sam]}`;

    exchange2.value = exchange1.value * valuta[sam];
  }
}

function updateValue2() {
  if (currency1.value === currency2.value) {
    exchange1.value = exchange2.value;
  } else {
    const sam = `${currency1.value}_${currency2.value}`;
    exchange1.value = exchange2.value * valuta[sam];
    text.innerHTML =
      `${currency1.value}  1 ` + " = " + `${currency2.value} ${valuta[sam]}`;
  }
}

swap.addEventListener("click", () => {
  let som = currency1.value;
  let box = currency2.value;
  currency1.value = box;
  currency2.value = som;
  updateValue();
  updateValue2();
});
