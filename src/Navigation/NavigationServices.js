import {Navigation} from 'react-native-navigation';
import {NAVIGATION_NAME} from './RegisterComponent';
import {Images} from '../Themes/';

/**
 * This services used to help you handle navigation easyly
 * put function that help you navigate here.
 */

let activeNav;
let mainroot;

function setActiveNavigation(nav) {
  activeNav = nav;
}

function getActiveNavigation() {
  return activeNav;
}

// sample to set Auth.login screen as Root Screen
function setRootAuth() {
  mainroot = 'auth';
  Navigation.setRoot({
    root: {
      stack: {
        id: 'auth',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.AUTH.login
            }
          }
        ]
      }
    }
  });
}

// sample to set Main screen as Root Screen
function setRootMain() {
  mainroot = 'main';
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottom_tab_main',
        children: [
          {
            stack: {
              id: 'main',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.MAIN.PLAN.index
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Home', // Optional
                  textColor: 'grey', // Optional
                  badge: '1', // Optional
                  badgeColor: 'red', // Optional
                  icon: Images.icon, // Optional
                  iconColor: 'grey', // Optional
                  selectedTextColor: 'white', // Optional
                  selectedIcon: Images.icon, // Optional
                  selectedIconColor: 'white' // Optional
                }
              }
            }
          },
          {
            stack: {
              id: 'setting',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.MAIN.setting
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Screen',
                  icon: Images.icon, // Optional
                  selectedIcon: Images.icon // Optional
                }
              }
            }
          }
        ]
      }
    }
  });
}

// sample to navigate screen
function push(target, passProps = {}, options = {}) {
  Navigation.push(activeNav.componentId, {
    component: {
      name: target, // Push the screen registered with the 'Settings' key
      options,
      passProps
    }
  });
}

function showModal(target, options = {}) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: target,
            options
          }
        }
      ]
    }
  });
}

function dismissModal() {
  Navigation.dismissModal(activeNav.componentId);
}

function showOverlay(target, options = {}) {
  Navigation.showOverlay({
    component: {
      name: target,
      options
    }
  });
}

function dismissOverlay() {
  Navigation.dismissOverlay(activeNav.componentId);
}

function mergeOptions(params) {
  Navigation.mergeOptions(activeNav.componentId, params);
}

function pop() {
  Navigation.pop(activeNav.componentId);
}

function popToRoot() {
  Navigation.popToRoot(activeNav.componentId);
}

function getCurrentMainRoot() {
  return mainroot;
}

export default {
  setActiveNavigation,
  getActiveNavigation,
  setRootAuth,
  setRootMain,
  push,
  showModal,
  dismissModal,
  showOverlay,
  dismissOverlay,
  mergeOptions,
  pop,
  popToRoot,
  getCurrentMainRoot
};
