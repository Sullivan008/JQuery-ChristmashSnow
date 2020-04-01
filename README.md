# JQuery - Christmas Snow Application with JQuery-Snowfall Plugin [Year of Development: 2019]

About the application technologies and operation:

### Technologies:
- FrontEnd Side: JQuery (~3.4.1)
- Descriptive Language: HTML5 
- Style Description Language: CSS (Bootstrap ~4.3.1.)
- Other used modul:
  - JQuery-SnowFall (latest)
  - Bower (~1.8.8)
  - Gulp (~3.9.1)
  - Laravel-Elixir (6.0.0-18)
- Other uses: 
  - **JQuery-Snowfall** plugin: *This plugin implements the snowfall effect*
  - **.bowerrc** file: *This file contains the path to wich folder to "Copy" or "Install" when downloading dependencies from GIT BASH*
  - **bower.json** file: *Packages and dependencies with version numbers are defined by a manifest file bower.json. **(Package Example: jquery": "~3.4)***
  - **package.json** file: *Lists the packages your project depends on and specifies versions of a package that your project can use using semantic versioning rules*
  - **gulp.file** file: *Gulp.file combines the SCSS styles defined in Gulp with application dependency packages (JS dependencies). Mixed files are placed in the specified path.*

### Installation/ Configuration:

1. Restore necessary **node_modules**, so run the following command in **GIT Bash Console** in the application root directory

   ```
   - npm install
   ```

2. Restore necessary application packages and dependencies, so run the following command in **GIT Bash Console** in the application root directory

   ```
   - bower install
   ```
   
3. Restore necessary **CSS** and **JS** public files under **public** folder, so run the following command in **GIT Bash Console** in the application root directory

   ```
   - gulp
   ```

### About the application:
- The application shows the different snowfall effects for which we use the jQuery-Snowfall plugin.
- **Effects**:
  - **Clear**: Cleans the surface.
  - **Rounded**: Rounded flakes in different sizes.
  - **Shadows**: Flakes with shadows with different flake count.
  - **Rounded Shadows**: Rounded flakes with shadows with different flake count in different sizes.
  - **Collection**: Flakes are collected on a defined class object.
  - **Images**: The flake will be the picture we made.
  - **Device Orientation**: It does take in to account it the device is Landscape or Portrait
