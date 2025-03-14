import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import BottomHomeSvg from '../assets/svg/BottomHomeSvg.tsx';
import YellowArrowSvg from '../assets/svg/YellowArrowSvg.tsx';

const storyData = [
  {
    title: "The Concept of Dharma in the Ramayana",
    text: "The Ramayana intricately weaves the concept of dharma, or righteousness, into its narrative, illustrating how characters navigate their moral obligations. Dharma is portrayed as a guiding principle that dictates one's duties towards family, society, and the cosmos. Rama embodies ideal dharma, adhering to his father's wishes despite personal sacrifice, while Sita exemplifies loyalty and virtue even in the face of adversity. The epic emphasizes that dharma is not a rigid set of rules but a dynamic force that requires discernment and adaptability. Through the trials faced by Rama, Sita, and Lakshmana, the Ramayana teaches that upholding dharma may involve difficult choices, ultimately leading to spiritual growth and harmony in the universe.",
    background: "https://s3-alpha-sig.figma.com/img/cc08/2724/070dc29ca75dba6f85095ed71bd5146a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qs3B9bUHCGc51hkIe19aJbRnrknoEzVRjk31xeDXgALjLAvtr9aIV3Ec1O7Q-howUNsLZQ5P3qSy-l6wi11emkuEfgI85oHrrku15gMOcm3iLXBFGlo9VzzH5Aesq7jwdwAl~Rt48KCdzcFx2veapvXhpLbxUNiVGSYt1q8y~viRWBVj2a4BLvpK6BoCiQAe~fw1v0Okc1XZ99769YI1N29CYrfuQbbPNfi0RjHa~Ve0p5H1HCUYEYUP7S946mRJdP8Vuz255kEy0xaiGgjk3maWd~Pj43MaoDH0OsL4BmsIMIKjQD8gFPCcI0nY-f-3nbxArYn8gT~yFljMI08RgA__"
  },
  {
    title: "The Role of Devotion in the Ramayana",
    text: "Devotion, or bhakti, is a central theme in the Ramayana, epitomized by Hanuman's unwavering loyalty to Rama. His character illustrates the transformative power of devotion, showcasing how love for the divine can inspire extraordinary acts of courage and selflessness. The relationship between Rama and Hanuman serves as a model for devotees, emphasizing that true devotion transcends mere worship; it manifests in action and service. Sita's steadfast love for Rama also highlights the profound connection between devotion and resilience. The Ramayana teaches that through sincere devotion, individuals can overcome challenges and realize their higher selves, ultimately contributing to the restoration of dharma in the world.",
    background: "https://s3-alpha-sig.figma.com/img/378e/211b/46453444680799a3c1d7a07ea3b86db4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pYWtLpJOYsLU-8xFa1XScZoH1KEl3nQxZ9OxkinhWctdAjANm3b-zBClNIOJQNohoYBVJSSRNBSbEokmrKPwFiiSKVgF2qH1gng1TbvNKCBwu-CxS0CqnKetMI8op8aGvfsDgDEicyob3ylkBd4bowTJeCbhqN3lUtH5pxkP7vdn0~RCfRyrLpkqW4acnJBtZzo41f0FVT0yIOlCRMI36jfsuvonSN1r-mEelvqA8mmu4oxRV1Ot2nUdmR~SXUtUGNs8mqBCRAcsVNgRiJupPQ1daBk-8zxFQRL411LUNHzDRrgC1KB7oGK0db7~zE--xqXqbu7M0Qk4nn4jG7jX7g__"
  },
];

const StoryScreen3 = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % storyData.length);
  };

  const prevPage = () => {
    setPageIndex((prevIndex) => (prevIndex - 1) % storyData.length);
  };

  return (
    <ImageBackground
      source={{uri: storyData[pageIndex].background}}
      style={{flex: 1}}
      imageStyle={{opacity: 1}}>
      <Text
        style={{
          marginTop: 80,
          color: '#fff',
          marginLeft: 24,
          fontWeight: 'bold',
          fontSize: 24,
        }}>
        {storyData[pageIndex].title}
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 16,
          marginHorizontal: 24,
          marginTop: 14,
        }}>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 16,
          }}
          blurType="extraDark"
          blurAmount={5}
        />
        <Text style={{color: '#fff', fontSize: 16}}>
          {storyData[pageIndex].text}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 130,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#1C1C1C',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 20,
          }}>
          {pageIndex !== 0 &&
            <TouchableOpacity
              onPress={prevPage}
              style={{transform: [{scaleX: -1}]}}>
              <YellowArrowSvg />
            </TouchableOpacity>
          }

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BottomHomeSvg />
          </TouchableOpacity>

          {pageIndex !== storyData.length-1 &&
            <TouchableOpacity onPress={nextPage}>
              <YellowArrowSvg />
            </TouchableOpacity>
          }
        </View>
      </View>
    </ImageBackground>
  );
};

export default StoryScreen3;
