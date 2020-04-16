export const autoExpand = (elm) => {
  const textarea = elm.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};
