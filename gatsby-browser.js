import "./src/Components/global.css";
import "firebase/auth";
import React from 'react';
import AuthProvider from './src/Context/auth';

export const wrapRootElement = ({ element }) => (
<AuthProvider>{element}</AuthProvider>
)