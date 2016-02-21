/*eslint-disable no-unused-vars*/
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Rx from 'rx';
/*eslint-enable no-unused-vars*/

import marked from 'marked';
import { Provider } from 'react-redux'
import store from './redux/store'


import {MainContent} from './profile/profile';
import {Projects} from './projects/projects';
import {ReposContainer} from './gitHub/gitHub';
import {WorkExperience} from './work/work';

console.log(marked('I am using __markdown__.'));

ReactDom.render(
  //<Provider store={store}>
    <MainContent />,
  //</Provider>,
  document.getElementById('cv-profile')
);

ReactDom.render(
  <Projects />,
  document.getElementById('cv-projects')
);

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={18000} />,
  document.getElementById('cv-work')
);

ReactDom.render(
  <ReposContainer user="abhustoft"/>,
  document.getElementById('cv-gitHub')
);

