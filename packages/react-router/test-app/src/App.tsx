import {
  IonApp
} from '@ionic/react';
import React from 'react';
import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';


/* Theme variables */
import './theme/variables.css';
import Main from './pages/Main';
import { IonReactRouter } from './ReactRouter/IonReactRouter';
import DynamicRoutes from './pages/dynamic-routes/DynamicRoutes';
import Routing from './pages/routing/Routing';
import MultipleTabs from './pages/muiltiple-tabs/MultipleTabs';
import DynamicTabs from './pages/dynamic-tabs/DynamicTabs';
import NestedOutlet from './pages/nested-outlet/NestedOutlet';
import NestedOutlet2 from './pages/nested-outlet/NestedOutlet2';
debugger;
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

      <Route path="/" component={Main} />
      <Route path="/routing" component={Routing} />
      <Route path="/dynamic-routes" component={DynamicRoutes} />
      <Route path="/multiple-tabs" component={MultipleTabs} />
      <Route path="/dynamic-tabs" component={DynamicTabs} />
      <Route path="/nested-outlet" component={NestedOutlet} />
      <Route path="/nested-outlet2" component={NestedOutlet2} />

      </IonReactRouter>
    </IonApp>
  );
};

export default App;