import React, { useState, useEffect } from 'react';
import { Dimensions, StatusBar, Animated } from 'react-native';
import SignIn from './form'

const SideBar = ({ style, open = false, children }) => {

    const [wdt] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            wdt,
            {
                toValue: open ? Dimensions.get('window').width / 1.25 : 0,
                duration: 1000,
            }
        ).start();
    }, [open])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...style,
                zIndex: 1,
                top: StatusBar.currentHeight,
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: Dimensions.get('window').height - 90 - StatusBar.currentHeight,
                position: 'absolute',
                left: 0,
                width: wdt,         // Bind opacity to animated value
            }}
        >
            <SignIn />
        </Animated.View>
    );
}

export default SideBar