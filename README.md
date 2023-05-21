##Step 1: Installation and Setup

I wanted to complete this project without installing an IDE into my system -- so I started with using Replit. But Replit did not have a pre-designed Gatsby repl. I tried configuring using a basic nix project, but failed.

I ended up installing Visual Basic to my system. And then adding gatsby and other plugins via terminal.
- I installed Gatsby locally within the system, and hence had a hard time finding the route in a Mac (Using directories in windows is much easier).
- Spending some time with ChatGPT, I found a way to create a gatsby project without setting up the node modules path to my system. I created a project directory and then ran the following command in terminal to setup my project: `./node_modules/.bin/gatsby new ProjectName`
- Next step was to open the created project in VisualB and setup version control. Without moving to Github I was able to create a repo and commit the initial code from VB itself.

##Step 2: Adding the Plugins
- First came Tailwind CSS -- this was a simple three step process:
   - `npm install tailwindcss postcss autoprefixer`
   - `npx tailwindcss init`
   - At this point _tailwind config_ file is auto-created in your root, you 
   just need to add any plugins if there are. In my case I added DaisyUI(https://daisyui.com/docs/install/).
   - Next is to go to the _postcss config_ file and add tailwind as a plugin.
        ```module.exports = {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
          },
        };```
   - Next I created a global css file in the styles folder to add the following tailwind headers.
       ```@import 'tailwindcss/base';
       @import 'tailwindcss/components';
       @import 'tailwindcss/utilities';```
   - And then imported this global css file into _gatsby browser config_ file `import './src/styles/tailwind.css';`
   - All installed plugins are auto-added to _package.json_, but in _gatsby config_ file certain plugins are to be declared. In this case we added: `gatsby-plugin-postcss`