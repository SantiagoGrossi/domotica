/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { VLCPlayer } from 'react-native-vlc-media-player';

const calcVLCPlayerHeight = (windowWidth,aspetRatio) => {
  return windowWidth * aspetRatio;
};
const AppButton = ({ onPress, title }) => (

  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

class App extends Component {
  state = {
    count: 0,
    isWaiting:false
  };

  porton = () => {
  this.state.isWaiting = true;
   fetch('http://181.44.190.169:81/LED=ON', {
           method: 'GET'
        })
        .then(response =>{
            Alert.alert("Abriendo");
            //this.state.disabled = false;
            this.state.isWaiting = true;
        })
        .catch(error=>{
            Alert.alert("No se pudo abrir")
        })

  };

  render() {
    return (
      <>

              <View style={styles.cameras}>
                   <View style={{flex: 1,height: 183,backgroundColor: 'transparent',flexDirection: 'row'}}>
                         <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                               <VLCPlayer
                                           source={{
                                             initType: 2,
                                             hwDecoderEnabled: 1,
                                             hwDecoderForced: 1,
                                             uri:
                                               'rtsp://sgrossi:12sgrossi34@181.44.190.169:554/cam/realmonitor?channel=1&subtype=0',
                                             initOptions: [
                                               '--no-audio',
                                               '--rtsp-tcp',
                                               '--network-caching=150',
                                               '--rtsp-caching=150',
                                               '--no-stats',
                                               '--tcp-caching=150',
                                               '--realrtsp-caching=150',
                                             ],
                                           }}
                                           autoplay={true}
                                           autoAspectRatio={true}
                                           resizeMode="cover"
                                           // videoAspectRatio={"4:3"}
                                           isLive={true}
                                           autoReloadLive={true}
                                           style={{ height: '100%', marginTop: 30}}

                               />

                         </View>
                         <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                               <VLCPlayer
                                    source={{
                                             initType: 2,
                                             hwDecoderEnabled: 1,
                                             hwDecoderForced: 1,
                                             uri:
                                             'rtsp://sgrossi:12sgrossi34@181.44.190.169:554/cam/realmonitor?channel=2&subtype=0',
                                             initOptions: [
                                             '--no-audio',
                                             '--rtsp-tcp',
                                             '--network-caching=150',
                                             '--rtsp-caching=150',
                                             '--no-stats',
                                             '--tcp-caching=150',
                                             '--realrtsp-caching=150',
                                             ],
                                             }}
                                             autoplay={true}
                                             autoAspectRatio={true}
                                             resizeMode="cover"
                                             // videoAspectRatio={"4:3"}
                                             isLive={true}
                                             autoReloadLive={true}
                                            style={{ height: '100%', marginTop: 30}}

                                />
                         </View>

                   </View>
                   <View style={{flex: 1,height: 183,backgroundColor: 'white',flexDirection: 'row'}}>
                         <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                               <VLCPlayer
                                      source={{
                                      initType: 2,
                                      hwDecoderEnabled: 1,
                                      hwDecoderForced: 1,
                                      uri:
                                      'rtsp://sgrossi:12sgrossi34@181.44.190.169:554/cam/realmonitor?channel=3&subtype=0',
                                      initOptions: [
                                      '--no-audio',
                                      '--rtsp-tcp',
                                      '--network-caching=150',
                                      '--rtsp-caching=150',
                                      '--no-stats',
                                      '--tcp-caching=150',
                                      '--realrtsp-caching=150',
                                      ],
                                      }}
                                       autoplay={true}
                                       autoAspectRatio={true}
                                       resizeMode="cover"
                                       // videoAspectRatio={"4:3"}
                                       isLive={true}
                                       autoReloadLive={true}
                                       style={{ height: '100%', marginTop: 0}}

                               />
                         </View>
                         <View style={{width: '50%',height: 183,backgroundColor: 'red',}}>
                              <VLCPlayer
                                      source={{
                                      initType: 2,
                                      hwDecoderEnabled: 1,
                                      hwDecoderForced: 1,
                                      uri:
                                      'rtsp://sgrossi:12sgrossi34@181.44.190.169:554/cam/realmonitor?channel=4&subtype=0',
                                      initOptions: [
                                      '--no-audio',
                                      '--rtsp-tcp',
                                      '--network-caching=150',
                                      '--rtsp-caching=150',
                                      '--no-stats',
                                      '--tcp-caching=150',
                                      '--realrtsp-caching=150',
                                      ],
                                      }}
                                       autoplay={true}
                                       autoAspectRatio={true}
                                       resizeMode="cover"
                                       // videoAspectRatio={"4:3"}
                                       isLive={true}
                                       autoReloadLive={true}
                                       style={{ height: '100%', marginTop: 0}}

                               />
                         </View>

                   </View>


              </View>


              <View style={styles.buttons}>
                  <View style={{flex: 1,height: 183,backgroundColor: 'transparent',flexDirection: 'row'}}>

                        <View style={{width: '50%',height: 183,backgroundColor: 'white',}}  >
                                  <TouchableOpacity
                                       onPress={this.porton} disabled={this.state.isWaiting}
                                      style={styles.appButtonContainer}>
                                      <Text style={styles.appButtonText}>Porton 1</Text>
                                  </TouchableOpacity>
                        </View>
                       <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                           <TouchableOpacity  style={styles.appButtonContainer}>
                               <Text style={styles.appButtonText}>Porton 2</Text>
                          </TouchableOpacity>
                        </View>
                  </View>

                  <View style={{flex: 1,height: 183,backgroundColor: 'transparent',flexDirection: 'row'}}>
                      <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                          <TouchableOpacity  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Riego</Text>
                          </TouchableOpacity>
                      </View>
                        <View style={{width: '50%',height: 183,backgroundColor: 'white',}}>
                             <TouchableOpacity  style={styles.appButtonContainer}>
                                  <Text style={styles.appButtonText}>Extra</Text>
                                        </TouchableOpacity>
                                  </View>
                        </View>
              </View>

           </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  heading:{
      fontSize: 30,
      fontWeight: '700',
      color: Colors.black,
      textAlign: 'center'
    },
     text:{
        fontSize: 20,
        fontWeight: '700',
        color: Colors.black,
      },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      flex: 1
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    cameras:{
        flex: 1,
        backgroundColor: 'white',
    },
    buttons:{
      flex: 1,
      backgroundColor: 'white',
    },
    singlecamera:{
      width: '50%'
    },
    video:{
      height: 30,
      width:30
    },
    appButtonContainer: {
       elevation: 8,
       backgroundColor: "#009688",
       borderRadius: 10,
       paddingVertical: 10,
       paddingHorizontal: 12,
      textAlign: 'center',
        textAlignVertical: 'center',
      height: 250
     },
     appButtonText: {
       fontSize: 18,
       color: "#fff",
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase",
       justifyContent: 'center'
     }

});

export default App;