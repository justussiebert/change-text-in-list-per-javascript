const theTitle = document.querySelector("h1");
const theMain = document.querySelector("main");
let meineListe = document.querySelector("ul.meineListe");
let meineListenPunkte = meineListe.querySelectorAll("li");
const btnZufuegen = document.querySelector("button.btnAdd");
const inputTextFieldNewListItem = document.querySelector("#input-new-text");
//const theNewTextForH1 = document.createTextNode("Neuer Text, tralala");

const btnChangePosition = document.querySelector("#btnChangePosition");

const selectChangePositionElement = document.querySelector(
  "#element-to-change-position"
);
const selectChangePositionElementBefore = document.querySelector(
  "#element-inserted-before-position"
);
/*
const state = {
  listItems: [
    { itemText: "hallo", itemPosition: 1 },
    { itemText: "xxx", itemPosition: 2 },
  ],
};
*/
const state = {
  listItems: [],
};

//const meinZuVerschiebendesElement = meineListe.children[2];
//const elementVorDasVerschobenWerdenSoll = meineListe.children[0];

// die h1 in das main setzen, ans Ende
//theMain.appendChild(theTitle);
// neuen Tetx für h1. Wird zugefügt, nicht überschrieben
//theTitle.appendChild(theNewTextForH1);

function changePositionOfLiElement(elementToChange, elementBefore) {
  meineListe.insertBefore(
    //meinZuVerschiebendesElement,
    //elementVorDasVerschobenWerdenSoll
    elementToChange,
    elementBefore
  );
}

btnChangePosition.addEventListener("click", function (e) {
  const meinZuVerschiebendesElement =
    meineListe.children[selectChangePositionElement.value - 1];
  const elementVorDasVerschobenWerdenSoll =
    meineListe.children[selectChangePositionElementBefore.value - 1];

  changePositionOfLiElement(
    //selectChangePositionElement.value,
    //selectChangePositionElementBefore.value
    meinZuVerschiebendesElement,
    elementVorDasVerschobenWerdenSoll
  );
  //console.log("Element: " + selectChangePositionElement.value);
  //console.log("Vor: " + selectChangePositionElementBefore.value);
});

// click-event für button definieren
btnZufuegen.addEventListener("click", function () {
  const newData = {
    itemText: inputTextFieldNewListItem.value,
    //itemPosition: 0,
    itemPosition: state.listItems.length + 1,
  };
  state.listItems.push(newData);
  renderAll();
});

// button referenzieren, auf den das click-event stattfinden soll
const btnLeeren = document.querySelector("button.btnLeeren");
// click-event für button definieren

btnLeeren.addEventListener("click", function () {
  //meineListe.innerText = "";
  state.listItems = "";
  renderAll();
});

function renderAll() {
  meineListe.innerHTML = "";
  inputTextFieldNewListItem.value = "";

  if (state.listItems.length > 0) {
    const sortedList = state.listItems;

    sortedList.slice(0);
    sortedList.sort(function (a, b) {
      return a.itemPosition - b.itemPosition;
    });

    //for (let i = 0; i < state.listItems.length; i++) {
    for (let i = 0; i < sortedList.length; i++) {
      const neuerLiEintrag = document.createElement("li");
      // der Inhalt / Text für das neue Element
      const newTextForNewLi = document.createTextNode(
        //state.listItems[i].itemText
        sortedList[i].itemText
      );
      // der Text wird dem neuen Element zugewiesen
      neuerLiEintrag.appendChild(newTextForNewLi);
      // das li-Element, mit dem Text, wird an die letzte Position der Liste angehängt
      meineListe.appendChild(neuerLiEintrag);
      console.log("state: ", state.listItems);
      console.log("Tmp list: ", sortedList);
    }
  }
  //++++++++++++++++
  selectChangePositionElement.innerHTML = "";
  selectChangePositionElementBefore.innerHTML = "";

  if (state.listItems.length > 1) {
    for (let i = 0; i < state.listItems.length; i++) {
      const newOption = document.createElement("option");
      const newOption2 = document.createElement("option");

      newOption.value = i + 1;
      newOption.label = i + 1;

      newOption2.value = i + 1;
      newOption2.label = i + 1;

      selectChangePositionElement.appendChild(newOption);
      selectChangePositionElementBefore.appendChild(newOption2);
    }
  }
}
/*
function renderSelectListsPosition() {
  selectChangePositionElement.innerHTML = "";
  for (let i = 0; i < state.listItems.length; i++) {
    const newOption = document.createElement("option");
    newOption.value = i + 1;
    newOption.label = i + 1;

    selectChangePositionElement.appendChild(newOption);
  }
}
*/
