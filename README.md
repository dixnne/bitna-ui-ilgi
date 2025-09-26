# 빛나의 일기 (Bitna's Diary)

Welcome to **빛나의 일기** (Bitna's Diary)! This project is a creative and interactive web application designed as a personal diary to document the journey of learning the Korean language. Each "unit" of the diary is a unique, self-contained web page that showcases different aspects of the Korean language and culture, from self-introductions to travel memories.

The application is built with React and Vite, featuring a component-based architecture and interactive, visually appealing user interfaces.

## Project Purpose

The main goal of this project is to serve as a practical and engaging portfolio piece that demonstrates proficiency in:
- **Frontend Development**: Using React, Vite, and Tailwind CSS to build a modern, responsive web application.
- **Component-Based Architecture**: Structuring the application into reusable and well-documented components.
- **Creative UI/UX Design**: Creating fun and interactive user experiences for each diary entry.
- **Korean Language**: Applying language skills in a real-world project context.

## Project Structure

The project is organized into the following main directories:
- `src/components`: Contains reusable components used across multiple pages (e.g., `Navbar`, `Footer`).
- `src/pages`: Contains the main pages of the application, such as the `Cover`, `Index`, and `ConclusionsPage`.
- `src/pages/units`: Contains the individual diary entry pages, each corresponding to a learning unit.
- `src/assets`: Contains static assets like images and fonts.

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or a compatible package manager like Yarn or pnpm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/dixnne/bitna-ui-ilgi.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd bitna-ui-ilgi
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can run the application in development mode:

```sh
npm run dev
```

This will start the Vite development server, and you can view the application by opening your web browser and navigating to `http://localhost:5173` (or the URL provided in your terminal). The server supports Hot Module Replacement (HMR), so any changes you make to the source code will be reflected in the browser automatically.

### Building for Production

To create a production-ready build of the application, run the following command:

```sh
npm run build
```

This will generate a `dist` directory containing the optimized and minified static assets for deployment.