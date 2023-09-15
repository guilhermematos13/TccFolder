import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptRoute } from "./routes/get-all-prompts";
import { getAllTopicSelectionRoute } from "./routes/get-all-topic-selection";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(getAllPromptRoute)
app.register(getAllTopicSelectionRoute)
app.register(generateAiCompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
