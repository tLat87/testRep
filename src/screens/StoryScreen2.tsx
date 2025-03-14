import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import BottomHomeSvg from '../assets/svg/BottomHomeSvg.tsx';
import YellowArrowSvg from '../assets/svg/YellowArrowSvg.tsx';

const storyData = [
  {
    title: "Rama",
    text: "Rama, the seventh avatar of the Hindu god Vishnu, is the central figure of the Ramayana. Born to King Dasharatha and Queen Kausalya in the kingdom of Ayodhya, Rama is revered for his unwavering adherence to dharma (duty/righteousness). He is celebrated as the ideal son, husband, and king. When his stepmother Kaikeyi demands his exile to fulfill her own desires, Rama accepts his fate with grace and honor, prioritizing his father's word over personal happiness. Accompanied by his devoted wife Sita and loyal brother Lakshmana, he ventures into the forest, where Sita is eventually abducted by the demon king Ravana. Rama's quest to rescue her showcases his bravery, strategic prowess, and deep love. His victory over Ravana not only restores Sita but also reestablishes dharma in the world. Upon returning to Ayodhya after 14 years, he is crowned king, symbolizing the triumph of good over evil.",
    background: "https://s3-alpha-sig.figma.com/img/a4c3/a7b0/588df6779fbff71b4599923503fa949e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gKNCZjUklqco6TBKEYeLTL3459jXGvpPUo7K2f8O3yU8yP0Lbn4ap-Phu3yY7L9e8ue5vFkDqWcLyhVQxrt0tAugrrjO6Xn2xo84vS0fjFe0Ho5iQq1fQdDe-bDFTvEvMgMeMT48Y5j-rLBgwr4P9E7bM2peOvXswVbzsc-tWJID~NoWelqcjs1byg4UDbjcH29dL0g38Eo5s0kDMt7fry8LcO0RK5wfyJw9BRoUQhxP5wGWVWhfUH3UHiuziNGK2QnD6Mi6-4M~nvw8C~1JiDCSE7AJKsELbnqNWtzoGFc43Qrk21YjH12WSUupIb6Uuz-iM2Jf7Vk8kG1xqAlYiA__"
  },
  {
    title: "Sita",
    text: "Sita, the beloved wife of Rama, is an embodiment of virtue and devotion in the Ramayana. She is the daughter of King Janaka of Mithila and is known for her beauty, strength, and unwavering loyalty. Sita’s life takes a dramatic turn when she marries Rama after winning a contest of strength involving a mighty bow. Her abduction by Ravana marks a pivotal moment in the epic, showcasing her resilience in adversity. Despite being held captive in Lanka, Sita remains steadfast in her love for Rama and resists Ravana's advances. Her trial by fire upon Rama's return serves as a testament to her purity and dedication. Sita's character symbolizes the ideal woman in Hindu culture—courageous, faithful, and self-sacrificing. Ultimately, her journey reflects the themes of love, duty, and righteousness that resonate throughout the Ramayana.",
    background: "https://s3-alpha-sig.figma.com/img/07d8/a90c/70b62b8772d5c8239d4e101c976b5e06?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D-fcQ4t46ZkdgOc1FZO-8q~p1AW-rxthOBbbBBgWBIqk6sbHv0MRF6Pes2z3-hM15y8ZSgekzrbyAWzKvpW1QLNBElSlz0M4V6vDHEpxsGOS2T2cfku6BYfIyx4pKzQpV-Yekxde-Mjoil60P2hc0nRNSA5JEW6qP~FVafg1xu2ixhQKQs-ZkH1x2~76JZihC68b7Nib0luymqvWYAkKK0UGDY8T7XGzjFEGybu3RMrKyVWD0LhmLTTwfas3kpW1PDo~y1JHgT9YVuBOdnH2UIkQ8bkaDOeQkBH3KUwpt1K~MpBkVOzALiYr0TpzllOYyFhV0CNeK9SZXiCReMM5mw__"
  },
  {
    title: "Hanuman",
    text: "Hanuman, the monkey god and devoted follower of Rama, plays a crucial role in the Ramayana. Born to Anjana and Kesari, he possesses immense strength, agility, and magical powers. Hanuman's devotion to Rama is unparalleled; he is often depicted as a symbol of loyalty and selfless service. His journey begins when he learns of Sita's abduction and vows to help Rama rescue her. With his ability to change size and shape, Hanuman leaps across the ocean to Lanka, delivering Rama's message to Sita and reassuring her of Rama's love. He becomes an integral part of Rama's army during the battle against Ravana, showcasing bravery and strategic intelligence. Hanuman's character embodies the ideals of devotion, courage, and humility. His unwavering faith in Rama inspires countless devotees and makes him one of the most revered figures in Hindu mythology.",
    background: "https://s3-alpha-sig.figma.com/img/18d4/8f62/ff46a8a02cd9bfbb170bf24139aaeed4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jmechz-4oO3BKeJ6Fu7-lB77JZks68MJWNV-srS9n-fEFr4k3AaXhOi0dRzFfmvaHDRG9RHwMVhE48B0GWACKFpFl9NBr1HqZAhooq6W1neMcHluwnycBGcu7kt9UV6NfphcBjEFEmMJ2Yd4OJy-eYaFPc8SIaIw4d9X5MHjUMEfYuAYbKe~nHqjdteunlYiDTA1pxngyHKycFEPFvB7L58~6WN3oFKuFmYsO9Ul4fAOjluo3WptMOwJQHaorZDLUepf06y-Sx3SG6be~dtp3SnsIRlZfwr57wMMvy1-sdOUpOk7ZX0RTp-IWRifNb0ipVn430RTya6kluppR-AtRQ__"
  },
  {
    title: "Ravana",
    text: "Ravana is the primary antagonist of the Ramayana and a complex character known for his intelligence, power, and devotion to Lord Shiva. As the king of Lanka, he is depicted as a ten-headed demon with extraordinary abilities and knowledge of various arts and sciences. Despite his formidable strengths, Ravana's arrogance leads him to kidnap Sita, believing he can possess her beauty and virtue. This act sets off a chain of events that culminate in his confrontation with Rama. While often portrayed as evil, Ravana is also shown as a devout devotee of Shiva and a wise ruler who seeks to protect his kingdom. His downfall serves as a reminder of how unchecked ambition and desire can lead to ruin. The battle between Rama and Ravana symbolizes the eternal struggle between good and evil, making Ravana a significant figure in Hindu mythology.",
    background: "https://s3-alpha-sig.figma.com/img/3669/6718/b927cbdb70db55ffb7d96ec8c301a35c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PsloqjPTsavpbqp18T0bqtBM0WgoTZWvCs-SeUaMVmo3anicmgkt46QTSwYXXTHvu0tYdIoS4QDuKD8UaALnziPILKTLaw-2QfUg5BqtQlMRKHVquMMsRieizcxyvIcn2CNy1RjdweJr4wPpyuRI-cKRC7hn3XeqgRYTI7AZBPMk8Wci5TsxiD11meprlQwfsZe3KkInZKQ-qcPuJkRyNneyT5epmuAVfmu4x4D9yn19m0-6cdstSH25zBgYajFsDAb7R72G8nRrQ-WUwXeyTV4V8qtshgQXS5kyzEYXlsxaEnnrmUM9hqlMwEUeF7pVT1WvzxhviPYOoqyQTTKsQw__"
  },
  {
    title: "Lakshmana",
    text: "Lakshmana, the younger brother of Rama, is a key figure in the Ramayana known for his loyalty and bravery. Born to King Dasharatha and Queen Sumitra, Lakshmana shares an unbreakable bond with Rama from childhood. When Rama is exiled to the forest, Lakshmana insists on accompanying him, showcasing his dedication and love for his brother. Throughout their journey, Lakshmana proves himself as a fierce warrior and protector of both Rama and Sita. \n" +
      "\n" +
      "His unwavering support during Sita's abduction and the subsequent battle against Ravana highlights his role as a loyal ally. Lakshmana also embodies qualities such as courage and selflessness; he often puts his brother's needs above his own. His character adds depth to the narrative, illustrating themes of familial duty and loyalty that resonate throughout the epic.",
    background: "https://s3-alpha-sig.figma.com/img/b2bc/f36f/2d377f3f490522cecf110776c61c2de1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B4uF3m85I8dfh~c7~MWbmyKLq~H~EMdMYkFcXKlDwz9aphhyv35umKWCy6wxF5Ky10lCF20JBUqtg7v27ippfn5bGilLMwVhAgv-J93Y6qK4Q1qbUEi01ERR7ZyTH-ldvny8o6V1nuAn9fgkT~fdj7T58BpEaSeQtfSfbIrLi1FMvVqjvfEPnOVdU8Ik-3hf6PLJFN2YHu5AMccriJmdm9emj3g68ItwVp2dQohSjtsLwmA9BeTfD4GLF7LBBAPA1RGq2BuEAW8hnVUMnAieioAIrmTSzjVZA07smVYO0lZlxTGm8Db1vr0-tMGoLF6XOy7AdX8yhbHJSgeMkQKfAg__"
  },

];

const StoryScreen2 = ({ navigation }) => {
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

export default StoryScreen2;
