import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import spaghetti from '../img/spaghetti.png';
  
const Recipe = () => {
  const { id } = useParams();
  const [advice, setAdvice] = useState([]);


  useEffect(() => {
    const url = "https://nodejs-recipesapi.herokuapp.com/api/recipes/"+id;

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setAdvice(JSON.parse(JSON.stringify(json)));
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);

const title = {
  color: '#143b59',
  fontFamily: "Arial",
  fontSize: "35px",
}

const imgStyle = {
  width: '300px',
  height: '300px',
}

const info = {
  fontFamily: "Arial",
  fontSize: "18px",
  marginTop: '10px',
  display:'block'
}

const floatcontainer = {
  border: '3px solid #fff',
  padding: '20px',
  display:'flex'
}

const floatchild = {
  width: '50%',
  float: 'left',
  padding: '20px',
  border: '0px solid red'
}  



return (
  
      <div style={floatcontainer}>

        <div style={floatchild}>
          <img style={imgStyle} src={advice.img} alt='img'></img>
          <div>  
            <a style={title}>{advice.name}</a>
            <a style={info}>Difficulty: {advice.difficulty}/5</a>
            <a style={info}>Time: {advice.time} min</a>
            <a style={info}>Category: {advice.category}</a>
            <a style={info}>Ingredients: {advice.ingredients}</a>
          </div>
        </div>
        
        <div style={floatchild}>
        <div>  
            <a style={title}>Process:</a>
            <a style={info}>{advice.process}</a>
          </div>    
        </div>
      
      </div>
    );
};
  
export default Recipe;
