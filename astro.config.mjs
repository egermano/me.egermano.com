import { defineConfig } from "astro/config";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [
    yeskunallumami({
      id: "c28a2a0a-d725-4ee0-81bd-605d439e3fb3",
      endpointUrl: "https://umami.herbie-hancock.egermano.com",
    }),
  ],
});
