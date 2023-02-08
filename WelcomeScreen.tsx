import React from 'react';
import CustomText from '../components/CustomText';
import Button from '../components/Button';
import {ScaleHeight, ScaleWidth} from '../utils/scale';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../res/colors';
import LinearGradient from 'react-native-linear-gradient';
import {fontScale} from '../utils/scale';
import Tower from '../../assets/images/Tower.svg';
import MTSF from '../../assets/images/MTSF.svg';

// interface IProps {
// 	navigation: () => void;
// }
const WelcomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.bgStyle}>
      <ImageBackground
        source={require('../../assets/images/Pattern.png')}
        style={styles.bg}>
        <Tower />
        <MTSF />
        <LinearGradient
          colors={['rgba(0, 169, 201, 1)', 'rgba(0, 169, 201, 0)']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
          style={styles.blockLive}>
          <View style={styles.innerLive}>
            <CustomText textType="NoahRegular" style={styles.textLive}>
              Live
            </CustomText>
          </View>
        </LinearGradient>

        <CustomText textType="NoahRegular" style={styles.welcomeText}>
          Welcome to Millennium Tower San Francisco
        </CustomText>
        <CustomText textType="regular" style={styles.descText}>
          LIVE provides you with access to limitless services at the touch of a
          button.
        </CustomText>
        <Button
          onPress={() => navigation.navigate('CreateAccount')}
          text={'Get Started'}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}>
          <CustomText textType="bold" style={styles.buttonText}>
            I already have an account
          </CustomText>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 0,
  },

  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  towerImage: {
    width: 21 * ScaleWidth,
    height: 247 * ScaleHeight,
  },

  bgStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.COMMON_BACKGROUND,
  },

  descText: {
    fontSize: (16 * ScaleHeight) / fontScale,
    color: colors.WHITE,
    textAlign: 'center',
    marginHorizontal: 50 * ScaleWidth,
    width: '90%',
  },
  welcomeText: {
    fontSize: (24 * ScaleHeight) / fontScale,
    color: colors.WHITE,
    textAlign: 'center',
    width: '80%',
  },
  button: {
    justifyContent: 'center',
    width: 305 * ScaleWidth,
    height: 60 * ScaleHeight,
    borderRadius: 14,
    backgroundColor: colors.BLOCKS_BACKGROUND,
  },
  buttonText: {
    alignSelf: 'center',
    color: colors.WHITE,
    fontSize: (14 * ScaleHeight) / fontScale,
  },
  blockLive: {
    justifyContent: 'center',
    width: 115 * ScaleWidth,
    height: 30 * ScaleHeight,
    borderRadius: 6,
  },
  textLive: {
    alignSelf: 'center',
    color: colors.MTSF_CORP,
    fontSize: (18 * ScaleHeight) / fontScale,
    textTransform: 'uppercase',
    letterSpacing: 10,
  },

  innerLive: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 113 * ScaleWidth,
    height: 30 * ScaleHeight - 2,
    backgroundColor: colors.COMMON_BACKGROUND,
    borderRadius: 6,
  },
});

export default WelcomeScreen;
