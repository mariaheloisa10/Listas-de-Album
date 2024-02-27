import { Text, View, StyleSheet  } from 'react-native'

export function Album({ albunName, year, musics }){
  return(
      <View>
        <Text style={styles.albunName}>{albunName} {year}</Text>
        <Text style={styles.musics}>{musics}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    albunName: {
     marginTop: 10,
     marginLeft: 10,
     fontSize: 15,
     fontWeight: 700,
    },
    musics: {
     marginLeft: 10
    }
})