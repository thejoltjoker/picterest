import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Image search Express API",
    description: "Image search Express API",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      ImageItem: { $ref: "./models/ImageItem.ts#ImageItem" },
    },
  },
};

const outputFile = "./swagger_output.json";
const routes = ["./src/routes/index.route.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc).then(async () => {
  await import("./server"); // Your project's root file
});
