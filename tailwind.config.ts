import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        desert: {
          sunset: "#FF7E5F",
          dusk: "#FEB47B",
          sand: "#F9DEB3",
          cactus: "#84A98C",
          night: "#2D3047",
        },
        lotus: {
          primary: "#9b87f5",
          secondary: "#7E69AB",
          tertiary: "#6E59A5",
          dark: "#1A1F2C",
          light: "#D6BCFA",
          subtle: "#F1F0FB",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(155, 135, 245, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(155, 135, 245, 0.8)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "highlight-drop": {
          "0%, 100%": { boxShadow: "0 0 0 2px rgba(155, 135, 245, 0.3)" },
          "50%": { boxShadow: "0 0 0 4px rgba(155, 135, 245, 0.6)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-opacity": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 3s ease-in-out infinite",
        "cursor-blink": "cursor-blink 1s ease-in-out infinite",
        pop: "pop 0.5s ease-in-out",
        glow: "glow 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "highlight-drop": "highlight-drop 1.5s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "pulse-opacity": "pulse-opacity 2s ease-in-out infinite",
      },
      fontFamily: {
        desert: ["Pacifico", "cursive"],
        oasis: ["Quicksand", "sans-serif"],
        mirage: ["Montserrat Alternates", "sans-serif"],
        lotus: ["Nunito", "sans-serif"],
        creative: ["Comfortaa", "cursive"],
        marker: ["Permanent Marker", "cursive"],
        sketch: ["Architects Daughter", "cursive"],
        elegant: ["Playfair Display", "serif"],
        playful: ["Fredoka One", "cursive"],
        handwritten: ["Dancing Script", "cursive"],
      },
      cursor: {
        desert:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjg3NSA0LjU2MjVDMTIuODc1IDMuODk2OTcgMTIuMzU1NSAzLjM3NSAxMS42ODc1IDMuMzc1QzExLjA1MiAzLjM3NSAxMC41NjI1IDMuODY0NSAxMC41IDQuNVY3LjEyNUM5LjkzODQ4IDYuNTIwNSA5LjE0MzUgNi4xMjUgOC4yNSA2LjEyNUM2LjUxNDY1IDYuMTI1IDUuMTI1IDcuNTE0NjUgNS4xMjUgOS4yNUM1LjEyNSAxMC4xNDM1IDUuNTIwNSAxMC45Mzg1IDYuMTI1IDExLjVIMy41QzIuODY0NSAxMS41NjI1IDIuMzc1IDEyLjA1MiAyLjM3NSAxMi42ODc1QzIuMzc1IDEzLjM1NSAyLjg5Njk3IDEzLjg3NSAzLjU2MjUgMTMuODc1SDE0LjEyNUMxNC40NDY5IDEzLjg3NSAxNC43MTg5IDE0IDE0LjkwNjIgMTQuMTg3NUMxNS4wOTM4IDE0LjM3NSAxNS4yMTg4IDE0LjY0NyAxNS4yMTg4IDE0Ljk2ODhDMTUuMjE4OCAxNS4zMTI1IDE1LjA5MzggMTUuNjI1IDE0LjkwNjIgMTUuODEyNUMxNC43MTg5IDE2IDE0LjQ0NjkgMTYuMTI1IDE0LjEyNSAxNi4xMjVIMTAuODEyNUM5LjQ3OTY3IDE2LjEyNSA4LjM3NSAxNy4yMjk3IDguMzc1IDE4LjU2MjVDOC4zNzUgMTkuODk1MyA5LjQ3OTY3IDIxIDEwLjgxMjUgMjFIMTkuMTg3NUMyMC41MjAzIDIxIDIxLjYyNSAxOS44OTUzIDIxLjYyNSAxOC41NjI1QzIxLjYyNSAxNy4yMjk3IDIwLjUyMDMgMTYuMTI1IDE5LjE4NzUgMTYuMTI1SDE4LjQzNzVDMTguNzgxMiAxNS43NSAxOSAxNS4yNSAxOSAxNC42ODc1QzE5IDEzLjQyMTkgMTguMTU2MiAxMi4zNzUgMTcgMTIuMTI1VjkuMjVDMTcgNy41MTQ2NSAxNS42MTA0IDYuMTI1IDEzLjg3NSA2LjEyNUMxMi45ODE1IDYuMTI1IDEyLjE4NjUgNi41MjA1IDExLjYyNSA3LjEyNVY0LjVDMTEuNjI1IDQuNTMxMjUgMTIuODc1IDQuNTMxMjUgMTIuODc1IDQuNTYyNVoiIGZpbGw9IiNGRjdFNUYiLz4KPC9zdmc+Cg==), auto",
        lotus:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTJDMTUuNSA4LjUgMTcuNSA2LjUgMTkgNUMyMSAzIDEyIDguNSA2IDMuNUM1LjM4OTk4IDIuODg5OTcgMSA4LjUgMiAxMy41QzIuNSAxNiA0LjUgMTguNSA3IDE5LjVDOC41IDIwIDExLjUgMjMgMTIgMTkuNUMxMi41IDIzIDE1LjUgMjAgMTcgMTkuNUMxOS41IDE4LjUgMjEuNSAxNiAyMiAxMy41QzIzIDguNSAxOC42MSAyLjg4OTk3IDE4IDMuNUMxMS41IDguNSAzIDMgNSA1QzYuNSA2LjUgOC41IDguNSAxMiAxMlpNMTIgMTRDMTEgMTQuNyAyIDE3IDYgMjFDNC41IDE4LjUgOCAxNSAxMCAxNS41QzEyIDE2IDExLjUgMTkgMTIgMTdDMTIuNSAxOSAxMiAxNiAxNCAxNS41QzE2IDE1IDIwIDE4LjUgMTggMjFDMjIgMTcgMTMgMTQuNyAxMiAxNFoiIGZpbGw9IiM5Yjg3ZjUiLz48L3N2Zz4=), auto",
        pencil:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuMzE5NiAzLjMxOTU3QzE2LjcyODkgMi45MTAwNyAxNy40MDIgMi44OTU3NCAxNy44MzIzIDMuMjc1NThMMTcuOTQyNiAzLjM4MDQzQzE4LjM4NzcgMy44MjU1NyAxOC40MDIgNC41MjU5IDE3Ljk0MjYgNC45NDA3NEwxNi45MDI2IDUuODA0MDdMMTUuMjc5NiA0LjE4MjQxTDE2LjMxOTYgMy4zMTk1N1pNOC45OTk2MSAxMS40NjI0TDE0LjIxOTYgNi4yNDI0MUwxNS44NzI2IDcuODk0MDdMMTAuNjUyNiAxMy4xMTQxQzEwLjUxMDkgMTMuMjU1NyAxMC4zMzcyIDEzLjM2MjQgMTAuMTQ1MSAxMy40MjI0TDcuOTk5NjEgMTRMOC41Nzk2MSAxMS44NTc0QzguNjM5NjEgMTEuNjY1NyA4Ljc1OTYxIDExLjQ5MjQgOC45MDAyNyAxMS4zNTA4QzguOTMzNiAxMS4zMTc0IDguOTY2OTQgMTEuMjk5IDguOTk5NiAxMS40NjI0WiIgZmlsbD0iIzliODdmNSIvPjwvc3ZnPg==), auto",
        sparkle:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgNEwxMiAxMkwyMCAxNEwxMiAxNkwxMCAyNEw4IDE2TDAgMTRMOCAxMkwxMCA0WiIgZmlsbD0iIzliODdmNSIvPjwvc3ZnPg==), auto",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
