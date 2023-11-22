import { fastify } from "fastify";
import { getAllPromptRoute } from "./routes/get-all-prompts";
import { getAllTopicSelectionRoute } from "./routes/get-all-topic-selection";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.addHook('preHandler', (request, reply, done) => {
  reply.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (request.method === 'OPTIONS') {
    reply.status(204).send('');
  } else {
    done();
  }
});

app.register(getAllPromptRoute)
app.register(getAllTopicSelectionRoute)
app.register(generateAiCompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
})
