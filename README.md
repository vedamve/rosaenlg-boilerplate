# RosaeNLG boilerplate project

Boilerplate for RosaeNLG projects.
Just fork it and start your NLG project.

For real time debug and rendering:

- open a terminal in VSCode
- use `npx rosaenlg-cli -l fr_FR -w templates\phoneCli.pug`


Gulp/CI:

- `gulp init` to create `dist` folder
- `gulp texts` to generate the texts in `dist`
- testing:
  - `mocha` to run the tests
  - use `npm run test` or `gulp test` to run the tests _and_ generate a nice report in `mochawesome-report` folder
  - `gulp nonreg` to generate the non regression reference test file
