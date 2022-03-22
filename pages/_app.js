import '../styles/globals.css'
import App from 'next/app'
import { Provider } from 'react-redux';
import store from  '../store/store'
import React from 'react';
import {createWrapper} from 'next-redux-wrapper'

class MyApp extends App {
 static async getInitialProps({Component, ctx}){
   const appProps=Component.getInitialProps? await Component.getInitialProps(ctx): {};
   console.log(appProps)
   return { appProps}
 }
  render(){

    const {Component, pageProps}=this.props  

    return <Provider store={store}>
               <div className='container'>
                <Component {...pageProps} />
              </div>
            </Provider>
  }
  
}




const makestore=()=>store
const wrapper=createWrapper(makestore)


export default wrapper.withRedux(MyApp)