import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Login from '../components/Login';

const LoginScreen = (props) =>{
    return (
        <View style={styles.container} >
            <Login />
            <View style={styles.signupTextContainer}>
                <Text 
                style={styles.signupText}>Don`t Have an account yet? </Text>
                <TouchableOpacity >
                    <Text 
                    style={styles.signupbtn} 
                    onPress={()=>{ props.navigation.navigate('SignUp') }}>SignUp</Text>
                </TouchableOpacity>
                
                {/* <TouchableOpacity >
                    <Text 
                    style={styles.signupbtn}
                    onPress={()=>{ props.navigation.navigate('Dash') }}>Dashboard</Text>
                </TouchableOpacity>
                 */}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#37474f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    signupTextContainer:{
       
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        
    },
    signupText:{
        color: 'rgba(255,255,255,0.6)',
    },
    signupbtn:{
        color: '#ffffff'
    }
})

export default LoginScreen;
