import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/navbar';
import Nosotros from './components/Nosotros';
import FullWidthTabs from './components/Products';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


const App = () => {

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress == 100) {
        clearInterval(timer);
      } else{
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
      }
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div> 
      {progress<100 ?(
        <CircularProgressWithLabel value={progress} />
      ):(
        <><HashRouter>
        <Navbar />
        <Switch>
          <Route exact
            path="/shop/"
            component={Home} />
          <Route exact
            path="/shop/products"
            component={FullWidthTabs} />
          <Route exact
            path="/shop/nosotros"
            component={Nosotros} />

          <Redirect to ="/shop" />
        </Switch>
      </HashRouter>

      <Footer></Footer></>
      )}
    </div>
  );
}

export default App;
