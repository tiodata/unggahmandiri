import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Upload from '../screen/uploaddoc/Upload';
import Bantuan from '../screen/bantuan/Bantuan';
import Settings from '../screen/settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../constant/routes';
import {StyleSheet} from 'react-native';
import CustomTabBar from '../components/CustomTabBar';
import CustomTabBarButton from '../components/CustomTabBarButton';

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

const UploadTabBarButton = props => (
  <CustomTabBarButton route="Upload" {...props} />
);

const SettingsTabBarButton = props => (
  <CustomTabBarButton route="settings" {...props} />
);

const BantuanTabBarButton = props => <CustomTabBarButton {...props} />;

// const TabTabBarButton = props => <CustomTabBar {...props} />;

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // tabBar = {{ TabTabBarButton }},
      tabBar={CustomTabBar}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#7d5fff',
        tabBarIcon: ({color, size, focused}) =>
          getTabBarIcon(route, focused, color, size),
      })}>
      <Tab.Screen
        name={ROUTES.UPLOAD_TAB}
        component={Upload}
        options={{
          tabBarButton: UploadTabBarButton,
        }}
      />
      <Tab.Screen
        name={ROUTES.BANTUAN}
        component={Bantuan}
        options={{
          tabBarButton: BantuanTabBarButton,
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={Settings}
        options={{
          tabBarButton: SettingsTabBarButton,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
