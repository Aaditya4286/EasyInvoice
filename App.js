import React from 'react';
import Navigation from './Navigation';
import Splash from './Screen/Splash';


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <Splash/>;
  }
  return (
    <Navigation/>
      );
};

export default App;