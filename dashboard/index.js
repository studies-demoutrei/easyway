const containerTransactionsElement = document.querySelector("#container-transactions");
const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");


function Transaction(name, total) {
  const element = document.createElement("div");
  element.classList.add("transaction");

  const transactionNameElement = document.createElement("span");
  transactionNameElement.classList.add("transaction-name");
  transactionNameElement.textContent = name;
  element.appendChild(transactionNameElement);
  
  const transactionTotalElement = document.createElement("span");
  transactionTotalElement.classList.add("transaction-total");
  transactionTotalElement.innerHTML = `&#8369;${total.toLocaleString()}`;
  element.appendChild(transactionTotalElement);
  
  return element;
}


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];

  for (const transaction in userData.transactions) {
    const transactionTotal = userData.transactions[transaction];
    containerTransactionsElement.appendChild(Transaction(transaction, transactionTotal));
  }
}