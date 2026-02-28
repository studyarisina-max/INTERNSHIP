import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import CustomInput from '../components/CustomInput';
import API from '../services/api';

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      return Alert.alert('Error', 'Please fill all fields');
    }

    setLoading(true);
    try {
      // Sending data to Render
      const response = await API.post('/auth/register', { name, email, password });
      
      setLoading(false);
      Alert.alert('Success', 'Account created! You can now login.');
      navigation.navigate('Login');
    } catch (error: any) {
      setLoading(false);
      
      
      let errorMessage = "Registration failed";
      
      if (error.response) {
        // The server received the request but rejected it (e.g., 400 or 500 error)
        errorMessage = `Server Error: ${error.response.data.message || error.response.status}`;
      } else if (error.request) {
        // The phone could NOT reach the server at all
        errorMessage = "Network Error: Cannot reach the server. Make sure your Render URL is correct and the server is awake.";
      } else {
        errorMessage = error.message;
      }

      Alert.alert('Error', errorMessage);
      console.log("Full Error Object:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <CustomInput label="Full Name" value={name} onChangeText={setName} />
      <CustomInput label="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity 
        style={[styles.button, loading && { backgroundColor: '#ccc' }]} 
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333' },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 20, textAlign: 'center', color: '#007bff', fontWeight: '500' }
});

export default RegisterScreen;