export const findByTestAttr = (component, attr) => {
  const warpper = component.find(`[data-test='${attr}']`);
  return warpper;
};
