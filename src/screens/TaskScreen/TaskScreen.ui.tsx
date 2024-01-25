import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'

import { TaskScreenUIProps } from './TaskScreen.props'

import styles from './TaskScreen.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TaskScreenUI: React.FC<TaskScreenUIProps> = ({ recipe, value, onChangeText, onPressCreate }) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingBottom, paddingTop }]}>
      <View style={styles.mainContainer}>
        {recipe && (
          <>
            <Text style={styles.title}>{recipe.title}</Text>

            <Text style={styles.description}>Köfte, Türk mutfağında popüler bir yemek olup genellikle kıyma, baharat ve ekmek kırıntılarından yapılır.</Text>
          </>
        )}
      </View>
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