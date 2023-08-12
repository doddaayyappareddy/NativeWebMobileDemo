/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
// import { BottomNavigation } from './components/risk_willingness/BottomNavigation';
import MainRiskWillingness from './components/risk_willingness/MainRiskWillingness';
import MainUserEnroll from './components/user-enroll/MainUserEnroll';
import MainGetStarted from './components/get_started/MainGetStarted';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMarketFluctuation from './components/market_fluctuation/MainMarketFluctuation';
import MainPortfolioSuggestion from './components/portfolio_suggestion/MainPortfolioSuggestion';
import MainInvestmentStyle from './components/choose_investment_style/MainInvestmentStyle';
import MainAccountSelection from './components/account_selection/MainAccountSelection';
import MainTermsAlert from './components/terms_alert/MainTermsAlert';
import MainCompletionPage from './components/completion_page/MainCompletionPage';
import { MainUserProfile } from './components/user_profile/MainUserProfile';
import MainRedirection from './components/redirection_page/MainRedirection';
import { AccountSummary } from './components/redirection_page/AccountSummary';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Redirect' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Redirect' component={MainRedirection}/>
        <Stack.Screen name='Start' component={MainGetStarted}/>
        <Stack.Screen name='Enroll' component={MainUserEnroll}/>
        <Stack.Screen name='Risk' component={MainRiskWillingness}/>
        <Stack.Screen name='MarketFluctuation' component={MainMarketFluctuation}/>
        <Stack.Screen name='PortfolioSelection' component={MainPortfolioSuggestion}/>
        <Stack.Screen name='InvestmentStyle' component={MainInvestmentStyle}/>
        <Stack.Screen name='AccountSelection' component={MainAccountSelection}/>
        <Stack.Screen name='UserProfileSection' component={MainUserProfile}/>
        <Stack.Screen name='TermsAlert' component={MainTermsAlert}/>
        <Stack.Screen name='CompletionPage' component={MainCompletionPage}/>
        <Stack.Screen name='AccountSumaary' component={AccountSummary}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
