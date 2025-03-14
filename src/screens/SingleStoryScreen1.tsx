import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import BottomHomeSvg from '../assets/svg/BottomHomeSvg.tsx';
import YellowArrowSvg from '../assets/svg/YellowArrowSvg.tsx';

const storyData = [
  {
    title: "Exile of Rama",
    text: "In this episode, Rama, the son of King Dasharatha, receives the news of his exile to the forest for 14 years. The king, succumbing to the manipulations of his wife Kaikeyi, is forced to send his beloved son into exile. Rama accepts this with nobility, understanding that duty is more important than personal desires. His wife Sita, full of determination, decides to follow him into the forest despite the dangers. Rama's brother Lakshmana also chooses to accompany them, demonstrating the strength of family bonds and loyalty. This moment becomes pivotal in their destinies and sets the tone for the entire story.",
    background: "https://s3-alpha-sig.figma.com/img/a485/220d/7fab609748e81afdd46688afb60fb0cc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dh5ULT9wpQsxMVPOHwxlMxNr~zTDc~N2URFqH3Kdp29SaU3-eo1cc~lbjaWzCO4sMbKYO2CFD~PMExjLr~JX-x2RsVWGiUbkxwUh8djphSW316xTadw0AjVyMYVknY3SPlARVrnsMyI8cir2RBBXFe92WaWDJzaXY7GxdGqwMgq9A2DYLT9ky6pEiqDGiZ8hDe4LBFSMiWs7jJBIfJL3Apa539WI89--vtKWLqhz0tWKBEECwwl7xssSCAdLt6AOeQBFAMc5ZSLzpEGiud6RrkYXW7CDvfQKhShE~clzI2Y3mW0bvldzBEEaM8Oz4X38njsF5OM7FUdcyxd2BZVyug__"
  },
  {
    title: "Abduction of Sita",
    text: "This episode depicts the moment when the demon Ravana abducts Sita through trickery. Left alone in the forest, Sita is tempted when Ravana, taking the form of a handsome Brahmin, deceitfully lures her. Unaware of his true nature, she falls into his trap. The abduction of Sita becomes a key event that prompts Rama to begin searching for his wife. This episode symbolizes the struggle between good and evil and establishes the foundation for all subsequent events.",
    background: "https://s3-alpha-sig.figma.com/img/152c/3a35/0550a505c6ae5c9a45ccb0781f421b38?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PeLK5YFh7UGrMsCc68e4L8KGiArfTp8XNQwVBtYaLNc3TkqEHnKJ0g93QuCKOmiYPm65SMQqTy1Ur4yc8hdkdM30Js9zsU29Q6nRdDO7G43HbjRdR-3Y81gE7mJyDbNYf-26kfLuQCACCC1yfgdulfXD~DDzLqmy6LItWeM0tJvUI7T~u~rMtxHtKLhTotMCwfhZS0D9qii3UJcpERJZJFsflD8kTXrSvI7dBCzCno8EbYbgKFuOgEYJ1QI7SikPrA99iMdpR0TTc1oN2~Z~FBxpqavVmvavR~Jqq17-Vcoq66Kv2Yp0AlQL47H6sbanS0ubuU2eIVtHfCGPXZq5-g__"
  },
  {
    title: "Friendship with Hanuman",
    text: "In this episode, the meeting between Rama and Hanuman occurs, who becomes his loyal friend and assistant. Hanuman, devoted to the deity Vayu, displays incredible strength and loyalty. He offers his help in finding Sita and becomes a symbol of fidelity and strength. Their friendship plays a key role in the upcoming battle against Ravana. Hanuman not only helps locate Sita but also inspires Rama and his army to fight for justice.",
    background: "https://s3-alpha-sig.figma.com/img/d5be/c5f9/9d86860ebab8ca6ebd9a58239422f9ef?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M4g1ZRycuefoj3ExL7VKOe9EvKYxlEG1mBDbHE5g7B08ang8VF--tj9llkPl0SBHv4dM78e8fHp5vbr~YAoLC74NcujO9EdwZfg1xyRir0oMJ1fuY8dNOL6bIGMMsa3T7NGhS18xH~sYrpgTHg0YGo7q1IjpvUm4gvezNBxJ2kDHI2GZvWWxZuca0pW2pf7Hm2q5EzXHTE2k8ObbVpOLpqlIJPYRmkZx6uqAsiXMDA1qDTuNJRU298h0Ma~6bqQzC4fKuP~pIT5PEU8ftbFS~HTdihZZeeEtsXewxXXwwuEt~5fNGV13iNcpXZy3ZWvlH75UEBxIfJc98UfovzvnDw__"
  },
  {
    title: "Battle with Ravana",
    text: "This episode illustrates the epic battle between Rama's army and Ravana's forces. The battle rages with incredible intensity: arrows fly, warriors clash, and Ravana's throne is visible in the background. Rama uses his archery skills while the monkey army supports him in fighting the demon. \n" +
      "\n" +
      "This battle symbolizes the struggle between good and evil and culminates in Rama's victory. The epic confrontation becomes the climax of the narrative and emphasizes the importance of loyalty and courage.",
    background: "https://s3-alpha-sig.figma.com/img/5ee2/0661/acca76d62aec43de478c448c71abcc16?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o6gMr0lIfIlCtn~08Doc35FliF8E7B4dlhVtH2A~cBRhRSAgWn9SN5LjzRFjPRQKTowzoVd9iALCPWZewcGLwKo4VShQUitRlm8dE8kHIyUiZoB7sH6mschPssyNaZ7pVuckfU3rH2qTfrWWHvTTls9yKuwTZu9u7q~4jPJJndT6so1pgOwV5HvNrwKAJVJvvelt5qsSyWSxpULbxxaXzMnN0l7uXzElRTB2lpXy6z22q7NKIbD-K0KluIiD35CX8Oj3lPgXS3dQTQL85roiiO2WSHwPHcnBUyC6v4cj7JwEwHC-NDwtUJaQWR9bTDQBzowtg~5hCSM9gc417uPqEw__"
  },
  {
    title: "Return to Ayodhya",
    text: "This episode depicts Rama's triumphant return to his hometown Ayodhya after a long exile. The townspeople greet him with joy: the streets are adorned with flowers and flags. After defeating Ravana,\n" +
      "\n" +
      "Rama returns home with Sita and Lakshmana. This return symbolizes the restoration of justice and order in the kingdom. The celebration of their return becomes the basis for the festival of Diwali, which marks the victory of light over darkness.",
    background: "https://s3-alpha-sig.figma.com/img/e3ac/a12f/dc494af4d0ab3ff95847962a9c931e28?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BsrNz3eGkIxmeAq4juQU46tHmUyLW~Z8j-WJOG3pGs04~XKgBv2H1baQbMWgf~OUlEyMXcueti5cIOnU5sJ8fGUktxRutEt4cTNBVEFpcgRYZCDUXr-WqxX7vm5rOO3cCInlm-DRlBJmuXIa7QXbFY0Q5yFs31pWH5KLjDPUL1U4DmgB5sbdNf50HnnKsXD6W9Gajo~VS~BsUBt~YQ-C9qf-g0TfGvW9sbHF0YlRIK-XibiEUipYyeCbZijHlKGy7HHq2jKw2cfZedY1T7u4df8DomX3C4GbdUVUcyA~dZop5~JQUBaHrAj3e-uaqL1ZlzG06lYtIJkpCnbmQKTxjw__"
  },
  {
    title: "Trial of Sita",
    text: "In this episode, Sita's trial of fidelity is depicted when she walks through fire. This moment is filled with drama: Sita shows resilience and determination in the face of doubt. The trial by fire symbolizes her loyalty and strength of spirit. \n" +
      "\n" +
      "Despite all obstacles, Rama accepts her back, affirming the power of their love and trust. This episode highlights the importance of fidelity and devotion in relationships.",
    background: "https://s3-alpha-sig.figma.com/img/7598/2d98/9df57efd8ca994772b186e450558d8ff?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UlEiTJx6Dpx6KE1wtEWN3MqTL5Cu5jDyPQ-3zCbIdiFksQVISRIDtou9rHewgI9JE5c-flc-aRPI~9zKrP1RHvXOy37snA4NTOcDER2hamcO65L5dG9nGQ-0iOHt~~-m7drQGdvqvk7BRtalNH0B8wE1B41PlQQg18Co4tCEx~0fJhoauLd1xcwTgkdW~SSZkVpERPSnk-JJM8cfPLbuBcsATrb~BUOoPPsHsK9k8M~WmjaP6YD8HsIEoHP8e7JaOew97VcdUq8wjQwGaswBfp7rVw-6DVKAjX7wZXPAgggfOEwmv6ODOrmoZoiwYwRr4ijmRc5tEktar66uUJ~GGg__"
  }
];

const StoryScreen1 = ({ navigation }) => {
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

export default StoryScreen1;
