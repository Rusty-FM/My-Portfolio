/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  // darkmode yang media tampa tombol toggle mengikuti sistem operasi hp nya ketika dark ngikut dark ketika light ngikut light
  // darkMode: 'media',
  darkMode: "class",
  // theme mah menimpa css taiwind
  theme: {
    // css reset contume sendiri
    container: {
      center: true,
      padding: "16px",
    },
    // extend mah menambah kan style sendiri
    extend: {
      colors: {
        rustyPrimary: "#14b8a6",
        rustySecondary: "#64748b",
        rustySlate: "#0f172a",
      },
      // lebar layar di tentukan sendiri
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
