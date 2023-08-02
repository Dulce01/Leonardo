import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,   
    StatusBar,
    Platform,
    ScrollView,
    Image
} from 'react-native';



export default class MenuPrincial extends Component {
    render() {
        return (
            <View style={styles.container}>
               <SafeAreaView style={styles.droidSafeAreaView}/>
               <ScrollView>
               <View style={styles.appTitle}>
               <View style={styles.appIcon}>
               <Image
                source={require("../assets/bg2.png")}
                style={styles.iconImagelogo}
               ></Image>
               </View>
               <View style={styles.tittleBar}>
                <Text style={styles.tittleText} >Menu Principal</Text>             
               </View>
               </View>
               <TouchableOpacity style={styles.routeCard} 
                onPress={() => this.props.navigation.navigate("Dieta")}
                > 
               <Text style={styles.routeText}> 
                Dieta
               </Text>
               <Text style={styles.knowMore}>{"Know More --->"}</Text>
               <Text style={styles.bgDigit}>1</Text>
               <Image source={require("../assets/d.png")} style={styles.iconImage}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard}
                onPress={() => this.props.navigation.navigate("Ejercicio")}
               > 
               <Text style={styles.routeText}> 
                Ejercicio
               </Text>
               <Text style={styles.knowMore}>{"Know More --->"}</Text>
               <Text style={styles.bgDigit}>2</Text>
               <Image source={require("../assets/e2.png")} style={styles.iconImage}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard}
                onPress={() => this.props.navigation.navigate("Descanso")}
               > 
               <Text style={styles.routeText}> 
                Descanso               
               </Text>
               <Text style={styles.knowMore}>{"Know More --->"}</Text>
               <Text style={styles.bgDigit}>3</Text>
               <Image source={require("../assets/d2.png")} style={styles.iconImage}></Image>
               </TouchableOpacity>
               </ScrollView>
            </View>
        )
    }
}

const styles =StyleSheet.create({

container:{flex:1, 
backgroundColor: "#58A672"
},

droidSafeAreaView:{
marginTop: Platform.OS==="Android" ? StatusBar.currentHeight:0

},

tittleText:{
fontSize:35,
color:"white",
fontWeight:"bold",
fontFamily: "Bubblegum-Sans"
},

tittleBar:{
 marginTop:30,
 justifyContent:"center",
 alignItems:"center",
 flex:0.80
},
routeCard:{
flex:0.25,
marginLeft:50,
marginRight:50,
marginTop:90,
borderRadius:30,
backgroundColor:"white",

},
routeText:{
fontSize:35,
fontWeight:'bold',
color:"#58A672",
marginTop:75,
paddingLeft:50,
fontFamily: "Bubblegum-Sans",
},
knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 115,
    right: 20,
    bottom: -35,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 150,
    width: 150,
    resizeMode: "contain",
    right: 50,
    top: -77
},
appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
},
appTitle: {
    flex: 0.07,
    flexDirection: "row"
},
iconImagelogo: {
    width: "150%",
    height: "150%",
    resizeMode: "contain"
  },
  

})
