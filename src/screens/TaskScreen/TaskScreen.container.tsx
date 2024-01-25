import React, { useEffect, useState } from 'react'
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";

import { db } from '../../../firabaseConfig';

import TaskScreenUI from './TaskScreen.ui'
import { Recipe } from '../../types/Recipe.type';

const TaskScreenContainer = () => {
  const [value, setValue] = useState('')
  const [recipe, setRecipe] = useState<Recipe>()

  useEffect(() => {
    if (!recipe) return
    const unsubscribe = onSnapshot(doc(db, "recipes", recipe.id), (doc) => {
      const _recipe = {
        id: doc.id,
        ...doc.data()
      } as Recipe
      setRecipe(_recipe)
    });
    return unsubscribe
  }, [recipe?.id])

  const handlePressCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), {
        title: value
      });
      const _recipe: Recipe = {
        id: docRef.id,
        title: value,
      }
      setValue('')
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