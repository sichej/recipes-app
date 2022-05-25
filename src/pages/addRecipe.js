import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
  
const AddRecipe = () => {

  const navigate = useNavigate();

  const Recipe = new Object();

  // array of ingredients 
  let ingredientsArray = [];
  /**
   * creates from ingredients input box the array of ingredients
   * call createObject
   * call uploadData
   */
  const createIngredientsArray = () =>{ 
    let ingredients = document.getElementById('ingredients').value;
    ingredientsArray = ingredients.split(',');

    createObject();
    uploadData();
  }

  // base64 strng of the image
  let base64String = "";
  /**
   * converts the image into a base64 string of data
   */
  const imageUploaded = () =>{
    var file = document.querySelector('input[type=file]')['files'][0];

    var reader = new FileReader();
    console.log("next");
    
    reader.onload = function () {
      // base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      base64String = reader.result;
      let imageBase64Stringsep = base64String;
      //alert(base64String);
    }
    reader.readAsDataURL(file);
    
  }


  /**
   * fills the Recipe Object with all the data 
   */
  const createObject = () =>{
    Recipe.name = document.getElementById('name').value;
    Recipe.category = document.getElementById('category').value;
    Recipe.difficulty = document.getElementById('difficulty').value;
    Recipe.time = document.getElementById('time').value;
    Recipe.ingredients = ingredientsArray;
    Recipe.process = document.getElementById('process').value;
    Recipe.img = base64String;
  }

  // url for the post request
  const url = "https://nodejs-recipes-api.herokuapp.com/api/recipes/";
  /**
   * makes the POST request with the Recipe Object
   * data are converted in JSON format to be accepted
   */
  const uploadData = () =>{

    fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Recipe)
    }).then(res => {
      console.log("Request complete! response:", res);
      alert("Upload completed!");
    });
  }

  /**
   * Styles
   */
  const container = {
    textAlign: 'center',
  }

  const inp = {
    marginTop: '7px'
  }

  const desc = {
    display: "inline-block",
    fontFamily: "Arial",
    fontSize: "17px",
    marginTop: "20px",
  }

  const sProcess = {
    textAlign: "left",
    marginTop: '7px',
    width: "300px",
    height: "400px"
  }

  
  return (
    <div style={container} id='main'>
      <a style={desc} >Name:</a><br></br>
      <input type='text' id='name' placeholder='name' style={inp}></input><br></br>
      <a style={desc} >Category:</a><br></br>
      <select style={inp} name = "list-cat" id="category" >
        <option value = "antipasto" selected>Antipasto</option>
        <option value = "primo" selected>Primo</option>
        <option value = "secondo">Secondo</option>
        <option value = "contorno">Contorno</option>
        <option value = "dolce">Dolce</option>
        <option value = "cocktail">Cocktail</option>
      </select><br></br>
      <a style={desc} >Difficulty:</a><br></br>
      <select style={inp} name = "list-dif" id="difficulty" >
        <option value = "1" selected>Very Easy</option>
        <option value = "2" selected>Easy</option>
        <option value = "3">Medium</option>
        <option value = "4">Hard</option>
        <option value = "5">Very Hard</option>
      </select><br></br>
      <a style={desc} >Time:</a><br></br>
      <input type='number' id='time' placeholder='time in minutes' style={inp}></input><br></br>
      <a style={desc} >Ingredients:</a><br></br>
      <input type='text' id='ingredients' placeholder='ingredients separated by comma' style={inp}></input><br></br>
      <a style={desc} >Process:</a><br></br>
      <input style={sProcess} type='text' id='process' placeholder='process'></input><br></br>
      <a style={desc} >Image:</a><br></br>
      <input type="file" name="" id="fileId" style={inp} onChange={imageUploaded}/><br></br>
      <input type='submit' id="submit" value='Upload' style={inp} onClick={createIngredientsArray}></input>
      <img id="img"></img>
    </div>
  );
};
  
export default AddRecipe;
