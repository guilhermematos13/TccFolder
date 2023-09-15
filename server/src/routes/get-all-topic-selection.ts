import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllTopicSelectionRoute(app: FastifyInstance) {
    app.get("/selection-topic", async () => {
        const selectionTopics = await prisma.topicSelection.findMany()
      
        return selectionTopics
      });
      
}