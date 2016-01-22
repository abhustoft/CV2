import * as React from 'react';
import * as ReactDom from 'react-dom';
import marked from 'marked';
import * as Rx from 'rx';

import {ReposContainer} from './github-repos/repos-container';
import {WorkExperience} from './work-experience/work-experience';

console.log(marked('I am using __markdown__.'));

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={8000} />,
  document.getElementById('content')
);

ReactDom.render(
  <ReposContainer user="abhustoft"/>,
  document.getElementById('reposContainer')
);

