export const langsActions = {
  CHANGE_LANG: 'CHANGE_LANG'
};
export const langReducer = {
  [langsActions.CHANGE_LANG]: (state, lang) => {
    return { ...state, lang: lang };
  }
};

export const langs = [
  {
    title: 'ESPAÑOL',
    code: 'es'
  },
  {
    title: 'ENGLISH',
    code: 'en'
  }
];
