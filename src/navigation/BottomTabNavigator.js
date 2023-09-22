import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Upload from '../screen/uploaddoc/Upload';
import Bantuan from '../screen/bantuan/Bantuan';
import Settings from '../screen/settings/Settings';

import {ROUTES} from '../constant/routes';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.UPLOAD_TAB} component={Upload} />
      <Tab.Screen name={ROUTES.BANTUAN} component={Bantuan} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
