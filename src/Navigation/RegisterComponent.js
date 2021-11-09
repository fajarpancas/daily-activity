import {Navigation} from 'react-native-navigation';
import App from '../Screens/App';
import LoginScreen from '../Screens/Auth/LoginScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';
import MainScreen from '../Screens/Main/MainScreen';
import SettingScreen from '../Screens/Main/SettingScreen';
import ModalScreen from '../Screens/Main/ModalScreen';
import Alert from '../Components/Alert';
import Toast from '../Components/Toast';
import ReduxWrapper from './ReduxWrapper';
import UnexpectedActivity from '../Screens/Plan/UnexpectedActivity';
import PlanActivity from '../Screens/Plan/PlanActivity';
import Plan from '../Screens/Plan';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import AddActivity from '../Screens/Plan/AddActivity';

export const NAVIGATION_NAME = {
  APP: 'app',
  AUTH: {
    login: 'auth.login',
    register: 'auth.register'
  },
  MAIN: {
    main: 'main.main',
    setting: 'main.setting',
    PLAN: {
      index: 'main.plan.index',
      planActivity: 'main.plan.planActivity',
      unexpectedActivity: 'main.plan.unexpectedActivity',
      addActivity: 'main.plan.addActivity'
    }
  },
  COMPONENTS: {
    modal: 'component.modal',
    alert: 'component.alert',
    toast: 'component.toast'
  }
};

function RegisterComponentWrapper(identity, component, isRoot) {
  if (identity.includes('overlay')) {
    Navigation.registerComponent(
      identity,
      () => ReduxWrapper(component, isRoot),
      () => component
    );
  } else {
    Navigation.registerComponent(
      identity,
      () => ReduxWrapper(gestureHandlerRootHOC(component), isRoot),
      () => component
    );
  }
}
export default function () {
  RegisterComponentWrapper(NAVIGATION_NAME.APP, App);
  RegisterComponentWrapper(NAVIGATION_NAME.AUTH.login, LoginScreen);
  RegisterComponentWrapper(NAVIGATION_NAME.AUTH.register, RegisterScreen);
  RegisterComponentWrapper(NAVIGATION_NAME.MAIN.main, MainScreen);
  RegisterComponentWrapper(NAVIGATION_NAME.MAIN.PLAN.index, Plan);
  RegisterComponentWrapper(
    NAVIGATION_NAME.MAIN.PLAN.unexpectedActivity,
    UnexpectedActivity
  );
  RegisterComponentWrapper(
    NAVIGATION_NAME.MAIN.PLAN.planActivity,
    PlanActivity
  );
  RegisterComponentWrapper(NAVIGATION_NAME.MAIN.PLAN.addActivity, AddActivity);
  RegisterComponentWrapper(NAVIGATION_NAME.MAIN.setting, SettingScreen);
  RegisterComponentWrapper(NAVIGATION_NAME.COMPONENTS.modal, ModalScreen);
  RegisterComponentWrapper(NAVIGATION_NAME.COMPONENTS.alert, Alert);
  RegisterComponentWrapper(NAVIGATION_NAME.COMPONENTS.toast, Toast);
}
