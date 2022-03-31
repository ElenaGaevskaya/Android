import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/23.jpg')} />
        <Text style={[styles.paragraph]}>Дела любовные. Самые романтичные книжные новинки</Text>
        <Text style={[styles.textread]}>Переосмысление сказки «Спящая красавица» в романе Джейн Йолен; очаровательная и смешная история любви в дебютном романе Рэйчел Уинтерс; захватывающая история межрасовых отношений в книге Мэлори Блэкман; сентиментальная проза Ребекки Сёрл и атмосферный роман Дженнифер Робсон, действия которого разворачиваются во времена Первой мировой войны. Рассказываем о главных книжных новинках посвященных самой вечной теме — теме любви. </Text>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textread: {
    margin: 14,
    marginTop: -9,
    fontSize: 14,
    textAlign: 'left'
  },
  paragraph: {
    margin: 24,
    marginTop: 20,
    right: 35,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left'
  },
  logo: {
    height: 220,
    width: 350,

  },
});
export default LotsOfStyles;

