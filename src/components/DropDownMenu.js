import {View, Text} from 'react-native';
import React, {useState} from 'react';

const DropDownMenu = ({option, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [setselected, setSetselected] = useState(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <Text>DropDownMenu</Text>
    </View>
  );
};

export default DropDowMenun;
