
import Entry from './entry.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// UI or front end logic
const game1 = new Entry;

$(document).ready(function() {
  let i = -1;
  document.getElementById("title").value = "";
  document.getElementById("body").value = "";
  //  attachContactListeners();

  $("form#new-entry").submit(function(event) {
    
    // event.preventDefault();
    let newTitle = $("input#title").val();
    let newBody = $("textarea#body").val();
    game1.addEntry(newTitle,newBody);
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
    event.preventDefault();
    
  });
  
  $("button#first").click(function() {
    i=i+1;
    if(i>(game1.titles.length-1)) {
      i=0;
    }  
    document.getElementById("title").value = game1.titles[i];
    document.getElementById("body").value = game1.body[i];   
  });
  
  $("button#last").click(function() {
    i=i-1;
    if(i<0) {
      i=(game1.titles.length-1);
    }
    document.getElementById("title").value = game1.titles[i];
    document.getElementById("body").value = game1.body[i];     
  });

  $("button#new").click(function() {
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";  
  });   

  $("button#delete").click(function() {
    game1.deleteEntry(i);
    document.getElementById("title").value = game1.titles[(i)];
    document.getElementById("body").value = game1.body[(i)];
  });   


});


  