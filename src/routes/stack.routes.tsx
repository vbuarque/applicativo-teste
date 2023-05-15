import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ArquivePartners,
    DetailsPartners,
    ListMembers,
    RegisterMember,
    RegisterUser,
    SignIn,
    StatusDetailPartners,
    TotalDetailPartners,
    UpdatePartner,
} from '../screens';

import { RootStackParamList } from './types';

import ShowBottomTabs from './tab.routes';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
    return (
        <Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
            <Screen name='SignIn' component={SignIn} />
            <Screen name='Home' component={ShowBottomTabs} />
            <Screen name='TotalDetailPartners' component={TotalDetailPartners} />
            <Screen name='ArquivePartners' component={ArquivePartners} />
            <Screen name='DetailsPartners' component={DetailsPartners} />
            <Screen name='ListMembers' component={ListMembers} />
            <Screen name='PartnerRegister' component={ShowBottomTabs} />
            <Screen name='RegisterMember' component={RegisterMember} />
            <Screen name='RegisterUser' component={RegisterUser} />
            <Screen name='StatusDetailPartners' component={StatusDetailPartners} />
            <Screen name='UpdatePartner' component={UpdatePartner} />
            <Screen name='UserProfile' component={ShowBottomTabs} />
        </Navigator>
    )
}