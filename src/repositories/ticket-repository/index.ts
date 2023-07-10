import { prisma } from "@/config";

async function getTicketTypes() {
  const result = await prisma.ticketType.findMany();

  return result;
}

async function getUserTicket(userId: number) {
  const result = await prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId
      }
    },
    include: {
      TicketType: true
    }
  });

  return result;
}

const ticketRepository = {
  getTicketTypes,
  getUserTicket
};

export default ticketRepository;
  