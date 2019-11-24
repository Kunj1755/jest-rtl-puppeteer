Initial setup imp points:

1. react-scripts downgraded to 2.1.8 in package.json
2. delete package-lock.json
3. delete node_modules
4. run npm install

---

ESlint & Prettier setup:
https://gist.github.com/bradtraversy/aab26d1e8983d9f8d79be1a9ca894ab4

Install ESLint & Prettier extensions for VSCode
Optional - Set format on save and any global prettier options

1.  Install Packages
    npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
    npx install-peerdeps --dev eslint-config-airbnb
2.  Create .prettierrc for any prettier rules (semicolons, quotes, etc)
3.  Install eslint globally.
    npm install -g eslint@5.16.0
4.  generate .eslintrc.json file :
    eslint --init
5.  Make following changes in .eslintrc.json
    > > "extends": ["airbnb", "prettier"]
    > > "rules": {
          "no-unused-vars":"warn"
    }

Unit,Snapshot Testing:
Using Jest (unit, snapshot testing) with create-react-app:

1. No need to install Jest (Jest comes bundled with create-react-app)
2. react-test-renderer is required to render snapshot
3. npm install react-test-renderer -D
   -D = --save-dev
   react-test-renderer : https://reactjs.org/docs/test-renderer.html

---

DOM Testing :
Testing library (If you'd like to assert, and manipulate your rendered components you can use react-testing-library, Enzyme, or React's TestUtils):

1. npm install @testing-library/react -D
