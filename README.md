# lab_css-frameworks-and-libraries

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Building with CSS Frameworks & Component Libraries

## Learning Goals

After this exercise, you will be able to:

- Set up and configure a utility-first CSS framework (Tailwind CSS) in a modern React project.
- Integrate and use a React component library (Material-UI) to build UIs.
- Build a UI component using only utility classes.
- Rebuild the same component using a pre-styled component library.
- Combine both tools to create a responsive layout with pre-built interactive elements.
- Analyze the trade-offs between utility-first and component-based approaches.

<br>

## Requirements

- Fork this repo.
- Clone this repo.
- You must have [Node.js](https://nodejs.org/en/) installed to follow the instructions.

<br>

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Create a Pull Request so that your TAs can check your work.

<br>

## Test Your Code

This LAB is a visual exercise. There are no automated tests. Your goal is to build UI components that match the descriptions and visual guides in each iteration.

To run your React application, you will use the Vite development server. After setting up the project, you will run the following command in your terminal:

```shell
$ npm run dev
```

This will start the server, and you can view your work in your web browser at the local address provided (usually `http://localhost:5173`). To see the outputs of `console.log` or any errors, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

The goal of this exercise is to experience the difference between building with a utility-first CSS framework (Tailwind CSS) and a component library (MUI). You will build the same component using both approaches and then combine them to create a responsive navigation bar.

This exercise is split into three parts:

- **Iteration 1**: Building a product card with Tailwind CSS.
- **Iteration 2**: Rebuilding the same card with Material-UI (MUI).
- **Iteration 3**: Building a responsive navbar using both Tailwind CSS and MUI.

<br>

### Iteration 0 - Project Setup

Before we start, we need a project. We will use Vite to create a new React project with TypeScript.

In your terminal, navigate to the directory where you want to create your project and run the following command. This command creates a new project folder named `lab-css-frameworks` with a React + TypeScript template.

```shell
# Creates a new Vite project named 'lab-css-frameworks'
$ npm create vite@latest lab-css-frameworks -- --template react-ts

# Navigate into your new project directory
$ cd lab-css-frameworks

# Install the necessary dependencies
$ npm install
```

Now you have a clean, working React project. You will be working primarily in the `src/App.tsx` file.

<br>

### Iteration 1 - The Utility-First Approach: Tailwind CSS

For our first iteration, we'll build a product card using only Tailwind CSS utility classes. This approach gives us maximum control over the styling.

#### Step 1: Install and Configure Tailwind CSS

First, let's add Tailwind to our project. Run these commands in your project's terminal:

```shell
# Install Tailwind CSS and its peer dependencies
$ npm install -D tailwindcss postcss autoprefixer

# Generate the tailwind.config.js and postcss.config.js files
$ npx tailwindcss init -p
```
If you get an error message as deprecated, check the latest docs from Tailwind: 
- See https://github.com/tailwindlabs/tailwindcss/discussions/15820
- and https://tailwindcss.com/docs/upgrade-guide#using-a-javascript-config-file
- 
Next, configure Tailwind to scan your source files for classes by editing `tailwind.config.js`:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' // This is the crucial line!
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

Finally, replace the content of `./src/index.css` with the Tailwind directives:

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> [!TIP]
> You must restart your development server (`npm run dev`) after making changes to configuration files like `tailwind.config.js` for them to take effect.

#### Step 2: Build the Product Card

Now, open `src/App.tsx` and delete the boilerplate content. Your task is to build a responsive product card using only Tailwind classes.

**Your Goal:** Create a card that looks like this.

Use the following assets:

- **Image URL**: `https://images.unsplash.com/photo-1515955656352-a1fa3ffcdda9?q=80&w=2070`
- **Category**: `Running Shoes`
- **Title**: `AeroStride Pro`
- **Description**: `Experience unparalleled comfort and performance. Perfect for both road and trail.`

**Hints:**

- Use a `div` as the main container. Center it on the page using flexbox on a parent `div` with a light gray background (`bg-slate-100`, `min-h-screen`, `flex`, `items-center`, `justify-center`).
- For the card itself, use classes for max-width (`max-w-sm`), background color (`bg-white`), rounded corners (`rounded-xl`), and shadow (`shadow-lg`).
- Use responsive prefixes like `md:flex` to change the layout from vertical to horizontal on medium screens and up.
- For the text, explore utility classes for font size (`text-sm`, `text-lg`), color (`text-indigo-500`, `text-slate-500`), and weight (`font-semibold`).
- The button can be styled with classes for padding (`px-4`, `py-2`), background color (`bg-indigo-500`), and hover states (`hover:bg-indigo-600`).

<details>
  <summary><b>🏆 Click to see the solution for Iteration 1</b></summary>

```jsx
// src/App.tsx

function App() {
  return (
    // A container to center the card on the page for the demo
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* 
        Product Card Component
        We use a mix of utility classes to build the entire design.
      */}
      <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcdda9?q=80&w=2070" alt="Modern running shoe" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Running Shoes</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              AeroStride Pro
            </a>
            <p className="mt-2 text-slate-500">Experience unparalleled comfort and performance. Perfect for both road and trail.</p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

</details>

<br>

### Iteration 2 - The Component Library Approach: MUI

Now, let's see the other side of the coin. We will rebuild the same card using Material-UI (MUI), a popular React component library. This approach abstracts away the low-level styling in favor of pre-built, semantic components.

#### Step 1: Install and Configure MUI

First, add MUI to the project.

```shell
# Install MUI and its emotion styling engine
$ npm install @mui/material @emotion/react @emotion/styled

# Install Material Icons for the icons we'll use later
$ npm install @mui/icons-material
```

Next, open `index.html` in your project root and add the Roboto font link inside the `<head>` tag. MUI is designed with this font.

```html
<!-- index.html -->
<head>
  <!-- ... other head elements -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
  <title>Vite + React + TS</title>
</head>
```

#### Step 2: Build the Product Card with MUI Components

Replace the content of `src/App.tsx` again. This time, your task is to build the product card using MUI's components.

**Your Goal:** Create a card that looks like this.

**Hints:**

- You can keep the outer `div` with Tailwind classes to center the card. MUI and Tailwind work great together!
- Import the components you need from `@mui/material`. You will likely need `Card`, `CardMedia`, `CardContent`, `Typography`, `Button`, and `CardActions`.
- Use the `<Card>` component as the main container. You can pass a `sx` prop for one-off styling, like `sx={{ maxWidth: 345 }}`.
- Use `<CardMedia>` for the image. You'll need to set the `component`, `height`, `image`, and `alt` props.
- Use `<Typography>` for all text. Control the semantic element with the `component` prop (e.g., `component="div"`) and the visual style with the `variant` prop (e.g., `variant="h5"` or `variant="body2"`).
- Use the `<Button>` component. Set its style with `variant="contained"` and its size with `size="small"`.

<details>
  <summary><b>🏆 Click to see the solution for Iteration 2</b></summary>

```jsx
// src/App.tsx

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function App() {
  return (
    // We can still use Tailwind for layout!
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* 
        Product Card using MUI Components.
        The structure is defined by components like Card, CardContent, etc.
      */}
      <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
        <CardMedia component="img" height="194" image="https://images.unsplash.com/photo-1515955656352-a1fa3ffcdda9?q=80&w=2070" alt="Modern running shoe" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            AeroStride Pro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experience unparalleled comfort and performance. Perfect for both road and trail.
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <Button variant="contained" size="small">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
```

</details>

<br>

### Iteration 3 - The Hybrid Approach: Responsive Navbar

For the final iteration, let's combine the strengths of both tools. We'll use Tailwind CSS for its powerful responsive layout capabilities and MUI for its polished, interactive components.

**Your Goal:** Build a responsive navigation bar.

- On desktop screens, it should show a logo, navigation links, and a "Login" button.
- On mobile screens, the links should be hidden, and a "hamburger" menu icon should appear.

**Hints:**

- Create a new component function `Navbar()` inside `src/App.tsx`.
- Use a `<nav>` element as the main container. Style it with Tailwind classes for background (`bg-white`) and shadow (`shadow-md`).
- Use Tailwind's flexbox utilities (`flex`, `justify-between`, `items-center`) to structure the navbar content.
- Use Tailwind's responsive prefixes to control visibility. A class like `hidden` will hide an element, while `md:flex` will display it as a flex container only on medium screens and up. Conversely, `md:hidden` will hide an element on medium screens and up.
- Use regular `<a>` tags for the text-based navigation links and style them with Tailwind.
- Use MUI's `<Button>` for the "Login" button.
- Use MUI's `<IconButton>` and the `<MenuIcon>` (imported from `@mui/icons-material/Menu`) for the mobile menu button.

<details>
  <summary><b>🏆 Click to see the solution for Iteration 3</b></summary>

```jsx
// src/App.tsx

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    // Main navbar container
    // Uses Tailwind for background, padding, flexbox layout, and alignment
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>

          {/* Desktop Menu Links */}
          {/* 'hidden' by default, 'md:flex' makes it visible on medium screens and up */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            {/* MUI Button for Login */}
            <Button variant="contained" size="small">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {/* 'md:hidden' makes it disappear on medium screens and up */}
          <div className="md:hidden">
            {/* MUI IconButton for the menu */}
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  // The main app can just render the Navbar for this task
  return <Navbar />;
}

export default App;
```

</details>

<br>

## Extra Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - The official docs are your best friend.
- [Material-UI (MUI) Documentation](https://mui.com/material-ui/getting-started/) - Essential for finding components and props.
- [Tailwind CSS IntelliSense (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - A must-have extension for autocompletion and error highlighting.

**Happy coding!** :heart:
