import { defineStore } from 'pinia';
import { toRaw } from 'vue';
import router from '@/routes/router';
import ticketsData from '@/data/tickets.txt';
import {
  NewTicket,
  TicketData,
  TicketState,
} from '@/types/ticket';

export const useTicketsStore = defineStore('tickets', {
  state: (): TicketState => ({
    tickets: [],
    currentTicket: {},
    incidentTemplates: [],
    requestTemplates: [],
    categoryOptions: [],
    subcategoryOptions: [],
    urgencyOptions: [],
  }),
  getters: {
    openTickets: (state) => state.tickets.filter(item => item.status == 'Open'),
    closedTickets: (state) => state.tickets.filter(item => item.status == 'Closed'),
  },
  actions: {
    async getTickets () {
      const response = await fetch(ticketsData);
      const fileContent = await response.text();
      const {
        tickets,
        incidentTemplates,
        requestTemplates,
        categoryOptions,
        subcategoryOptions,
        urgencyOptions,
      } = JSON.parse(fileContent);
      this.tickets = tickets;
      this.incidentTemplates = incidentTemplates;
      this.requestTemplates = requestTemplates;
      this.categoryOptions = categoryOptions;
      this.subcategoryOptions = subcategoryOptions;
      this.urgencyOptions = urgencyOptions;
    },
    addTicket (ticket: NewTicket | undefined) {
      const tickets = [ ...this.tickets ];
      const now = new Date();
      const uniqueId = now.getTime().toString();
      const newTicket = {
        ...ticket,
        id: uniqueId,
        status: 'Open',
        priority: 'Low',
        created: '09-03-2023 | 17:56:20',
        updated: '09-03-2023 | 17:56:20',
      }
      tickets.push({
        ...newTicket,
        solution: '',
      });
      this.tickets = tickets;
      router.push('/tickets');
    },
    getTicket (id: number | string) {
      const tickets = toRaw(this.tickets);
      const ticket = tickets.find(item => item.id == id);
      this.currentTicket = toRaw(ticket) as TicketData;
    },
    resolveTicket (ticket: TicketData, solution: string) {
      const tickets = [ ...this.tickets ];
      const ticketData = toRaw(ticket);
      const index = tickets.findIndex(item => item.id === ticket.id);
      const updatedTicketData = {
        ...ticketData,
        solution,
        status: 'Closed',
      };
      tickets[index] = updatedTicketData;
      this.tickets = tickets;
      router.push('/tickets');
    },
    reopenTicket (ticket: TicketData, id: string | number) {
      const tickets = [ ...this.tickets ];
      const ticketData = toRaw(ticket);
      const index = tickets.findIndex(item => item.id === ticket.id);
      const updatedTicketData = {
        ...ticketData,
        status: 'Open',
      };
      tickets[index] = updatedTicketData;
      this.tickets = tickets;
      this.getTicket(id);
    },
  },
});
