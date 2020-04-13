# Redux Practice

## set defulat file
```
    bash react_pkg.sh
    set 
        "start": "webpack-dev-server --mode development --open --hot",
        "build": "webpack --mode production"
    in package.json script
```

### Explain
Module : react-redux

project
```
PROJECT
    - src
            - component : view (presentationer)
            - container : Get store into props system
            - action    : Set of actions
            - reducer   : save reducer file
            - lib       : files for some components
            - index.js
            - index.html
    -.gitignore
    -.babelrc
    - package.json
    - webpack.config.js
```
What is Presentational component(in component directory)<br>
 - Only process view. have DOM and style.<br>Cant access store, only use props
 - Only have state for style, else are cant.
 - Usually write functional component

What is Container component(in container directory)<br>
 - Connect Presentatinal components with Store
 - Only have DOM for covering, usually have state

 
