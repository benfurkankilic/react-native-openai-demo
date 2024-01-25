import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";

import { db } from '../../../firabaseConfig';

import TaskScreenUI from './TaskScreen.ui'
import { Recipe } from '../../types/Recipe.type';

const TaskScreenContainer = () => {
  const [value, setValue] = useState('')
  const [recipe, setRecipe] = useState<Recipe>()

  const handlePressCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), {
        title: value
      });
      const _recipe: Recipe = {
        id: docRef.id,
        title: value,
        description: '',
        ingredients: [],
        steps: [],
      }
      setRecipe(_recipe)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <TaskScreenUI
      recipe={recipe}
      value={value}
      onChangeText={setValue}
      onPressCreate={handlePressCreate}
    />
  )
}

export default TaskScreenContainer