const l = str => {
  const settings = JSON.parse(localStorage.getItem('chatSettings'));
  const currentLanguage = settings.language || 'EN';
  switch (str) {
    case `Send`:
      return { EN: str, PT: `Enviar` }[currentLanguage];
    case `Settings`:
      return { EN: str, PT: `Configurações` }[currentLanguage];
    case `Chat`:
      return {
        EN: str,
        PT: `Bate-Papo`,
      }[currentLanguage];

    case `User name`:
      return {
        EN: str,
        PT: `Nome de usuário`,
      }[currentLanguage];
    case `Interface Color`:
      return {
        EN: str,
        PT: `Cor da interface`,
      }[currentLanguage];
    case `Clock Display`:
      return {
        EN: str,
        PT: `Aparência do relógio`,
      }[currentLanguage];
    case `Send messages on CTRL+ENTER`:
      return {
        EN: str,
        PT: `Enviar mensagens com CTRL+ENTER`,
      }[currentLanguage];
    case `Language`:
      return {
        EN: str,
        PT: `Língua`,
      }[currentLanguage];
    case `Light`:
      return {
        EN: str,
        PT: `Claro`,
      }[currentLanguage];
    case `Dark`:
      return {
        EN: str,
        PT: `Escuro`,
      }[currentLanguage];
    case `12 Hours`:
      return {
        EN: str,
        PT: `12 Horas`,
      }[currentLanguage];
    case `24 Hours`:
      return {
        EN: str,
        PT: `24 Horas`,
      }[currentLanguage];

    case `On`:
      return {
        EN: str,
        PT: `Ligado`,
      }[currentLanguage];
    case `Off`:
      return {
        EN: str,
        PT: `Desligado`,
      }[currentLanguage];

    case `Reset to default settings`:
      return {
        EN: str,
        PT: `Voltar a configurações padrão`,
      }[currentLanguage];
    default:
      return str;
  }
};

export default l;
