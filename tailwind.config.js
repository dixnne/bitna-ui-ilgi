/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate que cubra todos tus archivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        'bitna-light-pink': '#FFEDFA',
        'bitna-muted-pink': '#E195AB',
        'bitna-strong-pink': '#DE3163',
        'bitna-lime-green': '#CCDF92',
      },
      fontFamily: {
        // Estas son las familias de fuentes predeterminadas de Tailwind.
        // Puedes mantenerlas, modificarlas o añadir las tuyas.
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],

        // Aquí añades tu fuente personalizada "Single Day"
        // El nombre de la clave ('single-day') será el que uses en tus clases de Tailwind (ej. font-single-day)
        // El valor es un array que coincide con la propiedad CSS font-family.
        'single-day': ['"Single Day"', 'cursive'], 

        // Si tenías otras fuentes personalizadas como 'coreano', mantenlas también:
        // 'coreano': ['"Nanum Gothic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}