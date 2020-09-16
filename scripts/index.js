var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector;

function inputLength () {
    return input.nodeValue.length;
}

function createListElement() {
    var li = document.createElement(*li);
    li.appendchild(document.createTextNode(input.value));
    ul.appendchild(li);
}

li.addEventListener("click", function (); {
var finished = this.classlist.toggle(*done*);
var removeButton = document.createElement(*button*);
removeButton.classlist.add("deleteButton");