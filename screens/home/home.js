import IonIcon from '@expo/vector-icons/Ionicons'
import Home_btn from '../../components/home_btn'
import Box_Rental from '../../components/box_rental'
import {rental} from '../../data/data';
import { useFonts } from 'expo-font';

import { 
    ScrollView, 
    View, 
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    Pressable
} from "react-native";


const Title = ({title})=>{
  return(
    <View
      className="py-[5px] px-[15px] flex-row justify-between items-center flex w-full bg-cyan-950/5"
    >
      <Text
        style={{fontFamily:'IranianSans', shadowColor:'#000'}}
        className='text-red-950  font-bold text-[10px] '
      >جدید</Text>
      <Text
        style={{fontFamily:'IranianSans', shadowColor:'#000'}}
        className='text-cyan-950 font-bold text-[20px]'
      >{title}</Text>
    </View>
  )
}

const SliceApp =()=>{

  const Rental = rental;

  const [loaded] = useFonts({
    IranianSans: require('../../assets/fonts/IranianSans.ttf'),
  });

    if(!loaded){
      return null
    }

    return(
        <ScrollView
            contentContainerStyle={{gap:10  }}
            className='flex-1'
        >
          <ImageBackground
            source={require("../../assets/img/pexels-nick-gorniok-17854713.jpg")}
            resizeMode='cover'
            style={{shadowColor:'#000'}}
            className="w-full h-[250px] shadow-lg relative rounded-b-[60px] overflow-hidden"
          >
            {/* more btn */}
           <Pressable
             className='active:bg-cyan-950/10 absolute top-[40px] right-[20px] rounded-full '
           >
             <IonIcon
               color="white"
               name='menu'
               size={40}
             />
           </Pressable>
         </ImageBackground>

         <View
           style={{gap:20}}
           className='flex flex-row p-[10px] items-center justify-center flex-wrap'
         >
            <Home_btn title={"سایر خدمات"} id={0}/>
            <Home_btn title={"خدمات خانه"} id={1}/>
            <Home_btn title={"خدمات املاک"} id={2}/>
         </View>

         {/* Ad section for rent */}
         <View
           className='mt-[20px]'
         >
          <Title title={'رهن و اجاره'}/>
          <ScrollView 
            contentContainerStyle={{gap:10 , shadowColor:'#000',padding:10}}
            horizontal={true}
            pagingEnabled={true}
            snapToInterval={1}
            decelerationRate={'fast'}
  
            snapToEnd={true}
           >
            {Rental.map(item =>{
              return(
                <Box_Rental 
                  key={item.id}
                  bed={item.details.bed} 
                  ft={item.details.ft} 
                  rent={item.money.rent} 
                  depo={item.money.depo} 
                  adress={item.details.short_address} 
                  option={item.details.options} 
                  img={item.ad_imga}
                />
              )
            })}
          </ScrollView>
        </View>
          {/* Ad section for by and sell*/}
          <Title title={'خرید و فروش'}/>
          <ScrollView 
           contentContainerStyle={{gap:10 , shadowColor:'#000',padding:10}}
            horizontal={true}
            pagingEnabled={true}
            snapToInterval={1}
            decelerationRate={'fast'}
            StickyHeaderComponent={<Text>تازه های اجاره</Text>}
            snapToEnd={true}
           >
            {Rental.map(item =>{
              return(
                <Box_Rental 
                  key={item.id}
                  bed={item.details.bed} 
                  ft={item.details.ft} 
                  rent={item.money.rent} 
                  depo={item.money.depo} 
                  adress={item.details.short_address} 
                  option={item.details.options} 
                  img={item.ad_imga}
                />
              )
            })}
          </ScrollView>
        </ScrollView>
    )
}



export default SliceApp;