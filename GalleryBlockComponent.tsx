import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';

import CustomText from '@/utils/CustomText';
import {ScaleHeight, ScaleWidth, fontScale} from '@/utils/scale';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import colors from '@/utils/color';

const GalleryBlockComponent = ({...item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, selectedImage] = useState('');
  const imageDisplayHandler = i => {
    setModalVisible(true);
    selectedImage(i);
  };

  const RenderItem = ({item}) => (
    <View style={styles.picWrapper}>
      <FastImage
        style={{
          width: 326 * ScaleWidth,
          height: 328 * ScaleHeight,
        }}
        source={{uri: item}}
      />
    </View>
  );

  const renderItem3 = ({item}: any) => (
    <TouchableOpacity onPress={() => imageDisplayHandler(item)}>
      <View style={styles.picWrapper}>
        <FastImage
          style={{
            width: 74 * ScaleWidth,
            height: 72 * ScaleHeight,
          }}
          source={{uri: item}}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {item.gallery_type === 'slider' ? (
        <>
          <FlatList
            nestedScrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={item.gallery}
            renderItem={RenderItem}
          />
          <CustomText style={styles.detaileStyles} textType="Rubik-Italic">
            Details of the above Pictures.
          </CustomText>
        </>
      ) : (
        <>
          <CustomText textType="Rubik-Bold" style={styles.listStyles}>
            Gallery Title
          </CustomText>
          <FlatList
            nestedScrollEnabled
            columnWrapperStyle={{justifyContent: 'center'}}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={item.gallery}
            renderItem={renderItem3}
          />
          <CustomText style={styles.detaileStyles} textType="Rubik-Italic">
            Details about the above Gallery.
          </CustomText>
        </>
      )}

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        style={styles.modalWrapper}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <FastImage
              style={{
                width: 326,
                height: 328,
              }}
              source={{uri: image}}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  videotextStyle: {
    color: colors.NAVY_BLUE,
    fontSize: (12 * ScaleHeight) / fontScale,
  },
  modal: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 14,
    padding: 24,
  },

  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: '#F5FCFF',
  },
  otherSectionLine: {
    alignSelf: 'flex-end',
    width: 158 * ScaleWidth,
    height: 1 * ScaleHeight,
    backgroundColor: '#00DAEE',
    marginBottom: 9 * ScaleHeight,
  },
  otherSectionLine2: {
    alignSelf: 'flex-end',
    width: 74 * ScaleWidth,
    height: 1 * ScaleHeight,
    backgroundColor: '#00DAEE',
    marginBottom: 9 * ScaleHeight,
  },
  otherSectionBlock: {
    width: 326 * ScaleWidth,
    alignSelf: 'center',
    marginBottom: 16 * ScaleHeight,
  },
  otherSectionText: {
    alignSelf: 'flex-start',
    color: '#00DAEE',
    fontSize: (37 * ScaleHeight) / fontScale,
  },

  FooterYellowStyles: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 48 * ScaleHeight,
    marginTop: 36 * ScaleHeight,
    color: '#FFEA00',
    fontSize: (18 * ScaleHeight) / fontScale,
  },
  footer: {
    width: '100%',
    backgroundColor: '#003366',
    paddingBottom: 144 * ScaleHeight,
  },
  relatedCategoryText: {
    color: '#E6FFFF',
    width: 180 * ScaleWidth,
    marginLeft: 17 * ScaleWidth,
    marginTop: 17 * ScaleHeight,
  },
  relatedcategoryStyles: {
    width: 110 * ScaleWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 17 * ScaleWidth,
    marginTop: 17 * ScaleWidth,
  },

  relatedArticlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 24 * ScaleWidth,
    width: '100%',
    backgroundColor: '#003366',
    marginBottom: 18 * ScaleHeight,
  },
  yellowStyles: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 48 * ScaleHeight,
    marginTop: 100 * ScaleHeight,
    color: '#FFEA00',
    fontSize: (18 * ScaleHeight) / fontScale,
  },
  whiteBlock: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  blueLogoStyle: {
    width: 326 * ScaleWidth,
    height: 80 * ScaleHeight,
  },
  blueLogo: {
    position: 'absolute',
    right: 0 * ScaleWidth,
    top: 24 * ScaleHeight,
  },
  lowText1: {
    color: '#003366',
    fontSize: 12,
  },
  lowText2: {
    color: '#003366',
    fontSize: (12 * ScaleHeight) / fontScale,
    marginBottom: 24 * ScaleHeight,
  },
  lowTextWrapperStyles: {
    width: 326 * ScaleWidth,
    marginLeft: 24 * ScaleWidth,
    marginBottom: 46 * ScaleHeight,
  },
  listWrapper: {
    marginBottom: 98 * ScaleHeight,
  },

  itemsLine: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 8 * ScaleHeight,
    width: 326 * ScaleWidth,
    backgroundColor: '#003366',
    height: 1 * ScaleHeight,
  },
  itemStyle: {
    color: '#003366',
    width: 326 * ScaleWidth,
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 16 * ScaleHeight,
    marginLeft: 24 * ScaleWidth,
  },
  listStyles: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 20 * ScaleHeight,
    color: '#003366',
    fontSize: (18 * ScaleHeight) / fontScale,
  },
  detaileStyles: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 100 * ScaleHeight,
    color: '#003366',
    fontSize: (12 * ScaleHeight) / fontScale,
    width: 326 * ScaleWidth,
  },
  picWrapper: {
    marginBottom: 16 * ScaleHeight,
    marginLeft: 5 * ScaleWidth,
    marginRight: 5 * ScaleWidth,
    // width: 326,
    // height: 328,
  },
  anyTextSlyles: {
    color: '#003366',
    position: 'absolute',
    fontSize: (18 * ScaleHeight) / fontScale,
    width: 326 * ScaleWidth,
    lineHeight: 24 * ScaleHeight,
    left: 16 * ScaleWidth,
  },
  categoryStyles: {
    top: 8 * ScaleHeight,
    position: 'absolute',
  },
  anyTextBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 326 * ScaleWidth,
    marginBottom: 100 * ScaleHeight,
  },
  videoWrapper: {
    marginLeft: 20 * ScaleWidth,
    marginBottom: 92 * ScaleHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 326 * ScaleHeight,
    height: 192 * ScaleHeight,
  },
  backgroundVideo: {
    marginLeft: 20 * ScaleWidth,
    marginBottom: 92 * ScaleHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 326 * ScaleWidth,
    height: 192 * ScaleHeight,
  },
  linkText: {
    width: 326 * ScaleWidth,
    fontSize: (18 * ScaleHeight) / fontScale,
    color: '#00DAEE',
    marginBottom: 94 * ScaleHeight,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  subText: {
    width: 326 * ScaleWidth,
    fontSize: (31 * ScaleHeight) / fontScale,
    color: '#003366',
    marginBottom: 55 * ScaleHeight,
    alignSelf: 'center',
    letterSpacing: 1 * ScaleWidth,
    lineHeight: 45 * ScaleHeight,
  },
  linesStyle: {
    alignSelf: 'flex-start',
    marginLeft: 190 * ScaleWidth,
    // marginTop: -10,
    marginBottom: 60 * ScaleHeight,
    width: 162 * ScaleWidth,
    heght: 2 * ScaleHeight,
  },
  aboutMemberTitle: {
    fontSize: (12 * ScaleHeight) / fontScale,
    color: '#003366',
    marginBottom: 8 * ScaleHeight,
  },
  aboutMemberText: {
    fontSize: (12 * ScaleHeight) / fontScale,
    width: 160 * ScaleWidth,
    color: '#003366',
    marginBottom: 38 * ScaleHeight,
  },
  aboutMemberBlock: {
    paddingTop: 8 * ScaleHeight,
    width: 158 * ScaleWidth,
    height: 96 * ScaleHeight,
    marginLeft: 10 * ScaleWidth,
    borderBottomColor: '#00DAEE',
    borderBottomWidth: 1,
    borderTopColor: '#00DAEE',
    borderTopWidth: 1,
  },
  anyBlockRight: {
    width: 242 * ScaleWidth,
    height: 96 * ScaleHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -10 * ScaleWidth,
    zIndex: -6,
  },
  anyBlock: {
    flexDirection: 'row',
    width: 326 * ScaleWidth,
    height: 96 * ScaleHeight,
    alignSelf: 'flex-end',
    marginBottom: 56 * ScaleHeight,
  },
  // pageTextStyle: {
  //   fontSize: (18 * ScaleHeight) / fontScale,
  //   width: 326 * ScaleWidth,
  //   alignSelf: 'center',
  //   color: '#003366',
  //   marginBottom: 43 * ScaleHeight,
  // },
  // subTitleWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: 327 * ScaleWidth,
  //   //  height: 65,
  // },
  // subTitleStyle: {
  //   marginTop: 22 * ScaleHeight,
  //   fontSize: (18 * ScaleHeight) / fontScale,
  //   width: 300 * ScaleWidth,
  //   marginBottom: 24 * ScaleHeight,
  //   color: '#003366',
  // },
  loremText: {
    fontSize: (22 * ScaleHeight) / fontScale,
    marginLeft: 24 * ScaleWidth,
    width: 328 * ScaleWidth,
    marginBottom: 70 * ScaleHeight,
    color: '#003366',
  },
  articleWrapper: {
    width: '100%',
    backgroundColor: '#E6FFFF',
    paddingTop: 46 * ScaleHeight,
  },
  headlineWrapper: {
    width: 326 * ScaleWidth,
    marginLeft: 24 * ScaleWidth,
    // height: 188,
    marginBottom: 100 * ScaleHeight,
  },
  headlineText: {
    position: 'absolute',
    width: 320 * ScaleWidth,
    top: 50 * ScaleHeight,
    left: -170 * ScaleWidth,
    fontSize: (37 * ScaleHeight) / fontScale,
    color: '#E6FFFF',
    lineHeight: 46 * ScaleHeight,
  },

  scrollWrapper: {
    marginTop: 0 * ScaleHeight,
  },
  neptunWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300 * ScaleWidth,
    top: 47 * ScaleHeight,
    left: 24 * ScaleWidth,
  },
  goBackStyle: {
    alignSelf: 'center',
  },
  logoWrapper: {
    alignSelf: 'center',
  },
  upperLine: {
    height: 1 * ScaleHeight,
    width: 158 * ScaleWidth,
    backgroundColor: '#fff',
    marginLeft: 180 * ScaleWidth,
  },
  // Lines6Styles: {

  // },
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    with: 326 * ScaleWidth,
    // height: 242 * ScaleHeight,
    marginLeft: 24 * ScaleHeight,
    marginRight: 24 * ScaleWidth,
    marginTop: 320 * ScaleHeight,
    marginBottom: 48 * ScaleHeight,
  },
  titleWrapper: {
    marginTop: 8 * ScaleHeight,
    marginBottom: 16 * ScaleHeight,
  },
  categoryStyle: {
    fontSize: (10 * ScaleHeight) / fontScale,
    color: '#FFEA00',
  },
  dateStyle: {
    fontSize: (12 * ScaleHeight) / fontScale,
    color: '#fff',
  },
  scroll: {
    backgroundColor: 'blue',
    height: 90 * ScaleHeight,
    marginBottom: 30 * ScaleHeight,
  },
  bg: {
    marginTop: -4 * ScaleHeight,
    width: 375 * ScaleWidth,
    height: 811 * ScaleHeight,
  },

  header: {
    zIndex: 10,
    height: 144 * ScaleHeight,
    // elevation: 10,
    position: 'absolute',
    top: 0 * ScaleHeight,
    left: 0 * ScaleWidth,
    bottom: 0 * ScaleHeight,
    right: 0 * ScaleWidth,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  txt: {
    fontSize: (24 * ScaleHeight) / fontScale,
    color: '#fff',
  },
  ttl: {
    width: 130 * ScaleWidth,
    marginTop: 32 * ScaleHeight,
    marginLeft: 20 * ScaleWidth,
    fontSize: (24 * ScaleHeight) / fontScale,
  },
});

export default GalleryBlockComponent;
