import React from 'react';

const UseContext = React.createContext('hello');
const UseProvider = UseContext.Provider;
const UseConsumer = UseContext.Consumer;

// export default {UseProvider, UseConsumer};
export default UseContext;
