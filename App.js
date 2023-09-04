import {Text, View } from 'react-native';

import Welcome from './screens/welcome'
import Home from './screens/home'



const App= ()=> {

  return (
    <View 
     className="flex-1 relative"
    >
      {/* <Welcome/> */}
      <Home/>
      <View
        className=" h-[50px]"
      >
        <Text>اپلیکشن سقف</Text>
      </View>
    </View>
  );
}



export default App