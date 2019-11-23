# RosaeNLG boilerplate project

Boilerplate for RosaeNLG projects.
Just fork it and start your NLG project.

For real time debug and rendering:

- open a terminal in VSCode
- use `npx rosaenlg-cli -l fr_FR -w templates\phoneCli.pug`


Gulp/CI:

- `gulp init` to create `dist` folder
- `gulp texts` to generate the texts in `dist`
- `gulp nonreg` to generate the non regression reference test file
- `npm run test` to run the tests
