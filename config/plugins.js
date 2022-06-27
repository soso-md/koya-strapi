// module.exports = () => {
//   return {
//     ckeditor: true,
//     upload: {
//       breakpoints: {
//         xlarge: 1920,
//         large: 1000,
//         medium: 750,
//         small: 500,
//         xsmall: 64,
//       },
//     },
//   };
// };

module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
});
