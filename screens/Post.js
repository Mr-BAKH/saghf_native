import IonIcon from "@expo/vector-icons/Ionicons"
import ButtomSaghf from '../components/bottom'

import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native'

import { useFonts } from "expo-font"



const Image_Box = ({img})=>{
    return(
        <View
            style={{shadowColor:'#000'}}
            className='w-[150px] shadow-md overflow-hidden h-[150px] rounded-[20px]'
        >
            <Image
                className='w-full h-full'
                resizeMode="cover"
                source={img}
                />
        </View>
    )
};

const Price_Box =({title, price})=>{
    return(
        <View
            className='flex flex-row justify-center items-center'
            >
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-slate-50 font-bold pr-[3px] text-[16px]'
                >{price}<Text className="text-[8px] absolute"> تومان</Text>
            </Text>
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-white font-bold text-[12px]'
                >{title}
            </Text>
        </View>
    )
};

const Title = ({title})=>{
    return(
        <View
            className="flex mt-[10px] flex-row justify-center items-center"
            style={{gap:5}}
        >
          <View className="flex-grow h-[3px] bg-cyan-950"></View>
          <Text
              style={{fontFamily:'IranianSans'}}
            className='text-cyan-950 Text-[14px]'
          >
            {title}
          </Text>
          <View className="w-[15px] h-[3px] bg-cyan-950"></View>
        </View>
    )
}

const Details = ({detail,icon})=>{
    return(
        <View
        style={{gap:4}}
        className="flex flex-row items-center"
    >
        <Text
            style={{fontFamily:'IranianSans'}}
            className='font text-cyan-950 text-[14px]'
        >{detail}</Text>
        <IonIcon style={styles.dot_icon} name={icon} size={20}/>
    </View>
    )
}

const SliceApp =()=>{

    const [loaded] = useFonts({
        IranianSans: require('../assets/fonts/IranianSans.ttf'),
      });
  
    if(!loaded){
      return null
    }

    return(
    <ScrollView
        className="flex-1"
    >   
        <ImageBackground
            style={styles.shadow}
            className="h-[300px] shadow-lg items-center relative flex justify-between"
            resizeMode="cover"
            source={require('../assets/img/pexels-designecologist-1005058.jpg')}
        >
          <View
            className=" flex w-full justify-between px-[20px] flex-row mt-[40px]"
          >
            <IonIcon style={styles.topIcon} name='chevron-back-outline' color={"#fff"} size={25}/>
            <IonIcon style={styles.topIcon} name='paper-plane-outline' color={"#fff"} size={25}/>
          </View>
          <View
            style={{shadowColor:'#000'}}
            className='bg-cyan-950 shadow-lg w-11/12 absolute rounded-md bottom-4 flex flex-row justify-between items-center p-[10px]'
          >
            <Price_Box title={'کرایه'} price={'123,234,245'}/>
            <Text className='text-white' >|</Text>
            <Price_Box title={'ودیعه'} price={'123,234,245'}/>
          </View>
        </ImageBackground>

        <Title title={'تصاویر'}/>
        <ScrollView
            contentContainerStyle={{gap:10,padding:10}}
            className="py-[10px]"
            horizontal={true}
            decelerationRate={'fast'}
        >
           <Image_Box img={require('../assets/img/pexels-designecologist-1005058.jpg')}/>
           <Image_Box img={require('../assets/img/pexels-designecologist-1005058.jpg')}/>
           <Image_Box img={require('../assets/img/pexels-designecologist-1005058.jpg')}/>
           <Image_Box img={require('../assets/img/pexels-designecologist-1005058.jpg')}/>
        </ScrollView>
        <Title title={"مشخصات"}/>
        <View
            className="flex py-[20px] flex-row items-center justify-center"
            style={{gap:20}}
        >
           <Details icon={'business-outline'} detail={"طبقه 2"}/>
           <Details icon={'home-outline'} detail={"400 متری"}/>
           <Details icon={'bed-outline'} detail={"4 خواب"}/>
        </View>
       <Title title={"توضیحات"}/>
        <Text
            style={{fontFamily:'IranianSans'}}
            className='text-cyan-950 p-[10px] py-[20px] text-[12px]'
        >
            خانه ای آرام در مکانی دنج
        </Text>
        <Title title={"موقعیت مکانی"}/>
            <View
                className='p-[20px]'
            >
                <Image
                    style={styles.shadow}
                    className='w-full rounded-lg h-[200px] bg-cyan-950'
                    source={require('../assets/img/basic.jpg')}
                />
            </View>
            <ButtomSaghf/>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    dot_icon:{
        backgroundColor:'rgba(8, 51, 68, 0.2)',
        color:'rgb(8 51 68)',
        borderRadius:5,
        padding:5
     },
     topIcon:{
        padding:5,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:10
     },

})


export default SliceApp;
