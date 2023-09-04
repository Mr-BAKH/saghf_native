import{
    View,
    ImageBackground,
    Text,
    StyleSheet
}from "react-native"

import { useFonts } from "expo-font";


const SliceApp =({bed,ft,rent,depo,adress,option,img})=>{


    const [loaded] = useFonts({
        IranianSans: require('../assets/fonts/IranianSans.ttf'),
      });
  
    if(!loaded){
      return null
    }

    return(
    <View 
      style={{shadowColor:'#000'}}
      className='w-[180px] h-[260px] shadow-sm bg-white overflow-hidden rounded-[20px]'
    >
      <ImageBackground
        resizeMode='cover'
        source={img}
        className='h-[200px] flex justify-between items-center'
      >
      
        <Text
          style={{fontFamily:'IranianSans',shadowColor:'#000'}}
          className="text-white font-bold  shadow-lg bg-cyan-950 text-center py-1 w-full"
        >{adress}</Text>
        <View
          className='flex w-full px-1 relative py-1 bg-black/25'
        >
            <View
             className='flex w-full flex-row justify-between items-center'
             >
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-white font-bold text-[14px]'
                >{rent}<Text className="text-[8px] absolute"> تومان</Text>
            </Text>
            <Text
                style={{fontFamily:'IranianSans'}}
                className='font-bold text-white text-[11px]'
                >کرایه
            </Text>
            </View>
            <View
             className='flex w-full flex-row justify-between items-center'
             >
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-white font-bold text-[14px]'
                >{depo}<Text className="text-[8px] absolute"> تومان</Text>
            </Text>
            <Text
                style={{fontFamily:'IranianSans'}}
                className='font-bold text-white text-[11px]'
                >ودیعه
            </Text>
            </View>
           
        </View>
      </ImageBackground> 

      <View
        style={{gap:5}}
        className='flex flex-row justify-center w-full'
      >
        <Text
            style={{fontFamily:'IranianSans', shadowColor:'#000'}}
            className='text-cyan-950  text-[14px] font-bold'
          >{bed} خواب</Text>
          <Text
            style={{fontFamily:'IranianSans', shadowColor:'#000'}}
            className='text-cyan-950 text-[14px] font-bold'
          >|</Text>
          <Text
            style={{fontFamily:'IranianSans', shadowColor:'#000'}}
            className='text-cyan-950 text-[14px] font-bold'
          >{ft} متر</Text>
      </View>
      <View
        style={{gap:2}}
        className='flex flex-row mt-1 justify-center'
        >
        {option.map((item,index)=>{
          return(
            <Text
              key={item + index}
              style={{fontFamily:'IranianSans'}}
              className='text-cyan-950 font-bold text-[12px]'
            >{item}{index > 0 && ' |'}</Text>
          )
        })}
      </View>
    </View>
    )
}


const styles = StyleSheet.create({

  shadow:{ 
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }

})

export default SliceApp;