import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from './OnboardingScreen';
import WalletSelectionScreen from './WalletSelectionScreen';
import WalletCreateScreen from './WalletCreateScreen';
import WalletImportScreen from './WalletImportScreen';
import EmailLoginScreen from './EmailLoginScreen';
import EmailRegisterScreen from './EmailRegisterScreen';

export type AuthStackParamList = {
  Onboarding: undefined;
  WalletSelection: undefined;
  WalletCreate: undefined;
  WalletImport: undefined;
  EmailLogin: undefined;
  EmailRegister: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = 
  NativeStackScreenProps<AuthStackParamList, T>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen 
        name="WalletSelection" 
        component={WalletSelectionScreen}
        options={{
          title: 'Select Wallet',
        }}
      />
      <Stack.Screen 
        name="WalletCreate" 
        component={WalletCreateScreen}
        options={{
          title: 'Create Wallet',
        }}
      />
      <Stack.Screen 
        name="WalletImport" 
        component={WalletImportScreen}
        options={{
          title: 'Import Wallet',
        }}
      />
      <Stack.Screen 
        name="EmailLogin" 
        component={EmailLoginScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen 
        name="EmailRegister" 
        component={EmailRegisterScreen}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
}
