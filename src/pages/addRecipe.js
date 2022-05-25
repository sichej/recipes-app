import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import spaghetti from '../img/spaghetti.png';
  
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
    });
  }

  /**
   * Styles
   */
  const container = {
  }

  const inp = {
    marginTop: '15px'
  }

  
  return (
    <div style={container} id='main'>
      <a>Name:</a>
      <input type='text' id='name' placeholder='name' style={inp}></input><br></br>
      <a>Category:</a>
      <input type='text' id='category' placeholder='category' style={inp}></input><br></br>
      <a>Difficulty:</a>
      <input type='number' id='difficulty' placeholder='difficulty from 1 to 5 'style={inp}></input><br></br>
      <a>Time:</a>
      <input type='number' id='time' placeholder='time in minutes' style={inp}></input><br></br>
      <a>Ingredients:</a>
      <input type='text' id='ingredients' placeholder='ingredients separated by comma' style={inp}></input><br></br>
      <a>Process:</a>
      <input type='text' id='process' placeholder='process' style={inp}></input><br></br>
      <a>Image:</a>
      <input type="file" name="" id="fileId" style={inp} onChange={imageUploaded}/><br></br>
      <input type='submit' id="submit" value='Upload' style={inp} onClick={createIngredientsArray}></input>
      <img id="img"></img>
    </div>
  );
};
  
export default AddRecipe;
