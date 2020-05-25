import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={(props.focused && props.name === 'ios-contact') ? Colors.TEAL : ((props.focused && props.name === 'ios-shirt') ? Colors.YELLOW : ((props.focused && props.name === 'ios-chatboxes') ? Colors.RED : Colors.tabIconDefault))}
    />
  );
}
