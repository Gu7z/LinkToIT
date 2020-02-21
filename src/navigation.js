import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Link } from "react-router-native";

export default function src({style}) {
  return (
    <View style={style} >
        <Link to="/linkedin" underlayColor="#f0f4f7" >
            <View>
                <Icon name="linkedin-square" size={60} color="#0e76a8" />
            </View>
        </Link>
        <Link to="/github" underlayColor="#f0f4f7" >
            <View>
                <Icon name="github" size={60} />
            </View>
        </Link>
        <Link to="/whatsapp" underlayColor="#f0f4f7" >
            <View>
                <Icon name="whatsapp" size={60} color="#128C7E" />
            </View>
        </Link>
        <Link to="/facebook" underlayColor="#f0f4f7" >
            <View>
                <Icon name="facebook-square" size={60} color="#0e76a8" />
            </View>
        </Link>
    </View>
  );
}
