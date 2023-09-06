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
          style={styles.blue_shadow}
          className='absolute px-[7px] shadow-lg w-full bg-cyan-950 bottom-4 flex flex-row justify-between items-center'
        >
        <Price_Box title={'کرایه'} price={'123,234,245'}/>
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
        <Image_Box img={require('../assets/post/pexels-expect-best-323775.jpg')}/>
        <Image_Box img={require('../assets/post/pexels-alex-qian-2343468.jpg')}/>
        <Image_Box img={require('../assets/post/pexels-selenic-moon-3767442.jpg')}/>
        <Image_Box img={require('../assets/post/pexels-photo-3701434.jpeg')}/>
        <Image_Box img={require('../assets/post/pexels-pixabay-221457.jpg')}/>
        <Image_Box img={require('../assets/post/pexels-pixabay-259588.jpg')}/>
        </ScrollView>
    <Title title={"مشخصات"}/>
    <View
        className="flex py-[20px] flex-row items-center justify-center"
        style={{gap:8}}
    >
        <Options icon={'https://img.icons8.com/color-glass/48/bed.png'} detail={"4 خواب"}/>
        <Options icon={'https://img.icons8.com/parakeet/48/floor-plan.png'} detail={"500 متر"}/>
        <Options icon={'https://img.icons8.com/fluency/48/parking-and-1st-floor.png'} detail={"طبقه 4"}/>
    </View>
    <Title title={"ویژگی ها"}/>
    <View
        className="flex flex-wrap p-[10px] py-[20px] flex-row items-center justify-center"
        style={{gap:8}}
    >
        {options.map(item =>{
            return(
            <Options
                key={item.title}
                detail={item.title} 
                icon={item.url}/>
            )
        })}
    </View>
    <Title title={"توضیحات"}/>
    <Text
        style={{fontFamily:'IranianSans'}}
        className='text-cyan-950 font-bold px-[10px] py-[20px] text-[12px]'
    >
        تمام امکانات مدرن و ساختمان تازه تاسیس میباشد.
    </Text>
    <Title title={"موقعیت مکانی"}/>
        <View
            style={styles.blue_shadow}
            className='w-11/12 m-auto mt-[20px] shadow-md'
        >
            <Image
                className='w-full rounded-lg h-[200px] bg-cyan-950'
                source={require('../assets/img/basic.jpg')}
            />
        </View>
        <View
        className='w-full py-[20px] flex flex-row justify-evenly items-center'
          >
         <Contact title={"برقراری تماس"} icon={"call-outline"} bg_color={'rgb(153 27 27)'} color={"#fff"}/>
         <Contact title={"ارسال پیام"} icon={"chatbubbles-outline"} bg_color={'rgb(31 41 55)'} color={"#fff"}/>
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
     blue_shadow:{
        shadowColor:'rgb(8 145 178)'
     },
     red_shadow:{
        shadowColor:'rgb(153 27 27)'
     },
})


// ------------------------------------ more modules

const options = [
    {title:'خانه هوشمند',id:'1',url:'https://img.icons8.com/fluency/48/smart-home-connection.png'},
    {title:'سیستم سرمایش',id:'2',url:'https://img.icons8.com/color/48/fan.png'},
    {title:'درب برقی',id:'3',url:'https://img.icons8.com/color-glass/48/garage-door.png'},
    {title:'باربیکیو',id:'4',url:'https://img.icons8.com/color/48/grill.png'},
    {title:'استخر',id:'5',url:'https://img.icons8.com/color/48/swimming-pool.png'},
    {title:'پارکینگ',id:'6',url:'https://img.icons8.com/fluency/48/parking.png'},
    {title:'کف پوش',id:'7',url:'https://img.icons8.com/cotton/64/wooden-floor.png'},
    {title:'آسانسور',id:'8',url:'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-elevator-wayfinding-flaticons-flat-flat-icons.png'},
    {title:'لابی',id:'9',url:'https://img.icons8.com/color/48/waiting-room.png'},
    {title:'نگهبان',id:'10',url:'https://img.icons8.com/color/48/security-guard.png'},
    {title:'بالکن',id:'11',url:'https://img.icons8.com/fluency/48/balcony.png'},
    {title:'دوربین حفاظتی',id:'12',url:'https://img.icons8.com/color/48/ptz-camera.png'},
    {title:'سیستم گرمایش',id:'13',url:'https://img.icons8.com/fluency/48/heating-radiator.png'},
    {title:'کابینت MDF',id:'14',url:'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Cabinets-interior-smashingstocks-flat-smashing-stocks-6.png'},
    {title:'دسترسی به بیمارستان',id:'15',url:'https://img.icons8.com/emoji/48/hospital-emoji.png'},
    {title:'دسترسی به فروشگاه',id:'16',url:'https://img.icons8.com/color/48/shop.png'},
    {title:'دسترسی به آتشنشانی',id:'17',url:'https://img.icons8.com/emoji/48/fire-engine.png'},
    {title:'دسترسی به مدرسه',id:'18',url:'https://img.icons8.com/fluency/48/school.png'},
    {title:'دسترسی به نانوایی',id:'19',url:'https://img.icons8.com/external-itim2101-flat-itim2101/64/external-bakery-store-itim2101-flat-itim2101.png'},
    {title:'دسترسی به حمل و نقل عمومی',id:'20',url:'https://img.icons8.com/color/48/ground-transportation.png'},
    {title:'دسترسی به آرایشگاه',id:'21',url:'https://img.icons8.com/color/48/barbershop.png'},
]

const Image_Box = ({img})=>{
    return(
        <View
            style={styles.blue_shadow}
            className='w-[150px] relative shadow-sm overflow-hidden h-[150px] rounded-[20px]'
        >   
            <View
                style={styles.blue_shadow}
                className="w-full h-[5px] absolute shadow-sm  top-2 z-10 bg-white "
            ></View>
            <View
                style={styles.blue_shadow}
                className="w-full h-[10px] absolute  bottom-1 z-10 bg-black/25 "
            ></View>
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
            style={{gap:8}}
            className='flex flex-row p-[7px] justify-center items-center'
            >
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-slate-100 font-bold pr-[3px] text-[16px]'
                >{price}<Text className="text-[8px] text-slate-300 absolute"> تومان</Text>
            </Text>
            <Text
                style={{fontFamily:'IranianSans'}}
                className='text-slate-100 font-bold text-[12px]'
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
          <View 
            style={styles.blue_shadow}
            className="flex-grow h-[3px] shadow-sm bg-cyan-600"></View>
          <Text
            style={{fontFamily:'IranianSans'}}
            className='text-cyan-700 Text-[14px]'
          >
            {title}
          </Text>
          <View 
            style={styles.blue_shadow}
            className="w-[15px] h-[3px] bg-cyan-600"></View>
        </View>
    )
}


const Options = ({detail,icon})=>{
    return(
        <View
        style={[{gap:4},styles.blue_shadow]}
        className="flex flex-row items-end justify-center shadow-sm bg-cyan-600 p-[4px] rounded-[5px]"
    >
        <Text
            style={{fontFamily:'IranianSans'}}
            className='text-white text-[12px]'
        >{detail}</Text>
        <Image 
            className="w-[25px] h-[25px]"
            resizeMode="contain"
            source={{uri:`${icon}`}}
            />
    </View>
    )
}

const Contact =({title,icon,color,bg_color})=>{
    return(
        <View
            style={[{gap:5,backgroundColor:bg_color},styles.red_shadow]}
            className='py-[10px] flex shadow-md flex-row items-center justify-center px-[20px] bg-slate-100 rounded-md'
         >
             <IonIcon name={icon} color={color} size={22}/>
            <Text
                style={{fontFamily:'IranianSans',color:color}}
                className="font-bold text-[18px]"
            >{title}</Text>
         </View>
    )
}


export default SliceApp;
