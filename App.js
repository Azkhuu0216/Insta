import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import {
  SplashScreen,
  HomeScreen,
  SignInScreen,
  RegisterScreen,
  SearchScreen,
  ReelsScreen,
  ShopScreen,
  ChatScreen,
  ProfileScreen,
} from './src';
import {AuthContext} from './src/untils';
import {Image, SafeAreaView} from 'react-native';
import {color} from 'react-native-reanimated';
import ProScreen from './src/ProScreen';

const Tab = createBottomTabNavigator();

const Tab1 = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{headerShown: false}}
        name="Azaa"
        component={HomeScreen}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
const Tab2 = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
const Tab3 = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
    </Stack.Navigator>
  );
};
const Tab4 = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
    </Stack.Navigator>
  );
};
const Tab5 = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProScreen} />
    </Stack.Navigator>
  );
};
function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-variant" color={color} size={26} />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icons name="search" color={color} size={26} />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Tab3}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="video" color={color} size={26} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Tab4}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-outline" color={color} size={26} />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tab5}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('./photo/image/download.jpeg')}
              style={{width: 30, height: 30, borderRadius: 100}}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
    </Tab.Navigator>
  );
}

const StackAuth = createStackNavigator();

function AuthStack() {
  return (
    <StackAuth.Navigator initialRouteName="Instagram">
      <StackAuth.Screen name="Instagram" component={SignInScreen} />
      <StackAuth.Screen name="Register" component={RegisterScreen} />
    </StackAuth.Navigator>
  );
}
const Stack = createStackNavigator();

export default function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Tokeniig hadgalah sangaas tataj awaad tohiroh gazar ruu shiljine
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // SecureStore eswel busad shiperlegdsen sand hadgalagdsan tokeng sergeen
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Token sergeech chadsangui
      }
      // TOken sergeesnii daraa bid uuniig app-uud der batalgaajuulah shaardlagatai bolj magadgui
      // Ene ni App screen eswel Auth delgets ruuu shiljij achaalah  bolno
      // Delgetsiig salgaad hayna.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // UserName, Pass gh met ugugdluugig server ruu ilgeeh bolon token awah shaardlagatai.
        // Newtreh amjiltgui bolson uyed bid mun aldaa zasah shaardlagatai bolno
        // Tokenig awsnii daraa SecureStore eswel busad shiperlegdsen sang ashiglan tokenig hadgalah heregtei.
        // Jisheen der bid dummy token ashiglana.

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {state.isLoading ? (
            // Tokeniig shalgaj duusagui bn.
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // Token oldsongui hereglegch newtreegui bn
            <Stack.Screen
              name="Sign In"
              component={AuthStack}
              options={{
                title: 'Sign in',
                //Garah uyed pop hudulguunt durs ni oilgomjtoi met sanagddag.
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // Hereglegch newtersen bn
            <Stack.Screen name="HomeTab" component={HomeTab} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
