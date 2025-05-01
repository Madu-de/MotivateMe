const getValue = (name: string) => {
  return process.env[name] || '';
};

export default () => ({
  http: {
    port: getValue('MOTIVATEME_BACKEND_PORT'),
  },
  database: {
    user: getValue('MOTIVATEME_BACKEND_DATABASE_USER'),
    name: getValue('MOTIVATEME_BACKEND_DATABASE_NAME'),
    password: getValue('MOTIVATEME_BACKEND_DATABASE_PASSWORD'),
  },
});
