import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";


export default function Home() {
  let blankMaker;
  let i, j, x;
  var name;
  const [blankSize, setBlankSize] = React.useState();
  const [valueSize, setValueSize] = React.useState();
  const [storyVisibility, setStoryVisibility] = React.useState("invisible");
  let blankList = "";
  let listArray = [];
  let valueArray = [];
  const [fillBlank, setFillBlank] = React.useState("");
  
  //let runOnce = React.useState(false);

  const onStart = (event) => {

}

const changeVisibility = () => {
  console.log("here");
  //document.getElementById("story").class = "visible";
  setStoryVisibility("visible");
}

const onSubmit = (event) => {
    document.getElementById("story").innerHTML = "";
    setStoryVisibility("invisible");

       event.preventDefault();
    axios.get(`http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25`).then(function (response) {
      console.log(response.data.blanks);
      console.log(response.data.title);
      console.log(response.data.blanks.length);
      console.log(response.data.value[0]);
      console.log(response.data.value.length);

      setBlankSize(response.data.blanks.length);
      setValueSize(response.data.value.length);
      console.log(response.data.blanks.length);

      listArray.length = response.data.blanks.length

      listArray = [];
      valueArray = [];
      var holder = document.getElementById("holder");
      //for(i = 0; i < blankSize; i++){
      //  myString += response.data.blanks[i].toString();
      //  myString += " ";
      //}

      //console.log(myString)
      //setFillBlank(myString)

      for(j=0; j < blankSize; j++){
        listArray[j] = response.data.blanks[j];
        valueArray[j] = response.data.value[j];
        
        if(typeof valueArray[j] !== 'undefined')
          add2(valueArray[j].toString());

        if (typeof listArray[j] !== 'undefined')
            add(listArray[j].toString());
      }
      
      if(typeof valueArray[valueSize - 1] !== 'undefined')
          add2(valueArray[valueSize - 1].toString());

      //blankMaker = p => <BlankList blank={response.data.blanks[i]}></BlankList>
      //JSON.stringify(response.data.blanks[i][0])



        //holder.innerHTML += "<input/>";


  })
}



 function add(name) {

  //Create an input type dynamically.
  var element = document.createElement("input");
  
  
  //Create Labels
  //var label = document.createElement("Label");
  //label.innerHTML = "New Label";     
  
  //Assign different attributes to the element.
  element.setAttribute("type", "text");
  element.setAttribute("value", "");
  element.setAttribute("class", "inline-block bg-black text-white placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2 visible");
  element.setAttribute("name", "Test Name");
  element.setAttribute("style", "width:200px");
  element.setAttribute("placeholder", name)
  


  //label.setAttribute("style", "font-weight:normal border border-black");
  
  // 'foobar' is the div id, where new fields are to be added
  var foo = document.getElementById("story");
  
  //Append the element in page (in span).
  //foo.appendChild(label);
  foo.appendChild(element);
  }

function add2(name) {
  var element = document.createElement("P");
  var textNode = document.createTextNode(name);
  
  element.appendChild(textNode);
  
  element.setAttribute("class", "text-white inline-block");
  //element.setAttribute("id", "storyText");
  
  var foo = document.getElementById("story");
  foo.appendChild(element);
}

  return(
    
  )
  
}