import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Picterest API",
      description: "API for saving users and favorites.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api/",
      },
    ],
    components: {
      schemas: {
        ImageItem: {
          type: "object",
          properties: {
            imageId: {
              type: "string",
            },
            title: {
              type: "string",
            },
            snippet: {
              type: "string",
            },
            link: {
              type: "string",
            },
            contextLink: {
              type: "string",
            },
            thumbnailLink: {
              type: "string",
            },
            width: {
              type: "number",
            },
            height: {
              type: "number",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            userId: {
              type: "string",
            },
            favorites: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ImageItem",
              },
            },
          },
        },
        GetFavoritesResponse: {
          type: "object",
          properties: {
            favorites: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ImageItem",
              },
            },
          },
        },
        Database: {
          type: "object",
          properties: {
            users: {
              type: "array",
              items: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },

  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
