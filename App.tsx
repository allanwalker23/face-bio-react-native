import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync 
} from 'expo-local-authentication';
export default function App() {
  const [isBiometricSupported, setIsBiometricSupported]=React.useState (false);
   //Verifique se o hardware suporta biometria
   const biometricsAuth = async () => {
    // Starter function
    const result = await authenticateAsync()
      if(result.success){
        alert("FOII")
      }
    }

    useEffect(()=>{
      biometricsAuth();
    },[])
    

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
