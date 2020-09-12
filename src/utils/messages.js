const generateMessage = (username, text, color) => {
  return {
    username,
    text,
    createdAt: new Date().getTime(),
    color,
  };
};

const generateLocationMessage = (username, url, color) => {
  return {
    username,
    url,
    createdAt: new Date().getTime(),
    color,
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage
};
