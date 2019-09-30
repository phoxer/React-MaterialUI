const useLanguage = lang => {
  const texts = {
    es: {
      moduleTitle: 'Ejemplos de Dialogos',
      buttons: [
        'EMULAR CARGA',
        'ABRIR MENSAJE',
        'ABRIR CONTENIDO',
        'EJECUTAR ACCIÓN'
      ]
    },
    en: {
      moduleTitle: 'Dialog Samples',
      buttons: [
        'LOADING DIALOG',
        'MESSAGE DIALOG',
        'CONTENT DIALOG',
        'ACTION DIALOG'
      ]
    }
  };
  return texts[lang];
};

export default useLanguage;
