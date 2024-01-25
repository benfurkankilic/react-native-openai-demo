import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import TaskScreen from './src/screens/TaskScreen';

export default function App() {
  const [value, setValue] = useState('');


  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <TaskScreen />
    </SafeAreaProvider>
  );
}