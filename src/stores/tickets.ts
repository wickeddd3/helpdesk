import { defineStore } from 'pinia';
import ticketsData from '@/data/tickets.txt';

interface TicketData {
  id?: Number,
  title?: String,
  description?: String,
  status?: String,
  urgency?: String,
  priority?: String,
  category?: String,
  subcategory?: String,
  created?: String,
  updated?: String,
}

interface TicketState {
  tickets: TicketData[],
  currentTicket: TicketData,
}

export const useTicketsStore = defineStore('tickets', {
  state: (): TicketState => ({
    tickets: [],
    currentTicket: {},
  }),
  getters: {
    openTickets: (state) => state.tickets.filter(item => item.status == 'Open'),
    closedTickets: (state) => state.tickets.filter(item => item.status == 'Closed'),
  },
  actions: {
    async getTickets () {
      const response = await fetch(ticketsData);
      const fileContent = await response.text();
      const { tickets } = JSON.parse(fileContent);
      this.tickets = tickets;
    },    
  },
});
