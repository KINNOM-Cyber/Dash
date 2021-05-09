module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
  client.user.setPresence({ activity: { name: 'KINNOM' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
  
};
