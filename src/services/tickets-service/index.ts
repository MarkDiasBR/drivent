import { TicketType } from "@prisma/client";
import ticketRepository from "@/repositories/ticket-repository";

async function getTicketTypes() {
    const result = await ticketRepository.getTicketTypes();

    return result;
}

async function getUserTicket(userId: number) {
    
    const result = await ticketRepository.getUserTicket(userId);

    return result;
}

const ticketsService = {
    getTicketTypes,
    getUserTicket
};

export default ticketsService;
