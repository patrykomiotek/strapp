# Adding TypeScript

1. Create `tsconfig.json` file
1. Install dependencies: `npm install --save-dev typescript@4.9 @types/node@14 @types/react@17.0.2 @types/react-dom@17.0.2 @types/jest@24`
1. Next, rename any file to be a TypeScript file (e.g. `src/index.js` to `src/index.tsx`) and **restart your development server**!
1. If you have problems with linter try to remove `node_modules` and run `npm install`

# Migrate to Vite

1. Install dependencies `npm install --save-dev vite @vitejs/plugin-react vite-tsconfig-paths`
2. Create Vite config file `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  plugins: [react(), viteTsconfigPaths()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
});
```

3. Create a Vite Types File Reference
   Create new file `vite-env.d.ts` in root directory with content:

```
/// <reference types="vite/client" />

```

4. Move the index.html File
   Vite has a root directory which your files are served from. Since index.html is the entry point for Vite's server, the file needs to be in the root directory.

From the public directory, move the index.html file to the root of your project. So move `index.html` from `public` to the root directory

5. Update the index.html File

Vite automatically resolves URLs inside index.html, so there's no need for %PUBLIC_URL% placeholders. You can do a search and replace inside your index.html file for this. Be sure to remove all occurrences.

Add module script to the bottom of the body tag

```html
<body>
  {/* others here */}
  <script type="module" src="/src/index.tsx"></script>
</body>
```

6. Replace CRA with Vite

```json
{
  "scripts": {
    "start": "vite", // start dev server
    "build": "tsc && vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
},
```

Update tsconfig.json
Here, your focus should be on the isolatedModules, lib, target, and types. For more options, here is a sample tsconfig file from Vite.

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "target": "ESNext",
    "types": ["vite/client"],
    "isolatedModules": true
  }
}
```

You can now remove CRA, add Vite scripts to the package.json file, and update tsconfig.json.

7. Replace extension from `jsx` to `tsx`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
