import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './products-re';
import photographer from './Photographers-re'
import packages from './package-re'
import order from './orders';
export default  configureStore({
    reducer: {
      auth:auth,
      product:product,
      photographer:photographer,
      packages:packages,
      order:order

    }
});