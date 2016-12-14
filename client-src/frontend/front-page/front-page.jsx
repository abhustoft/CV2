import * as React from 'react';
import Circle from './circle.jsx'
import Header from './header.jsx'

const FrontPage = () => {
  const style = {
    backgroundColor: 'bisque',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: '10vw',
    paddingLeft: '5vw',
    paddingRight: '5vw'
  };
  return (
    <div style={style}>
      <Header>
        <h1>CV</h1>
        <h2>Alf Bjørn Hustoft</h2>
        <p>Full CV in an app! Press the buttons to see detailed information on employment record, projects I have worked on, technologies I master and have interest in and a general description of my person.</p>
      </Header>
      <Circle>Myself</Circle>
      <Circle>Career</Circle>
      <Circle>Projects</Circle>
      <Circle>Tech</Circle>
    </div>
  )
};

export default FrontPage;
