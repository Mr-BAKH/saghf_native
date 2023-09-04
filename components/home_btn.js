import{
    Pressable,
    Text,
    Image
}from 'react-native'

import { useFonts } from 'expo-font'

const SliceApp =({title,id})=>{

    const [loaded] = useFonts({
        IranianSans: require('../assets/fonts/IranianSans.ttf'),
      });
  
    if(!loaded){
      return null
    }

    return(
        <Pressable
          style={{shadowColor:'#000'}}
          className="active:bg-cyan-950/10 rounded-lg p-[5px] items-center"
        >
          {id == 0 && 
            <Image
              source={require("../assets/Icon/menu.png")}
              resizeMode='contain'
              className='w-full h-[100px]'
            />
          }
          {id == 1 && 
            <Image
              source={require("../assets/Icon/house-cleaning.png")}
              resizeMode='contain'
              className='w-full h-[100px]'
            />
          }
          {id == 2 && 
            <Image
              source={require("../assets/Icon/building.png")}
              resizeMode='contain'
              className='w-full h-[100px]'
            />
          }
          <Text
            style={{fontFamily:'IranianSans'}}
            className="text-cyan-950  text-[12px]"
          >{title}</Text>
        </Pressable>
    )
}

export default SliceApp