import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { error } from "console";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tour-management:tour-management110@atlascluster.gbbuibj.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=AtlasCluster"
    );

    console.log("connected to db");
    server = app.listen(5000, () => {
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
// unhandled rejection error
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection detected... server shutting down", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// uncaught rejection error
process.on("uncaughtException", (err) => {
  console.log(
    "uncaught exception rejection detected... server shutting down",
    err
  );

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
// signal termination error
process.on("SIGTERM", () => {
  console.log(
    "signal termination rejection detected... server shutting down"
  );

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
// signal Initialization error
process.on("SIGINT", () => {
  console.log(
    "SIGINT termination rejection detected... server shutting down"
  );

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

/** unhandled rejection error
 Promise.reject(new Error("uncaught exception rejection detected."))
**/
/** uncaught rejection error
throw new Error("I forgot to handle this local error");
**/

/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination error
 **/
