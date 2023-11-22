/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingScreen from '../screens/SettingScreen';
//import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => (
                    <BlurView
                        overlayColor=""
                        blurAmount={15}
                        style={styles.BlurViewStyles}
                    />
                ),
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Əsas səhifə',
                    //tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="list-circle-outline" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'Tarixçə',
                    //tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <Icon name="book-outline" color={color} size={24} />
                    ),
                }}
            />
           <Tab.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Ayarlar',
                    //tabBarColor: '#3C4043',
                    tabBarIcon: ({ color }) => (
                        <Icon name="cloud-upload-outline" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default TabNavigator;
