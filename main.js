const btn = document.querySelector("#addGift");
const btnRandom = document.querySelector("#randomGift");

let list = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#personName");
  const gift = document.querySelector("#giftName");
  const display = document.querySelector("#displayGift");

  if(gift.value === '') {
      display.innerHTML = `<b>Nie podano prezentu!!!</b>`
  }else if(gift.value.length <= 2) {
    display.innerHTML = `<b>Nazwa prezentu jest za krótka!!!</b>`
  }else {
  list.push(gift.value);
  console.log(list);
  display.innerHTML = `Dodałeś <b>${gift.value}</b> do listy prezentów`;
}
});

btnRandom.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#personName");
  const gift = document.querySelector("#giftName");
  const display = document.querySelector("#displayGift");


     if(name.value === '') {
      display.innerHTML = `<b>Wpisz imię!!!</b>`
    }else if(list.length ==0) {
        display.innerHTML = `<b>Brak prezentów!!!</b>` 
    }else {
    display.innerHTML = `<b>${name.value}</b> wylosowany dla ciebie prezent to <b>${list[Math.floor(Math.random() * list.length)]}</b>!!!`
    }
});
