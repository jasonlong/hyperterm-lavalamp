
const backgroundColor = '#282b35'
const foregroundColor = '#eff0f0'
const cursorColor = '#1aa8fc'
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#f90104', // red
  '#00f300', // green
  '#fcd700', // yellow
  '#1aa8fc', // blue
  '#b746f5', // pink
  '#1aa8fc', // cyan
  '#cbd0d7', // light gray
  '#878e9a', // medium gray
  '#f90104', // red
  '#00f300', // green
  '#fcd700', // yellow
  '#1aa8fc', // blue
  '#b746f5', // pink
  '#1aa8fc', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #252730 !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
