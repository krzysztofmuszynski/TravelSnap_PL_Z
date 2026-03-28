import {Image} from 'expo-image';
export default function Star({index}: any){
    return(
        <Image
            key={index}
            source={require('../assets/images/star.svg')}
            style={{width: 20, height: 20}}
            contentFit="contain"
        />
    )
}