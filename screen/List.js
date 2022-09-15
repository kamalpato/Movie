import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function List() {
  return (
    <View style={{alignItems: 'center', marginTop: 30, marginHorizontal: 20}}>
       <Image
        source={require('../assets/Error.png')}
        style={styles.posterImage}
    />
      <Text>Get actor from TMDB is error</Text>
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