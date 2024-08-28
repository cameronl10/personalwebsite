import assembly from './assembly.svg';
import c from './c-1.svg';
import cpp from './c.svg';
import css from './css-3.svg';
import express from './expressjs-icon.svg';
import git from './git.svg';
import html from './html-1.svg';
import java from './java-svgrepo-com.svg';
import javascript from './javascript-svgrepo-com.svg';
import mongodb from './mongo-svgrepo-com.svg';
import nodejs from './nodejs-icon-svgrepo-com.svg';
import opencv from './opencv-icon.svg';
import python from './python-svgrepo-com.svg';
import r from './r-lang.svg';
import react from './reactjs-svgrepo-com.svg';
import postgres from './postgresql-logo-svgrepo-com.svg'
import graphql from './graphql-icon.svg'
import typescript from './typescript.svg'
import selenium from './selenium-svgrepo-com.svg'
export const iconKey = (key) => {
    const lowerKey = key.toLowerCase();
    switch (lowerKey) {
        case 'assembly':
            return assembly;
        case 'c':
            return c;
        case 'c++':
            return cpp;
        case 'css':
            return css;
        case 'expressjs':
            return express;
        case 'git':
            return git;
        case 'html':
            return html;
        case 'java':
            return java;
        case 'javascript':
            return javascript;
        case 'mongodb':
            return mongodb;
        case 'nodejs':
            return nodejs;
        case 'opencv':
            return opencv;
        case 'python':
            return python;
        case 'r':
            return r;
        case 'react':
            return react;
        case 'postgres':
            return postgres
        case 'graphql':
            return graphql
        case 'typescript':
            return typescript
        case 'selenium':
            return selenium
        default:
           break;
    }
}
