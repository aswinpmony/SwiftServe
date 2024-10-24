import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
console.log('Screen Height:', height);
console.log('Screen Width:', width);
const setHeight = h => (height / 100) * h;
const setWidth = w => (width / 100) * w;

export default {setHeight, setWidth};

