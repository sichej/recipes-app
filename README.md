# recipes-app
Frontend application made with ReactJs framework
If you want to try it I hosted on Heroku, so go and [Try it](https://reactjs-recipes-app.herokuapp.com/home)

### Introductions
This is a project for 2021/2022 class of Tecnologie Internet at UniPr held by Professor Michele Amoretti, this is only the Frontend part, the other part is the backend made with Express.

This web application in the home screen shows the full list of recipes on the Database, it shows actually only a preview of them, just an image, the name and the difficulty level out of 5.

If you click on a recipe it opens in a new page where you can see the full recipe, with the full process and all the ingredients.

The recipe screen let you upload a recipe, you have to insert: \
`Name`: The name of the recipe \
`Category`: Like Primo, Secondo, Dolce \
`Difficulty`: From 1 (Easy) to 5 (Carlo Cracco) \
`Time`: Total time from the beginning to the end (Cooking time included) \
`Ingredients`: Every single ingredient separated by a comma ( , ) \
`Process`: Detailed process of how to make the actual recipe \
`Image`: Upload a picture of the final result, make sure not to exeed 75kb of data because it won't be uploaded

## How to run the web application
```bash
git clone https://github.com/sichej/recipes-app
cd recipe-app
# to install all the npm modules to correctly run the project
npm install
# when everything is done 
npm start
```