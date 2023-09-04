import { 
    ScrollView, 
    Text, 
    View, 
    StyleSheet,
    ImageBackground,
    Image,
    Pressable
} from "react-native";
import { useFonts } from 'expo-font';


const SliceApp =()=>{
    const [loaded] = useFonts({
        IranianSans: require('../assets/fonts/IranianSans.ttf'),
      });
  
    if(!loaded){
      return null
    }
     
    return(
       <ImageBackground
        className="flex-1 justify-end items-center bg-slate-50"
        resizeMode={'cover'}
        source={require('../assets/img/pexels-tessa-k-896673.png')}
       >
        <View
         className='gap-[10px] justify-center items-center mb-[40%]'
        >
         <Image
          className='h-[250px]'
          resizeMode="contain"
          source={require('../assets/logo/pexels-tessa-k-8966731.png')}
         />
         <Text 
            style={[styles.text,{fontSize:40}]}
            className="text-white font-bold"
         >سقف </Text>
         <Text
            style={styles.text}
            className='text-white'
         >فرا تر از یک چهار دیواری</Text>
        </View>
        
        <Pressable
          className='p-[10px] drop-shadow-xl w-[70%] mb-[20%] items-center justify-center bg-cyan-950/10 rounded-[40px] mx-[10px] active:bg-cyan-950/25 '
        >
         <Text
            style={styles.text}
            className=' font-bold text-white'
         >ورود</Text>
        </Pressable>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
    text:{
        fontSize:20,
        fontFamily:'IranianSans', 
        textShadowColor:'rgba(0,0,0,0.2)',
        textShadowOffset:{ width:2, height:2},
        textShadowRadius:10,
    },
})

export default SliceApp;

