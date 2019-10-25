import {
  createStackNavigator,
  NavigationRouteConfigMap
} from "react-navigation";

import { environment } from "../config";
import IdpLoginScreen from "../screens/authentication/IdpLoginScreen";
import IdpSelectionScreen from "../screens/authentication/IdpSelectionScreen";
import LandingScreen from "../screens/authentication/LandingScreen";
import SpidCIEInformationScreen from "../screens/authentication/SpidCIEInformationScreen";
import SpidInformationScreen from "../screens/authentication/SpidInformationScreen";
import MarkdownScreen from "../screens/development/MarkdownScreen";
import ROUTES from "./routes";

// Routes loaded in production mode
const productionRouteConfigMap: NavigationRouteConfigMap = {
  [ROUTES.AUTHENTICATION_LANDING]: {
    screen: LandingScreen
  },
  [ROUTES.AUTHENTICATION_IDP_SELECTION]: {
    screen: IdpSelectionScreen
  },
  [ROUTES.AUTHENTICATION_IDP_LOGIN]: {
    screen: IdpLoginScreen
  },
  [ROUTES.AUTHENTICATION_SPID_INFORMATION]: {
    screen: SpidInformationScreen
  },
  [ROUTES.AUTHENTICATION_SPID_CIE_INFORMATION]: {
    screen: SpidCIEInformationScreen
  },
  [ROUTES.MARKDOWN]: {
    screen: MarkdownScreen
  }
};

// Routes loaded on development mode
const developmentRouteConfigMap: NavigationRouteConfigMap = {
  ...productionRouteConfigMap,
  [ROUTES.MARKDOWN]: {
    screen: MarkdownScreen
  }
};

/**
 * The authentication related stack of screens of the application.
 */
const navigator = createStackNavigator(
  environment === "DEV" ? developmentRouteConfigMap : productionRouteConfigMap,
  {
    // Let each screen handle the header and navigation
    headerMode: "none"
  }
);

export default navigator;
