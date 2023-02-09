module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    
    extend: {
      colors:{
        verylightpink: "#C7C7C7",
        input: "#F7F7F7",
        hospitalgreen: "#ACD9B2",

      },
        gridTemplateRows: {
          form: "auto 1fr auto",
        }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
