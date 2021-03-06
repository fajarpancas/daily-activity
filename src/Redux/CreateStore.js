import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Config from '../Config';
import CUSTOM_PERSIST from '../Config/CustomPersistConfig';
import {createCustomPersist} from '../Services/CustomPersistServices';
import StoreHelper from '../Services/StoreHelper';
import TempStorage from '../Modules/TempStorage';
import {batchedSubscribe} from 'redux-batched-subscribe';
import debounce from 'lodash/debounce';
import {batch} from 'react-redux';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const effectMiddleware = (next) => (effect) => {
    if (effect && effect.type === 'ALL') {
      batch(() => next(effect));
      return;
    }

    next(effect);
  };

  const sagaMiddleware = createSagaMiddleware({
    effectMiddlewares: [effectMiddleware]
  });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));
  enhancers.push(
    batchedSubscribe(
      debounce((notify) => {
        notify();
      }, 50)
    )
  );

  if (Config.enableReactotron) {
    enhancers.push(console.tron.createEnhancer());
  }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const initialState = TempStorage.getRestoreData();
  console.tron.error({initialState});
  const createAppropriateStore = createStore;
  const store = createAppropriateStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );
  // configure persistStore and check reducer version number

  // if (CUSTOM_PERSIST.active) {
  createCustomPersist(store, CUSTOM_PERSIST);
  // }

  StoreHelper.putStoreInstance(store);

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
