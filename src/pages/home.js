import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
  
const Home = () => {

  const [advice, setAdvice] = useState([]);

  const navigate = useNavigate();

    useEffect(() => {
        const url = "https://nodejs-recipes-api.herokuapp.com/api/recipes/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const li = {
      padding: "30px",
      listStyleType:'none',
      float:'left',
      display:'block',
      borderWidth:'2px',
      borderStyle:'solid',
      borderColor:'black',
      margin: '20px',
      textAlign: 'center',
    };

    const descriptor = {
      fontFamily: "Arial",
      fontSize: "15px",
    }

    const smallimg = {
      width: '200px',
      height: '200px',
    }

  return (
    <div>
     {advice.length > 0 && (
       <ul>
          {advice.map(a => (
            <li style={li} key={a._id} onClick={() => navigate('/recipe/'+a._id)}>
              <img style={smallimg} src={a.img} alt="img"/>
              <p style={descriptor}>Name:</p>{a.name}
              <p style={descriptor}>Difficulty:</p>{a.difficulty}/5
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
  
export default Home;
