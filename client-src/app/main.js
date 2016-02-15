import * as React from 'react';
import * as ReactDom from 'react-dom';
import marked from 'marked';
import * as Rx from 'rx';

import {FrontPage} from './front-page/front-page';
import {Projects} from './projects/projects';
import {ReposContainer} from './gitHub/gitHub';
import {WorkExperience} from './work-experience/work-experience';

console.log(marked('I am using __markdown__.'));

ReactDom.render(
  <FrontPage />,
  document.getElementById('front-page')
);

ReactDom.render(
  <Projects />,
  document.getElementById('projects')
);

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={8000} />,
  document.getElementById('cv-work')
);

ReactDom.render(
  <ReposContainer user="abhustoft"/>,
  document.getElementById('cv-gitHub')
);

