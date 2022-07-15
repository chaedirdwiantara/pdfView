import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {useWindowDimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {source} from './src/source';

export default function App() {
  const {width} = useWindowDimensions();
  return <WebView contentWidth={width} source={source} />;
}
