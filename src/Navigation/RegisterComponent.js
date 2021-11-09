import React from 'react';
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
      unexpectedActivity: 'main.plan.unexpectedActivity'
    }
  },
  COMPONENTS: {
    modal: 'component.modal',
    alert: 'component.alert',
    toast: 'component.toast',
  }
};

export default function () {
  Navigation.registerComponent(NAVIGATION_NAME.APP, () => ReduxWrapper(App));
  Navigation.registerComponent(NAVIGATION_NAME.AUTH.login, () =>
    ReduxWrapper(LoginScreen)
  );
  Navigation.registerComponent(NAVIGATION_NAME.AUTH.register, () =>
    ReduxWrapper(RegisterScreen)
  );
  Navigation.registerComponent(NAVIGATION_NAME.MAIN.main, () =>
    ReduxWrapper(MainScreen)
  );
  Navigation.registerComponent(NAVIGATION_NAME.MAIN.PLAN.index, () =>
  ReduxWrapper(Plan)
);
  Navigation.registerComponent(NAVIGATION_NAME.MAIN.PLAN.unexpectedActivity, () =>
    ReduxWrapper(UnexpectedActivity)
  );
  Navigation.registerComponent(NAVIGATION_NAME.MAIN.PLAN.planActivity, () =>
    ReduxWrapper(PlanActivity)
  );
  Navigation.registerComponent(NAVIGATION_NAME.MAIN.setting, () =>
    ReduxWrapper(SettingScreen)
  );
  Navigation.registerComponent(NAVIGATION_NAME.COMPONENTS.modal, () =>
    ReduxWrapper(ModalScreen)
  );
  Navigation.registerComponent(NAVIGATION_NAME.COMPONENTS.alert, () =>
    ReduxWrapper(Alert)
  );
  Navigation.registerComponent(NAVIGATION_NAME.COMPONENTS.toast, () =>
    ReduxWrapper(Toast)
  );
}
