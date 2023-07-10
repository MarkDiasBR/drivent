import { prisma } from "@/config";

async function getTicketTypes() {
  const result = await prisma.ticketType.findMany();
  console.log(result)
  return result;
}

const ticketRepository = {
  getTicketTypes
};

export default ticketRepository;
  