/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",
        surface: "#FFFFFF",
        text: "#0F172A",
        muted: "#475569",
        border: "#E2E8F0",
        primary: "#1D4ED8",
        primaryDark: "#1E40AF",
        accent: "#16A34A",
        danger: "#DC2626",
        warning: "#D97706",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        softSm: "0 6px 18px rgba(2, 6, 23, 0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
};
