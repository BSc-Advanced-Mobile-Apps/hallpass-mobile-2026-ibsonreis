// ...existing code...
const React = require('react');
const { NativeModules, View } = require('react-native');

// Provide a minimal RNGestureHandler native shim so TurboModuleRegistry won't throw in tests
NativeModules.RNGestureHandlerModule = NativeModules.RNGestureHandlerModule || {
  attachGestureHandler: () => {},
  createGestureHandler: () => {},
  dropGestureHandler: () => {},
  updateGestureHandler: () => {},
  handleSetJSResponder: () => {},
  getConstants: () => ({}),
};

// Mock react-native-gesture-handler before any module imports
jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const RN = require('react-native');

  const MockSwipeable = ({ children }) => React.createElement(RN.View, null, children);
  const MockGestureHandlerRootView = ({ children }) => React.createElement(RN.View, null, children);
  const MockPanGestureHandler = ({ children }) => React.createElement(RN.View, null, children);
  const MockRectButton = ({ children, ...props }) => React.createElement(RN.View, props, children);

  return {
    Swipeable: MockSwipeable,
    GestureHandlerRootView: MockGestureHandlerRootView,
    PanGestureHandler: MockPanGestureHandler,
    RectButton: MockRectButton,
    State: {},
    Directions: {},
    // support default import style too
    default: {
      Swipeable: MockSwipeable,
      GestureHandlerRootView: MockGestureHandlerRootView,
      PanGestureHandler: MockPanGestureHandler,
      RectButton: MockRectButton,
    },
  };
});
