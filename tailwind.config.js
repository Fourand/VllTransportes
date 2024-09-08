/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      DEFAULT: "1rem",
    },
    backgroundImage: {
      quotation: "url('assets/images/quotation-background.jpg')",
      "index-image": "url('assets/images/index-background.jpg')",
      "mobile-index-image": "url('assets/images/mobile-index-background.jpg')",
    },
  },
};
