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

   ##Step 3: Integrating Contentful and Dotenv
- I installed Contentful to use it as a CMS to manage all of the content. Contentful supports GraphQL, that means I get to create a schema without making tables and then extract the exact data I need using qraphql queries. `npm install gatsby-source-contentful`
- Contentful config just required us to add it as a plugin to the _gatsby config_ file and pass the API key and Space Key. Next installed the dotenv to avoid doxing the keys `npm install dotenv`.
- To make _dotenv_ to work, post installation we need to create a `.env` file in root of our project and pass our keys as variables. To avoid git commiting this file to repo, we need to add `.env*` to our _.gitignore_ file. The asterick defines any similar dotenv files -- these could be multiple based on environments, like `.env.development` or `.env.production`.
- To pull data from our env file, we need to add the following code to gatsby config: `require('dotenv').config();` and then declare our keys like `process.env.KEY_VARIABLE`.
- But this did not work well when I tried to develop the project, I got an error that the system could not find a dotenv file. So I added a path in the require config codeline:
    ```
    require("dotenv").config({
    path: `.env`,
    });
    ```
- There two other plugins we installed, `gatsby-transformer-remark` to convert markdown files to html, and `gatsby-source-filesystem` which from what I understand as of now interprets content files as graphql nodes.
- There are bunch of other plugins to help with SEO, image handling, etc -- we will explore them in future if required.

##Step 4: Writing the first Component
- I picked up Navigation as the first component to build. As a first build just created a normal function _Navigation_ returning an h1 value along with a parameter `{title}`.
- New learning here was the usage of `prop-types` library. PropTypes are used to manipulate properties/parameters of a function.
- We used `FunctionName.defaulProps` to declare a default title string. And declared _title_ as a string with `FunctionName.propTypes`.
- Functions can be declared in two ways in JavaScript -- first, is to use the _function_ keyword, and second, to use the arrow operator (=>). The difference is that _function_ keyword is used to create robust functionalities with its own `this` object. For arrow operator functions, `this` is acquired from surrounding scope. Also, arrow operator functions by default return a value while regular function require an `export` statement.
- Finally, to display something on screen we created an _index.js_ file, imported our component here, and added the navigation component with a `div` block in it.
![GatsbyProject_NavComponent_Output1](//images.ctfassets.net/0zperb7h35e6/6xGPrsMGX2pHR0q6VOWsPT/17759df656d5fb78dade80eeded73f15/GatsbyProject_NavBar_1.png)

##Step 5: Building a complete NavBar
- This is when we test our tailwind integration. Apart from tailwind we use the gatsby _Link_ library to add internal links to pages. For external links we still use the html _a_ tag.
- With Link we pass a _to_ parameter defining the path. Making the syntax like `<Link to='/internalLink'> New Page </Link>`.
- Tailwind classes we pass as a class within our html tags. For instance the above code becomes: 
  - ```<Link to='/internalLink' class="justify-center text-2xl"> New Page </Link>```
- Tailwind tags is difficult to get a hang of for the first time. So instead of coding the css in my IDE, I opened the Tailwind Playground(https://play.tailwindcss.com/). Tailwind playground gives me class suggestions plus renders the output in the same window. We have to remove all JS though.
- The output:![GatsbyProject_Navbar_2](//images.ctfassets.net/0zperb7h35e6/4Un64GzSE2Ph53GUlOt14U/5379e1135f501dafa6b7b534549f5a8c/GatsbyProject_Navbar_2.png)
- Here's a basic round-off of the tailwind classes we used:
  - **Flex-boxes**: Used to create responsive containers. `flex`, `flex-row`, `flex-col`, `flex-wrap` are used to order all items in the container row-wise column-wise or order wrap if the screen size decreases beyond item widths.
  - **Justify properties**: Used inside a flex container to **align items horizontally**. `justify-start`, `justify-end`, `justify-center` as the name suggests left align, right align, or center aligns the items. `justify-between` or `justify-around` adds space between items or around them.
  - **Item properties**: Used inside flex container to **align items vertically**. Same as justify, we have classes like `items-start`, `items-end`, `items-center`