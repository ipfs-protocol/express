import server from './server';

server.listen(server.get('port'), () => {
  console.log(`http://localhost:${server.get('port')}`)
});