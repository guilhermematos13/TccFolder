import { FastifyInstance } from "fastify";
import { z } from "zod";
import { streamToResponse, OpenAIStream } from "ai";
import { openai } from "../lib/openai";

export async function generateAiCompletionRoute(app: FastifyInstance) {
  app.post("/ai/complete", async (req, reply) => {
    const bodySchema = z.object({
      selections: z.array(z.string()),
      localization: z.string(),
      prompt: z.string(),
      temperature: z.number().min(0).max(1).default(0.5),
      startDate: z.string(),
      endDate: z.string(),
    });

    const { selections, prompt, temperature, localization, startDate, endDate } = bodySchema.parse(req.body);
    
    const promptMessage = prompt.replace('{selections}', selections.join(', ')).replace('{localization}', localization).replace('{startDate}', startDate).replace('{endDate}', endDate)

    
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        temperature,
        messages: [{ role: "user", content: promptMessage }],
        // stream: true,
      });

      // for await (const part of response) {
      //   process.stdout.write(part.choices[0]?.delta?.content || '');
      // }
      
      // const stream = OpenAIStream(response)
      
      // streamToResponse(stream, reply.raw, {
      //     headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      //       }
      //     });

      return response.choices[0].message.content
  });
}