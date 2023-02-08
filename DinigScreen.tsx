import React from 'react';
import FastImage from 'react-native-fast-image';
import {getDining} from '../../API/coreServices';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import HeaderBackButton from '../../components/HeaderBackButton';
import colors from '../../res/colors';
import {fontScale, ScaleHeight, ScaleWidth} from '../../utils/scale';
import HFRenderComponent from '../HealthFitness/HFRenderComponent';
import DiningTitle from '../../../assets/images/DiningTitle.svg';
import RenderDiningComponent from './RenderDiningComponent';
import {chefText} from './diningData';
import {feedbackText} from './diningData';
import {getServices} from '../../API/services';
import {useQuery} from 'react-query';
import {Service} from '../../types/service';

// в отдельном файле в навигации, прописываются все названия экранов
enum Routes {
  DiningScreen = 'DiningScreen',
  HomeScreen = 'HomeScreen',
}

// в папку навигации отдельным файликом кладется, описываются все экраны и типы параметров, которые на них пересылаются
type RootStackParamList = {
  [Routes.DiningScreen]: undefined;
  [Routes.HomeScreen]: undefined;
  Profile: {userId: string}; // пример передачи типов параметров на экран
  Feed: {sort: 'latest' | 'top'} | undefined;
};

type NavProps = NativeStackNavigationProp<
  RootStackParamList,
  Routes.DiningScreen
>;
type RouteProps = RouteProp<RootStackParamList, Routes.DiningScreen>;

interface IProps {
  navigation: NavProps; //теперь навигация знает, на какие экраны можно переходить и какие они ждут параметры
  route: RouteProps; //теперь мы знаем параметры, которые можно получить из route.params
}

const DiningScreen = ({navigation}: IProps) => {
  // const [services, setServices] = useState([]);
  const backButton = () => {
    navigation.navigate(Routes.HomeScreen);
  };

  const {data} = useQuery<Service[]>('dining', async () => {
    return await getServices('dining');
  });
  const {data: diningData} = useQuery('diningPage', async () => {
    return await getDining();
  });

  console.log('diningData', diningData);

  const dining = diningData || [];
  const services = data || [];
  return (
    <View style={styles.bgStyle}>
      <HeaderBackButton navText={'dining'} onPress={backButton} />
      <ScrollView>
        {services.map(item => (
          <HFRenderComponent
            item={item}
            onPress={() =>
              navigation.navigate('DiningRoomReservationsScreen', {
                title: item.name,
                id: item.id,
              })
            }
          />
        ))}

        <ImageBackground
          style={styles.bgDining}
          source={require('../../../assets/images/CORE-Hero.png')}>
          <View style={styles.svgWrapper}>
            <DiningTitle />
          </View>
          <CustomText style={styles.diningText} textType="regular">
            Bold flavors and a healthy dose of attitude are on the menu at the
            restaurant conveniently located on the ground floor of the Millenium
            Tower San Francisco.
          </CustomText>
        </ImageBackground>
        <CustomText style={styles.anyTitle} textType="regular">
          Bringing the Heat to Millennium
        </CustomText>
        <CustomText style={styles.diningIntro} textType="regular">
          International Smoke infuses the way we gather, share, and experience
          food with global flair, recognizing that fire is the start of all
          cooking and every country shares this culinary spark.
        </CustomText>
        {dining.map(item => (
          <RenderDiningComponent item={item} />
        ))}

        <Image
          height={155}
          style={styles.imageStyle}
          source={require('../../../assets/images/ChefImage.png')}
        />

        <View style={styles.dinningBg}>
          <CustomText style={styles.chefTitle} textType="regular">
            About Chef Michael Mina
          </CustomText>
          {chefText.map(txt => (
            <CustomText style={styles.chefAboutText} textType="regular">
              {txt.txt}
            </CustomText>
          ))}
          {/* </ImageBackground> */}
        </View>

        <View style={styles.imageWrapper}>
          <ImageBackground
            height={155}
            style={styles.imageStyle}
            source={require('../../../assets/images/diningBottom.png')}>
            <View style={styles.popup}>
              <ImageBackground
                style={styles.popupBackground}
                source={require('../../../assets/images/popupPattern.png')}>
                <CustomText style={styles.feedbackText} textType="regular">
                  {feedbackText}
                </CustomText>
                <View style={styles.feedbackAvatarWrapper}>
                  <FastImage
                    style={{
                      width: 36 * ScaleWidth,
                      height: 36 * ScaleHeight,
                      borderRadius: 18,
                      marginRight: 12 * ScaleWidth,
                    }}
                    source={require('../../../assets/images/feedbackAvatar.png')}
                  />
                  <CustomText style={styles.feedbackName}>
                    Ayesha Curry
                  </CustomText>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.empty} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.COMMON_BACKGROUND,
  },
  feedbackText: {
    color: colors.WHITE,
    marginHorizontal: 20 * ScaleWidth,
    marginVertical: 20 * ScaleHeight,
    textAlign: 'center',
  },

  feedbackName: {
    color: colors.WHITE,
    fontSize: (15 * ScaleHeight) / fontScale,
    alignSelf: 'center',
  },

  feedbackAvatarWrapper: {
    flexDirection: 'row',
    width: 160 * ScaleWidth,
    alignSelf: 'center',
  },

  popupBackground: {
    width: '100%',
    height: '100%',
  },
  empty: {
    height: 200 * ScaleHeight,
  },

  popup: {
    width: 335 * ScaleWidth,
    height: 237 * ScaleHeight,
    backgroundColor: colors.BLOCKS_BACKGROUND,
    alignSelf: 'center',
    marginTop: 115 * ScaleHeight,
    marginBottom: 40 * ScaleHeight,
    borderRadius: 14,
  },

  dinningBg: {
    width: '100%',
    backgroundColor: colors.BLOCKS_BACKGROUND,
    marginBottom: 40 * ScaleHeight,
  },
  imageWrapper: {},
  chefAboutText: {
    color: colors.WHITE,
    fontSize: (15 * ScaleHeight) / fontScale,
    marginBottom: 35 * ScaleHeight,
    marginLeft: 20 * ScaleWidth,
    marginRight: 20 * ScaleWidth,
  },
  chefTitle: {
    fontSize: 17,
    color: colors.WHITE,
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginTop: 20 * ScaleHeight,
    marginBottom: 20 * ScaleHeight,
  },
  bg: {},
  imageStyle: {
    width: '100%',
    height: 155 * ScaleHeight,
  },
  diningText: {
    width: 335 * ScaleWidth,
    color: colors.WHITE,
    fontSize: (15 * ScaleHeight) / fontScale,
    alignSelf: 'center',
    marginBottom: 20 * ScaleHeight,
    textAlign: 'center',
  },
  anyTitle: {
    color: colors.WHITE,
    fontSize: (17 * ScaleHeight) / fontScale,
    textTransform: 'uppercase',
    marginBottom: 15 * ScaleHeight,
    marginLeft: 20 * ScaleWidth,
  },
  diningIntro: {
    width: 335 * ScaleWidth,
    color: colors.WHITE,
    fontSize: (15 * ScaleHeight) / fontScale,
    marginBottom: 20 * ScaleHeight,
    marginLeft: 20 * ScaleWidth,
  },
  bgDining: {
    marginBottom: 40 * ScaleHeight,
  },
  svgWrapper: {
    marginTop: 20 * ScaleHeight,
    alignSelf: 'center',
    marginBottom: 25 * ScaleHeight,
  },
  titleText: {
    fontSize: (24 * ScaleHeight) / fontScale,
    marginBottom: 20 * ScaleHeight,
    marginLeft: 15 * ScaleWidth,
    color: colors.WHITE,
  },
});

export default DiningScreen;
