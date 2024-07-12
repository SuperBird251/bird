// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: "your-client-id",
  // Get this from TinaCMS
  token: "your-token",
  // Get this from TinaCMS
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "featured_image",
            label: "Featured Image"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "featured_image",
            label: "Featured Image"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
