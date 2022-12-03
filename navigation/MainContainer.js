import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SwipeScreen from './screens/SwipeScreen';
import AccountScreen from './screens/AccountScreen';

const homeName = 'Home';
const searchName = 'Search';
const swipeName = 'Swipe';
const accountName = 'Account';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName == homeName) {
                        iconName =  focused? 'home' : 'home-outline';
                    } else if (routeName == searchName) {
                        iconName =  focused? 'search' : 'search-outline';
                    } else if (routeName == swipeName) {
                        iconName =  focused? 'arrow-forward' : 'arrow-forward-outline';
                    } else if (routeName == accountName) {
                        iconName =  focused? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'black',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 12 },
                style: { padding: 10, height: 80}
            }}>

            
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={searchName} component={SearchScreen}/>
            <Tab.Screen name={swipeName} component={SwipeScreen}/>
            <Tab.Screen name={accountName} component={AccountScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;