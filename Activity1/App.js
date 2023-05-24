import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.txtHeader}>LOGIN</Text>
      <Image source={require('./assets/login.png')}
          style = {styles.imgHeader}/>
        <Text style={styles.txtTitles}>Username:</Text>
        <TextInput 
          style={styles.txtInput} 
          keyboardType='email-address'
          placeholder='Insert your username'/>
        <Text style={styles.txtTitles}>Password:</Text>
        <TextInput 
          style={styles.txtInput}
          placeholder='Insert your password'/>
        <TouchableOpacity
          style={styles.button}>
          <Image source={require('./assets/btn.png')}
            style={styles.imgBtn}
            />
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DCEA0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtHeader:{
    fontSize:50,
  },

  imgHeader:{
    width: 100,
    height: 100
  },

  txtTitles:{
    fontSize: 20,
    marginTop: 15,
  },

  txtInput:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 5,
    height: '5%',
    width: '50%',
  },

  button:{
    top:10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#145A32'
  },

  imgBtn:{
    width:25,
    height:25,
  },
});
