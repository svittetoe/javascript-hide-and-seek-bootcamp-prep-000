function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('div.target');
}

function increaseRankBy(n) {
var item = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < item.length; i++) {
  var oldRank = item[i].textContent;
  item[i].textContent = parseInt(oldRank, 10) + n;
  }
}

function deepestChild() {
var grandNodeNodes = document.querySelectorAll('#grand-node div');
return grandNodeNodes[grandNodeNodes.length - 1];
}
