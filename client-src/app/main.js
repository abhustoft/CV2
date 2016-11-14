/*eslint-disable no-unused-vars*/
 import * as React from 'react';
 import * as ReactDom from 'react-dom';
 import * as Rx from 'rx';
/*eslint-enable no-unused-vars*/

 //import marked from 'marked';
 import { Provider } from 'react-redux'
 import store from './redux/store'


 import MainContent from './main-content/MainContent';
 import {ReposContainer} from './gitHub/gitHub';
 import {WorkExperience} from './work/work';

require('./main.styl');

 //console.log(marked('I am using __markdown__.'));
 console.log('Am I controlled by a service worker: ', navigator.serviceWorker.controller);

 store.subscribe(() => {
   //console.log('Current MainContent state: ', store.getState());
 });

  ReactDom.render(
    <Provider store={store}>
      <MainContent />
    </Provider>,
    document.getElementById('cv-profile')
  );

 ReactDom.render(
   <WorkExperience url="/api/WorkExperiences" pollInterval={18000} />,
   document.getElementById('cv-work')
 );

 ReactDom.render(
   <ReposContainer user="abhustoft"/>,
   document.getElementById('cv-gitHub')
 );

