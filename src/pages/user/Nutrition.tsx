import React, { useState } from 'react';
import axios from 'axios';

interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}

interface FormData {
    title: string;
    description: string;
    mealType: string;
    dietaryType: string;
    prepTime: string;
    cookTime: string;
    calories: string;
    carbohydrates: string;
    protein: string;
    fat: string;
    ingredients: Ingredient[];
    instructions: string;
}

const Nutrition: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        mealType: '',
        dietaryType: '',
        prepTime: '',
        cookTime: '',
        calories: '',
        carbohydrates: '',
        protein: '',
        fat: '',
        ingredients: [{ name: '', quantity: '', unit: '' }],
        instructions: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = e.target;
      const ingredients = [...formData.ingredients];
      ingredients[index][name as keyof Ingredient] = value; // Assert name as keyof Ingredient
      setFormData({ ...formData, ingredients });
  };

    const addIngredient = () => {
        setFormData({
            ...formData,
            ingredients: [...formData.ingredients, { name: '', quantity: '', unit: '' }]
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      console.log(formData)
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br />

                {/* Description */}
                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea><br />

                {/* Meal Type */}
                <label htmlFor="mealType">Meal Type:</label><br />
                <select id="mealType" name="mealType" value={formData.mealType} onChange={handleChange}>
                    <option value="">Select Meal Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Dessert">Dessert</option>
                </select><br />

                {/* Dietary Type */}
                <label htmlFor="dietaryType">Dietary Type:</label><br />
                <select id="dietaryType" name="dietaryType" value={formData.dietaryType} onChange={handleChange}>
                    <option value="">Select Dietary Type</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    {/* Add more options as needed */}
                </select><br />

                {/* Preparation Time */}
                <label htmlFor="prepTime">Preparation Time (minutes):</label><br />
                <input type="number" id="prepTime" name="prepTime" value={formData.prepTime} onChange={handleChange} required /><br />

                {/* Cooking Time */}
                <label htmlFor="cookTime">Cooking Time (minutes):</label><br />
                <input type="number" id="cookTime" name="cookTime" value={formData.cookTime} onChange={handleChange} required /><br />

                {/* Nutrition Facts */}
                <h3>Nutrition Facts</h3>
                <label htmlFor="calories">Calories:</label><br />
                <input type="number" id="calories" name="calories" value={formData.calories} onChange={handleChange} required /><br />
                {/* Add fields for carbohydrates, protein, fat */}

                {/* Ingredients */}
                <h3>Ingredients</h3>
                {formData.ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <input type="text" name="name" placeholder="Name" value={ingredient.name} onChange={(e) => handleIngredientChange(e, index)} required />
                        <input type="text" name="quantity" placeholder="Quantity" value={ingredient.quantity} onChange={(e) => handleIngredientChange(e, index)} required />
                        <input type="text" name="unit" placeholder="Unit" value={ingredient.unit} onChange={(e) => handleIngredientChange(e, index)} />
                        {index !== 0 && <button type="button" onClick={() => setFormData({ ...formData, ingredients: formData.ingredients.filter((_, i) => i !== index) })}>Remove</button>}
                    </div>
                ))}
                <button type="button" onClick={addIngredient}>Add Ingredient</button>

                {/* Instructions */}
                <h3>Instructions</h3>
                <textarea name="instructions" value={formData.instructions} onChange={handleChange} required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Nutrition;


// ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']
// ['Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Paleo', 'Low-Carb', 'Low-Fat', 'High-Protein']
