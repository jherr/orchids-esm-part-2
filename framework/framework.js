let _store = null;

export const setStore = (store) => {
  _store = store;
}

export const getStore = () => _store;

export const loadComponents = () => {
  document.querySelectorAll('component').forEach(el => {
    const props = {};
    Array.from(el.attributes).forEach(({ name, value }) => {
      props[name] = value;
    });
    import(el.attributes.src.value)
      .then((mod) => {
        mod.default(el, props);
      });
  });
};