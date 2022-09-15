import React, { useEffect } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Genres from '../Genres';
import Rating from '../Rating';
import Rate from '../components/Rate';
import axios from 'axios';

export default function Detail({navigation, route}) {
    console.log('route',route)
const item = route.params.data;

useEffect(()=>{getDetail()},[])

const getDetail = async (data) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${parseInt(762504, 10)}?api_key=49ddced957cc67790c327ee19cbcb1d&language=en-US`);
    } catch (error) {
      console.log('errror home', {...error});
  };
}
  return (
    <View style={{alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
      <Image
        source={{ uri: item.poster }}
        style={styles.posterImage}
    />
    <Text>{item.title}</Text>
    <Text>{item.releaseDate}</Text>
    <Rating rating={item.rating} />
    <Genres genres={item.genres} />
    <Text style={{ fontSize: 12 }} numberOfLines={3}>
    {item.description}
    </Text>
    <Text style={{marginTop: 30}}>Get actor from TMDB is error</Text>
    <Text style={{ fontSize: 12,  }} numberOfLines={3}>
        Your Rate:
    </Text>
    <Rate />
    </View>
  )
}

const styles = StyleSheet.create({
    posterImage: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
      },
})