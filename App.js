import {Text, View } from 'react-native';
import Welcome from './screens/welcome'
import HomeController from './screens/home/index'
import PostPage from './screens/Post'

const App= ()=> {

  return (
    <View
      className='flex-1 relative'
    >
       {/* <Welcome/> */}
        <PostPage/>
      {/* <HomeController/> */}
    </View>
  );
}



export default App