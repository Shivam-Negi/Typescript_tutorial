enum TicketStatus {
    INITIALISED = "initialised",
    CANCELLED = "cancelled",
    CLOSED = "closed"
}

const Ticket = {
    id : 1,
    title : "new ticket",
    status : TicketStatus.CLOSED
}

console.log(Ticket);

if(Ticket.status == TicketStatus.CLOSED)
    console.log("done");


    
