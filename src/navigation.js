import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Link } from "react-router-native";

export default function src({style}) {
  return (
    <View style={style} >
        <Link to="/linkedin" underlayColor="#f0f4f7" >
            <View>
                <Text><Icon name="linkedin-square" size={60} color="#0e76a8" /></Text>
            </View>
        </Link>
        <Link to="/facebook" underlayColor="#f0f4f7" >
            <View>
                <Text><Icon name="github" size={60} /></Text>
            </View>
        </Link>
        <Link to="/facebook" underlayColor="#f0f4f7" >
            <View>
                <Text><Icon name="whatsapp" size={60} color="#128C7E" /></Text>
            </View>
        </Link>
        <Link to="/facebook" underlayColor="#f0f4f7" >
            <View>
                <Text><Icon name="facebook-square" size={60} color="#0e76a8" /></Text>
            </View>
        </Link>
    </View>
  );
}
