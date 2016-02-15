import * as React from 'react';
import * as ReactDom from 'react-dom';
import marked from 'marked';
import * as Rx from 'rx';

import {MainContent} from './profile/profile';
import {Projects} from './projects/projects';
import {ReposContainer} from './gitHub/gitHub';
import {WorkExperience} from './work/work';

console.log(marked('I am using __markdown__.'));

ReactDom.render(
  <MainContent />,
  document.getElementById('cv-profile')
);

ReactDom.render(
  <Projects />,
  document.getElementById('cv-projects')
);

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={8000} />,
  document.getElementById('cv-work')
);

ReactDom.render(
  <ReposContainer user="abhustoft"/>,
  document.getElementById('cv-gitHub')
);

