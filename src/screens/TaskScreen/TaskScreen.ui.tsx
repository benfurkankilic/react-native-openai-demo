import React from 'react'
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { TaskScreenUIProps } from './TaskScreen.props'

import styles from './TaskScreen.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TaskScreenUI: React.FC<TaskScreenUIProps> = ({ recipe, value, onChangeText, onPressCreate }) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom, paddingTop }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.mainContainer}>
        {recipe && (
          <>
            <Text style={styles.title}>{recipe.title}</Text>
            {recipe.description && <Text style={styles.description}>{recipe.description}</Text>}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <>
                <Text style={styles.subtitle}>İçindekiler</Text>
                {recipe.ingredients.map((ingredient, index) => (
                  <Text key={index} style={styles.text}>- {ingredient}</Text>
                ))}
              </>
            )}
            {recipe.steps && recipe.steps.length > 0 && (
              <>
                <Text style={styles.subtitle}>Adımlar</Text>
                {recipe.steps.map((step, index) => (
                  <Text key={index} style={styles.text}>{index + 1}. {step}</Text>
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TextInput value={value} onChangeText={onChangeText} placeholder='Write a meal!' style={styles.input} />
        <TouchableOpacity onPress={onPressCreate} disabled={!value} style={[styles.button, !value && styles.disabled]}>
          <Text style={styles.buttonTitle}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskScreenUI