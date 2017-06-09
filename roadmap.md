# Project Road Map

## 1 - Setup & Components

### Firebase Setup:
  * Create Project on Firebase Console;
  * Enable Google Authentication;
  * Create path /listings on database;
  * Upload initial data (listings.json) to /listings;

### Angular Setup:

#### Project
  * Create Project with @angular-cli;
  * Install the following dependencies:
    * npm install --save firebase angularfire2 angular2-flash-messages
  
#### Components
  * Create 'Components' folder;
  * Generate the following components (ng g c <component-name>):
    * home;
    * listings;
    * navbar;
    * listing;
    * add-listing;
    * edit-listing

#### Routing // TODO: Refactor for external file
  * Import { RouterModule, Routes } from '@angular/router' to app.module.ts;
  * Import RouterModule.forRoot(appRoutes) to @ngModule.imports;
  * Create const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listings', component: ListingsComponent }
  ]; right before @ngModule;
  * Create <router-outlet></router-outlet> on app.component.html;
  * Open localhost:4200 and test url for home ('') and listings (/listings);

#### Appearance
  * app.component.html should look like this:
    ```
      <app-navbar></app-navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    ```
  * Add bootswatch Paper theme (https://bootswatch.com/paper/bootstrap.min.css) to index.html header;
  * navbar.component.html should look like this:
    ```
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">PropList</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a [routerLink]="['/']">Home</a></li>
              <li><a [routerLink]="['/listings']">Listings</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
    ```
  * styles.css should set body { padding-top: 70px; } in case navbar is fixed-top;
  * Add the following scripts to index.html just before </body>:
    ```
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    ```
    'note: jQuery can't afford to be loaded asynchronously because it could throw an error in case bootstrap load first;'
  * home.component.html should look like this:
    ```
    <div class="jumbotron">
        <div class="container text-center">
          <h1>Property Listings by n8webdev</h1>
          <p>Access the hottest properties available</p>
          <a href=""><img src="assets/img/google.png" alt="google login logo"></a>
        </div>
      </div>
    ```
  * Create img folder under assets;
  * Save a google login button image to assets/img as google.png;
  * Update navbar.component.html:
    ```
      ...
      <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <li><a [routerLink]="['/']">Home</a></li>
        <li><a [routerLink]="['/listings']">Listings</a></li>
        <li><a [routerLink]="['/add-listing']">Add Listing</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a [routerLink]="['/login']">Login</a></li>
      </ul>
      ...
    ```
  * Include { path: 'add-listing', component: AddListingComponent } to appRoutes;


### 2 - AngularFire2 Setup: