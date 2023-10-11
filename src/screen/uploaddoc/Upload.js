// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Halaman Utama</Text>
//       <Button
//         title="Tombol 1"
//         onPress={() => navigation.navigate('Screen1')}
//       />
//       <Button
//         title="Tombol 2"
//         onPress={() => navigation.navigate('Screen2')}
//       />
//       <Button
//         title="Tombol 3"
//         onPress={() => navigation.navigate('Screen3')}
//       />
//     </View>
//   );
// };

// const Screen1 = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Halaman 1</Text>
//     </View>
//   );
// };

// const Screen2 = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Halaman 2</Text>
//     </View>
//   );
// };

// const Screen3 = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Halaman 3</Text>
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//         <Stack.Screen name="Screen3" component={Screen3} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import { View, Text } from 'react-native'
import React from 'react'

const Upload = ({navigation}) => {
    // const handleLogout = () =>{
    //     navigation.navigate('Login')
    // }
    return (
        <View>
            <Text>AAA</Text>
        </View>
        // <View>
        //     <Button title="Logout" onPress={handleLogout} />
        // </View>
    )
}

export default Upload