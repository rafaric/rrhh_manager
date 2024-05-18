import { connect } from "./database";
import server from "./server";
import { PORT } from "./utils/constants";

// Conectamos a la base de datos
connect();

server.listen(PORT, () => {
  console.log(`API corriendo Correctamente en http://localhost:${PORT}/api/v1`);
});
