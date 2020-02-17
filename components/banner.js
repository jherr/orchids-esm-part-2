export default (el, { text }) => {
  el.innerHTML = `
<div class="mui-container" style="font-size: xx-large;">
  Banner: ${text}
</div>`;
};
