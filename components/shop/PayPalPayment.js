import React, {useState, useRef, useEffect} from 'react';
import { withNavigation } from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';
import { useData } from '../../context/DataContext';

const PaypalScreen = () => {
  const {showGateway, setShowGateway} = useData();
  const [prog, setProg] = useState(false);
  const [progClr, setProgClr] = useState('#000');
  const webviewRef = useRef()

  function onMessage(e) {
    let data = e.nativeEvent.data;
    // console.log(e)
    setShowGateway(false);
    console.log(data)

    let payment = JSON.parse(data);
    if (payment.status === 'COMPLETED') {
      Alert.alert('Plaćanje uspiješno.', 'Uspiješno ste obavili transakciju.', [{style: 'default', text: 'Ok', }])
    } else {
      Alert.alert('Plaćanje neuspiješno.', 'Molimo vas pokušajte ponovo.', [{style: 'default', text: 'Ok', }])
    }
  }

  const sendPostMessage = () => {
    console.log('Sending post message')
    webviewRef.current.postMessage('Hello from react native')
    console.log(webviewRef.current.postMessage)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.btnCon}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowGateway(true)}>
            <Text style={styles.btnTxt}>Plati!</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showGateway ? (
        <Modal
          visible={showGateway}
          onDismiss={() => setShowGateway(false)}
          onRequestClose={() => setShowGateway(false)}
          animationType={"fade"}
          transparent>
          <View style={styles.webViewCon}>
            <View style={styles.wbHead}>
              <TouchableOpacity
                style={{padding: 13}}
                onPress={() => setShowGateway(false)}>
                <Feather name={'x'} size={24} />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#0783FF',
                }}>
                Platite sa PayPalom
              </Text>
              <View style={{padding: 13, opacity: prog ? 1 : 0}}>
                <ActivityIndicator size={24} color={progClr} />
              </View>
            </View>
            <WebView
              source={{uri: 'https://gateway-gamma.vercel.app/'}}
              // source={{uri: 'http://192.168.100.14:3000/'}}
              style={{flex: 1}}
              onLoadStart={() => {
                setProg(true);
                setProgClr('#000');
              }}
              onLoadProgress={() => {
                setProg(true);
                setProgClr('#00457C');
              }}
              onLoadEnd={() => {
                setProg(false)
              }}
              onLoad={() => {
                setProg(false);
              }}
              onMessage={onMessage}
              ref={webviewRef}
            />
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginRight: 10,
    alignItems: 'flex-end'
  },
  btnCon: {
    height: 35,
    width: '18%',
    elevation: 1,
    backgroundColor: '#e52613',
    borderRadius: 3,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 15,
  },
  webViewCon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    zIndex: 25,
    elevation: 2,
  },
});
export default withNavigation(PaypalScreen);