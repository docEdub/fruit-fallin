# Fruit-fallin golden path instruction notes

See https://doc.babylonjs.com/guidedLearning/devStories/fruitFalling.

## Setup

- macOS 12.5.
- Developing with VSCode and Safari.

## Notes

### [Moving Playground Code into a Development Repo](https://doc.babylonjs.com/guidedLearning/devStories/fruitFalling#moving-playground-code-into-a-development-repo):

- Step 6: Running `npm run dev` for the first time it worked but I got errors in the output:
    ```bash
    1:21:41 PM - Starting compilation in watch mode...
    [0] 
    [1] <i> [webpack-dev-server] Project is running at:
    [1] <i> [webpack-dev-server] Loopback: http://localhost:8080/
    [1] <i> [webpack-dev-server] On Your Network (IPv4): http://192.168.5.16:8080/
    [1] <i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
    [1] <i> [webpack-dev-server] Content not from webpack is served from '/Users/andy/-/code/fruit-fallin/test_package/public' directory
    [1] asset bundle.js 241 KiB [emitted] (name: main)
    [1] asset index.html 253 bytes [emitted]
    [1] runtime modules 27.3 KiB 12 modules
    [1] modules by path ./node_modules/ 158 KiB
    [1]   modules by path ./node_modules/webpack-dev-server/client/ 53.5 KiB 12 modules
    [1]   modules by path ./node_modules/webpack/hot/*.js 4.3 KiB
    [1]     ./node_modules/webpack/hot/dev-server.js 1.59 KiB [built] [code generated]
    [1]     ./node_modules/webpack/hot/log.js 1.34 KiB [built] [code generated]
    [1]     + 2 modules
    [1]   modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB
    [1]     ./node_modules/html-entities/lib/index.js 7.74 KiB [built] [code generated]
    [1]     ./node_modules/html-entities/lib/named-references.js 72.7 KiB [built] [code generated]
    [1]     + 2 modules
    [1]   ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
    [1]   ./node_modules/events/events.js 14.5 KiB [built] [code generated]
    [1] ./src/index.js 972 bytes [built] [code generated]
    [1] 
    [1] ERROR in ./src/index.js 1:0-51
    [1] Module not found: Error: Can't resolve 'app_package' in '/Users/andy/-/code/fruit-fallin/test_package/src'
    [1] resolve 'app_package' in '/Users/andy/-/code/fruit-fallin/test_package/src'
    [1]   Parsed request is a module
    [1]   using description file: /Users/andy/-/code/fruit-fallin/test_package/package.json (relative path: ./src)
    [1]     Field 'browser' doesn't contain a valid alias configuration
    [1]     resolve as module
    [1]       /Users/andy/-/code/fruit-fallin/test_package/src/node_modules doesn't exist or is not a directory
    [1]       looking for modules in /Users/andy/-/code/fruit-fallin/test_package/node_modules
    [1]         single file module
    [1]           using description file: /Users/andy/-/code/fruit-fallin/test_package/package.json (relative path: ./node_modules/app_package)
    [1]             no extension
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package is not a file
    [1]             .js
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.js doesn't exist
    [1]             .json
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.json doesn't exist
    [1]             .wasm
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.wasm doesn't exist
    [1]         existing directory /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package
    [1]           using description file: /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/package.json (relative path: .)
    [1]             using description file: /Users/andy/-/code/fruit-fallin/test_package/package.json (relative path: ./node_modules/app_package)
    [1]               no extension
    [1]                 Field 'browser' doesn't contain a valid alias configuration
    [1]                 /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package is not a file
    [1]               .js
    [1]                 Field 'browser' doesn't contain a valid alias configuration
    [1]                 /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.js doesn't exist
    [1]               .json
    [1]                 Field 'browser' doesn't contain a valid alias configuration
    [1]                 /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.json doesn't exist
    [1]               .wasm
    [1]                 Field 'browser' doesn't contain a valid alias configuration
    [1]                 /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package.wasm doesn't exist
    [1]               as directory
    [1]                 existing directory /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package
    [1]                   using description file: /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/package.json (relative path: .)
    [1]                     use ./lib/index.js from main in package.json
    [1]                       using description file: /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/package.json (relative path: ./lib/index.js)
    [1]                         no extension
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/lib/index.js doesn't exist
    [1]                         .js
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/lib/index.js.js doesn't exist
    [1]                         .json
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/lib/index.js.json doesn't exist
    [1]                         .wasm
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/lib/index.js.wasm doesn't exist
    [1]                         as directory
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/lib/index.js doesn't exist
    [1]                     using path: /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/index
    [1]                       using description file: /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/package.json (relative path: ./index)
    [1]                         no extension
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/index doesn't exist
    [1]                         .js
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/index.js doesn't exist
    [1]                         .json
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/index.json doesn't exist
    [1]                         .wasm
    [1]                           Field 'browser' doesn't contain a valid alias configuration
    [1]                           /Users/andy/-/code/fruit-fallin/test_package/node_modules/app_package/index.wasm doesn't exist
    [1]       looking for modules in /Users/andy/-/code/fruit-fallin/node_modules
    [1]         single file module
    [1]           using description file: /Users/andy/-/code/fruit-fallin/package.json (relative path: ./node_modules/app_package)
    [1]             no extension
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/node_modules/app_package doesn't exist
    [1]             .js
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/node_modules/app_package.js doesn't exist
    [1]             .json
    [1]               Field 'browser' doesn't contain a valid alias configuration
                /Users/andy/-/code/fruit-fallin/node_modules/app_package.json doesn't exist
    [1]             .wasm
    [1]               Field 'browser' doesn't contain a valid alias configuration
    [1]               /Users/andy/-/code/fruit-fallin/node_modules/app_package.wasm doesn't exist
    [1]         /Users/andy/-/code/fruit-fallin/node_modules/app_package doesn't exist
    [1]       /Users/andy/-/code/node_modules doesn't exist or is not a directory
    [1]       /Users/andy/-/node_modules doesn't exist or is not a directory
    [1]       /Users/andy/node_modules doesn't exist or is not a directory
    [1]       /Users/node_modules doesn't exist or is not a directory
    [1]       /node_modules doesn't exist or is not a directory
    [1] 
    [1] webpack 5.74.0 compiled with 1 error in 364 ms
    [0] 
    [0] 1:21:42 PM - Found 0 errors. Watching for file changes.
    [1] <i> [webpack-dev-middleware] wait until bundle finished: /favicon.ico
    [1] assets by path *.js 22.9 MiB
    [1]   asset bundle.js 11.6 MiB [emitted] (name: main)
    [1]   asset main.7c3a3928d77be7e52327.hot-update.js 11.3 MiB [emitted] [immutable] [hmr] (name: main)
    [1] asset index.html 253 bytes [emitted]
    [1] asset main.7c3a3928d77be7e52327.hot-update.json 28 bytes [emitted] [immutable] [hmr]
    [1] Entrypoint main 22.9 MiB = bundle.js 11.6 MiB main.7c3a3928d77be7e52327.hot-update.js 11.3 MiB
    [1] cached modules 158 KiB [cached] 22 modules
    [1] runtime modules 27.3 KiB 12 modules
    [1] modules by path ../app_package/node_modules/@babylonjs/core/ 8.29 MiB 890 modules
    [1] modules by path ../app_package/node_modules/@babylonjs/loaders/ 405 KiB
    [1]   modules by path ../app_package/node_modules/@babylonjs/loaders/glTF/ 345 KiB 36 modules
    [1]   modules by path ../app_package/node_modules/@babylonjs/loaders/OBJ/*.js 51.3 KiB 3 modules
    [1]   modules by path ../app_package/node_modules/@babylonjs/loaders/STL/*.js 9.15 KiB 2 modules
    [1]   ../app_package/node_modules/@babylonjs/loaders/index.js 106 bytes [built] [code generated]
    [1] modules by path ../app_package/lib/ 4.21 KiB
    [1]   ../app_package/lib/index.js 844 bytes [built] [code generated]
    [1]   ../app_package/lib/playgroundRunner.js 830 bytes [built] [code generated]
    [1]   ../app_package/lib/Playground/playground.js 2.57 KiB [built] [code generated]
    [1] ./src/index.js 972 bytes [code generated]
    [1] ../app_package/node_modules/tslib/tslib.es6.js 12 KiB [built] [code generated]
    [1] webpack 5.74.0 compiled successfully in 1451 ms
    ```

- Step 7: Given playground at https://playground.babylonjs.com/#G4VPXM doesn't work.
    - Fixed by changing the `CreateSphere` line to:
        ```TypeScript
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { segments: 16, diameter: 2 }, scene);
        ```

- Step 9: Instructions refers to `myapp_package/package.json` but the `myapp_package` folder does not exist and was not created in previous instructions.

- Step 10: After `npm update` and `npm run dev` I get the following error in Safari's Javascript console:
    ```
    TypeError: undefined is not a function (near '...scene.onBeforeRenderObservable.runCoroutineAsync...')
    ```
    - Fixed by changing the render coroutine to:
        ```TypeScript
                scene.registerBeforeRender(() => {
            player0.position.y -= 0.03 * scene.getAnimationRatio();
            if (player0.position.y < 0) {
                player0.position.y = 10;
            }
        });
        ```

- Step 11: URL for player.png needs to be updated to:
    https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/packages/tools/playground/public/textures/player.png

### [Deploying as an NPM Package](https://doc.babylonjs.com/guidedLearning/devStories/fruitFalling#deploying-as-an-npm-package):

- Step 2: I couldn't publish to NPM until I made the package public in package.json:
    ```
    "publishConfig": {
      "access": "public"
    },
    ```

### [Going to Production with Ionic](https://doc.babylonjs.com/guidedLearning/devStories/fruitFalling#going-to-production-with-ionic):

- Step 1: `npm install -g @ionic/cli` didn't work on my machine. Using `sudo` worked.

- Step 6: `ionic capacitor sync ios` gave a weird Ruby error. [StackOverflow](https://stackoverflow.com/questions/70789326/building-ionic-cordova-app-for-ios-on-m1-mac) says to start a Rosetta enabled terminal to work around it.
    - Using a Rosetta enabled terminal now gives an error saying the full Xcode is not installed (I only installed the Xcode developer tools).
    - After installing Xcode I had to agree to the license agreement on the command line with
        ```
        sudo xcodebuild -license
        ```
    - Running `ionic capacitor sync ios` after all that still gives an M1 issue:
        ```
        [error] Analyzing dependencies
        [capacitor]         /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require': dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle, 0x0009): tried: '/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle' (mach-o file, but is an incompatible architecture (have (arm64), need (x86_64))) - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle (LoadError)
        ```
        ... with the relevant part of the error being:
        ```
        (have (arm64), need (x86_64))
        ```

    - After finding a fix [here](https://www.angularfix.com/2022/01/ionic-application-xcode-build-errors.html) `ionic capacitor build ios` gets past the M1/arm64 after running these commands from the `fruit-fallin` ionic project root folder:
        ```
        sudo arch -x86_64 gem install ffi

        ionic capacitor update ios

        ionic capacitor build ios

        cd ./ios/App

        arch -x86_64 pod install

        ionic capacitor build ios
        ```
        - The last `ionic capacitor build ios` command ran with no errors and opened Xcode but Xcode immediately prompted to install missing extensions and after done installing them Xcode opened to the start dialog with "Open project" and other options instead of opening the ionic iOS project.

        - I unchecked the "Show this at startup" option, closed Xcode and running `ionic capacitor build ios` successfully opened the project in Xcode which let me switch to the iPhone 12 target, build, and run the default ionic app in the simulator!

- Step 9: `npm install @doc.e.dub/fruit-fallin` failed because `@babylonjs/loaders^5.18.0` couldn't be found (or something like that).
    - Fixed by going back to the original (non-ionic) `fruit-fallin` repo and replacing the `@babylonjs/xxx` imports with `import * from "babylonjs";` in playground.ts and `import { Engine } from "babylonjs";` in playgroundRunner.ts. Then I updated the `app_package` version to 0.0.2 in package.json and ran the `npm publish` steps again.
        - Back in the ionic project, running `npm install @doc.e.dub/fruit-fallin` now works!

- Step 11:
    - The .tsx file listed has no space between "of" and `Home.tsx` which makes it look like a file named `ofHome.tsx` needs to be changed.
    - The new contents listed for `Home.tsx` has a syntax error at line 38. The `<canvas>` element's closing tag is missing the `/` before `canvas`. It should be changed to `</canvas>`.

- Step 12: Running `npm run serve` fails because it isn't valid in the ionic project. Running `ionic serve` works but opens Safari to a blank white screen because the `initializeBabylonApp` function imported from the `fruit-fallin` npm package in `Home.tsx` is never called.
    - Fixed the problem by adding `initializeBabylonApp(babylonOptions);` at line 20 (right after the `babylonOptions` object is created).