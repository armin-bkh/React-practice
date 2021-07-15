import React from 'react';

export const UseContext = React.createContext('default value');
export const UseProvider = UseContext.Provider;
export const UseConsumer = UseContext.Consumer;