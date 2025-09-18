function updateInput() {
  // Os dados da tela não são atualizados se essas váriaveis não tivessem dentro dessa função.
  let billInput = document.querySelector("#total-bill").value;
  let friendsInput = document.querySelector("#friends-input").value;
  let tipInput = document.querySelector("#tip-input").value;

  document.querySelector(".friends-quantity").innerHTML = friendsInput;
  document.querySelector(".tip-percentage").innerHTML = `${tipInput}%`;
}
