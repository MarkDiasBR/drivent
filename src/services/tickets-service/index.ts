import { TicketType } from "@prisma/client";
import ticketRepository from "@/repositories/ticket-repository";

async function getTicketTypes() {
    const result = await ticketRepository.getTicketTypes();

    return result;
}

const ticketsService = {
    getTicketTypes,
};

export default ticketsService;
