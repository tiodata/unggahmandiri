import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Upload from '../screen/uploaddoc/Upload';
import Bantuan from '../screen/bantuan/Bantuan';
import Settings from '../screen/settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../constant/routes';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  if (route.name === ROUTES.UPLOAD_TAB) {
    iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
  } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
    iconName = focused ? 'settings' : 'settings-outline';
  } else if (route.name === ROUTES.BANTUAN) {
    iconName = focused ? 'help-circle-sharp' : 'help-circle-outline';
  }

  return <Icon name={iconName} size={22} color={color} />;
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#7d5fff',
        tabBarIcon: ({color, size, focused}) =>
          getTabBarIcon(route, focused, color, size),
      })}>
      <Tab.Screen name={ROUTES.UPLOAD_TAB} component={Upload} />
      <Tab.Screen name={ROUTES.BANTUAN} component={Bantuan} />
      <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,

    height: 50,
  },
});
