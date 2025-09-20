function updateBillSplit() {
  const billInput = document.querySelector("#total-bill");
  const tipInput = document.querySelector("#tip-input");
  const friendsInput = document.querySelector("#friends-input");

  const subTotalElement = document.querySelector(".sub-total");
  const tipPercentageElement = document.querySelector(".tip-percentage");
  const friendsQuantityElement = document.querySelector(".friends-quantity");
  const totalBillResultElement = document.querySelector(".total-bill-result");

  const billAmount = parseFloat(billInput.value) || 0;
  const tipPercentage = parseFloat(tipInput.value) || 0;
  const friendsCount = parseInt(friendsInput.value) || 1;

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson =
    friendsCount > 0 ? totalAmount / friendsCount : totalAmount;

  subTotalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
  tipPercentageElement.textContent = `${tipPercentage}%`;
  friendsQuantityElement.textContent = friendsCount.toString();
  totalBillResultElement.textContent = `$${amountPerPerson.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = ["#total-bill", "#tip-input", "#friends-input"];

  inputs.forEach((inputId) => {
    const input = document.querySelector(inputId);
    if (input) {
      input.addEventListener("input", updateBillSplit);
    }
  });
});

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function validateInput(value, min = 0, max = 10000) {
  const num = parseFloat(value);
  return isNaN(num) ? min : Math.max(min, Math.min(num, max));
}
