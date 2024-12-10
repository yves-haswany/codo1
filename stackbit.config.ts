import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types"
})
import { defineStackbitConfig } from "@stackbit/types";
import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,
      environment: process.env.CONTENTFUL_ACCESS_TOKEN!,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
      useWebhookForContentUpdates: true
    })
  ],
  models: {
    page: { type: "page", urlPath: "/{slug}" }
  }
});
