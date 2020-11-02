# films-store-app

React single page application. The app lets users know information about movies
 and also provides additional functionality like filtering/sorting and CRUD operations.
This project uses next stack of technologies:

  - React 17, TypeScript 4.0.5
  - Redux, redux-saga, reselect, typesafe-actions
  - Ant Design, styled-components
  - Webpack, babel, eslint
  - axios

# Project File Structure

The project is created with the inspiration of ducks architecture. This file architecture is scalable and easy to implement.
Ducks is feature-first approach. 

    src 
        store
           -ducks (contains the reducers, actions, sagas, types that relative to particular feature)
        views
            -components (react components with side effects (containers))
            -reusable (Pure ui components)
        api (instance of axios and endpoints)
        utils


# TypeScript/Redux:

Project created with typescript, that allows designing type-safe architecture.
Also used additional library [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) which provides 
to implements strong typed redux part. Actions, reducers, and sagas use utility methods of this library. For optimizing
redux selectors used [reselect](https://github.com/reduxjs/reselect).

### Installation

Films-store-app requires [npm](https://www.npmjs.com/) to run.
Tested with next versions: npm[6.14.8].

Clone this repo using next command:
```
git clone https://github.com/Leggga/films-store-app.git
```

You`ll need to start the server before run app: [repo](https://github.com/Leggga/films-store-backend)

Install the dependencies and devDependencies and start the server:

```sh
$ cd films-store-app
$ npm install
$ npm run dev
```

Default browser path: `http://localhost:8000/`

For production build:

```sh
$ npm run build
```


License
----
ISC

[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>