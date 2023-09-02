import http from "http";

import chalk from "chalk";

const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({ name: "Tu Nombre", message: "Hola desde mi servidor" })
  );
});

server.listen(port, hostname, () => {
  console.log(chalk.green(`Servidor corriendo en http://${hostname}:${port}/`));
});
