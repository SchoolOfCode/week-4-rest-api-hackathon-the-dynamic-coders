import { readCocktails, writeCocktails } from "./helpers.js";

// This is where our functions go

// MVP 1
// create function that get's cocktail data and stores in a variable
export async function getCocktails() {
  const cocktails = await readCocktails();
  return cocktails;
}

// create GET listener that responds with all cocktail data (app.js)

//MVP 2
// create a function that takes in an ID parameter 
//read all cocktails
// find id 
//searches cocktail with matching id
//returns found cocktail

export async function getCocktailById (id){
  const cocktails = await readCocktails();
  const found = cocktails.find ((cocktails) => cocktails.id === id);
  return found;
}

// MVP 3
// create a function to create a new cocktail recipe
// read all the cocktails
// push the new recipe 
// return the new recipe
export async function addCocktail(id, name, alcoholic, category, glassType, instructions, ingredients, ingredientMeasures) {
    const newCocktail = {
        id,
        name,
        alcoholic,
        category,
        glassType,
        instructions,
        ingredients, 
        ingredientMeasures
    }

    const cocktails = await readCocktails();
    cocktails.push(newCocktail);
    await writeCocktails(cocktails);
    return newCocktail;
}

//MVP 4
// create a function to update a cocktail recipe
// read all the cocktails
// grab cocktail by id
// write updated cocktails back to file
export async function editCocktail(id, newName, newAlcoholic, newCategory, newGlassType, newInstructions, newIngredients, newIngredientMeasures) {
  const cocktails = await readCocktails();

  const cocktailToEdit = cocktails.find((cocktail) => cocktail.id === id);

  if (cocktailToEdit) {
    cocktailToEdit.name = newName ?? cocktailToEdit.name;
    cocktailToEdit.alcoholic = newAlcoholic ?? cocktailToEdit.alcoholic;
    cocktailToEdit.category = newCategory ?? cocktailToEdit.category;
    cocktailToEdit.glassType = newGlassType ?? cocktailToEdit.glassType;
    cocktailToEdit.instructions = newInstructions ?? cocktailToEdit.instructions;
    cocktailToEdit.ingredients = newIngredients ?? cocktailToEdit.ingredients;
    cocktailToEdit.ingredientMeasures = newIngredientMeasures ?? cocktailToEdit.ingredientMeasures;
  }

  await writeCocktails(cocktails);
  return cocktailToEdit;
}
//MVP 5
// create a function to delete a cocktail recipe
// read all the cocktails
// grab cocktail by id
// delete cocktail
// write back to file
// return deleted
export async function deleteCocktail(id) {
  let cocktails = await readCocktails();
  const indexToDelete = cocktails.findIndex((cocktail) => cocktail.id === id);
  if (indexToDelete !== -1) {
    const deletedCocktail = cocktails.splice(indexToDelete, 1)[0];
    await writeCocktails(cocktails);
    return deletedCocktail;
  } else {
    return null;  
  }
}