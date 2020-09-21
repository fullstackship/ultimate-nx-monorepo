# Ultimate Monorepo Project with NX, Xplat and Nxtend

<br/>

This Github repo is to setup **Ultimate Monorepo project** for Angular, React, Ionic , Capacitor , Vue, Plain WebComponent, Node/Express, NestJS and more (soon).

Just Clone this Github Repo and **'npm install'** if you don't have time to setup one by one.

    - Github : [hub.com/fullstackship/ultimate-nx-monorepo](https://github.com/fullstackship/ultimate-nx-monorepo)

Note that I tested based on Node 12.16.1 version and NPM(6.14.X).

<br/>

#### FYI, the setup process is actually all about Angular-Schematics.

 - Tools like create-nx-workspace and nx genereate are all based on Angular schematics.
 - [https://angular.io/guide/schematics](https://angular.io/guide/schematics)

<br/><br/>

# Setup Projects for Mono Repo

### 1. Setup NX Workspace
   
   - npx create-nx-workspace@latest
     
     - Choose 'empty' and 'NX CLI'
   
   <center><img title="" src="https://res.cloudinary.com/dgj7iseye/image/upload/v1600685309/Fullstackship-Blog/nx-1_fhydkg.png" alt="" data-align="center" width="586"></center>

### 2. Setup Angular packages
   
   - Install Angular packages : npm i -D @nrwl/angular
   
   - Create an Angular App: nx g @nrwl/angular:app
   
   - Check for more detail 
     
     - https://nx.dev/angular/tutorial/01-create-application

### 3. Setup React 
   
   - Install React packages : npm i -D @nrwl/react
   
   - Create a React App: nx g @nrwl/react:app
   
   - Check for more detail 
     
     - https://nx.dev/react/tutorial/01-create-application

### 4. Setup Vue.js 
   
   - Install Vue packages : npm i -D @nx-plus/vue
   
   - Create a Vue App : nx g @nx-plus/vue:app
   
   - Check for more detail 
     
     - https://github.com/ZachJW34/nx-plus

### 5. Setup WebComponent 
   
   - npm i -D @nrwl/web
   
   - nx g @nrwl/web:app web-comp
   
   - Check for more detail 
     
     - https://www.npmjs.com/package/@nrwl/web 

### 6. Setup Vue
   
   - npm i -D @nx-plus/vue
   
   - nx g @nx-plus/vue:app
   
   - Check for more detail 
     
     - https://github.com/nxtend-team/nxtend

### 7. Setup Ionic/Angular with Xplat 
   
   - Xplat creates xplat directory for its own architecture.
     
     - https://nstudio.io/xplat/fundamentals
   
   - nx generate @nstudio/xplat:app
   
   - Check for more detail 
     
     - https://nstudio.io/xplat/getting-started

### 8. Setup Ionic-React and Capacitor  with @nxtend 
   
   - Setup  Ionic/React
     
     - npm install -D --exact @nxtend/ionic-react
       - nx generate @nxtend/ionic-react:init
     - nx generate @nxtend/ionic-react:application ionic-react 
   
   - Install Capacitor Plugin
     
     - npm install -D --exact @nxtend/capacitor
     - nx generate @nxtend/capacitor:init
   
   - Add Capacitor to Existing Project
     
     - nx generate @nxtend/capacitor:capacitor-project ionic-react-cap --project ionic-react
   
   - Add Native Platform
     
     - nx run ionic-react:build 
     - nx run ionic-react-cap:add --platform=android
     - nx run ionic-react-cap:add --platform=ios
   
   - Sync Native Platform
     
     - nx run {Capacitor project name}:sync --platform {native platform}
     - nx run ionic-react-cap:sync --platform android
   
   - Open Native Platform(Android Studio or XCode)
     
     - nx run ionic-react-cap:open --platform=android
     - nx run ionic-react-cap:open --platform=ios
   
   - Check for more detail 
     
     - [https://nxtend.dev](https://nxtend.dev/)

### 9. Setup Node/Express 
   
   - npm install -D @nrwl/express
   
   - nx g @nrwl/express:app express-api 
   
   - Check for more detail 
     
     - [https://nx.dev/react/tutorial/05-add-node-app](https://nx.dev/react/tutorial/05-add-node-app)

### 10. Setup NestJS 
    
    - npm install -D @nrwl/nest
    
    - nx g @nrwl/nest:app nest-api 
    
    - Check for more detail 
      
      - https://nx.dev/angular/tutorial/05-add-node-app 


## TODO

  - electron
  - chrome-extension
  - react-native


# Running Xplat Ionic app

- nx serve ionic-myapp
  
  - If you have ERROR with paths, you have some options to resolve the issues.
  
  <center><img title="" src="https://res.cloudinary.com/dgj7iseye/image/upload/v1600694154/Fullstackship-Blog/nx-3_gdmizg.png" alt="" data-align="center" width="390"></center>
  
  - It happens because vscode needs some time to re-index the folder packages and files.(It may take long)
    
    - Restart TS Server 
    
    - Restart Angular Language Server
    
    - Change the paths mannually
    
    - For example, @import '~@nx-base/scss/index'; --> @import '../../../libs/scss/index';

<center><img title="" src="https://res.cloudinary.com/dgj7iseye/image/upload/v1600694154/Fullstackship-Blog/nx-5_ral6v1.png" alt="" width="488" data-align="center"></center>

- You should see this screen if you have no Error during starting the Ionic app.

 <center><img title="" src="https://res.cloudinary.com/dgj7iseye/image/upload/v1600694154/Fullstackship-Blog/nx-4_l7km3x.png" alt="" data-align="center" width="464"></center>
