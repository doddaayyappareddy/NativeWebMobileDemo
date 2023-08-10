import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView } from 'react-native';
import { ButtonsComp } from './ButtonComp';
import  UserProfile from './UserProfile';
import { Footer } from '../common_components/Footer';

export const MainUserProfile = ({navigation}: {navigation: any}) => {

    return (
      <> 
        <Header />
        <ScrollView>
          <UserProfile navigation={navigation} />
          <Footer />
        </ScrollView>
        <ButtonsComp navigation={navigation} />
        {/* <BottomNavigation /> */}
      </>
    );
  }
  