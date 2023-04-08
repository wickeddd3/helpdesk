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

interface IncidentTemplate {
  id?: Number,
  name?: String,
}

interface CategoryOption {
  id?: Number,
  name?: String,
}

interface SubcategoryOption {
  id?: Number,
  category?: String,
  name?: String,
}

interface UrgencyOption {
  id?: Number,
  name?: String,
}

interface TicketState {
  tickets: TicketData[],
  currentTicket: TicketData,
  incidentTemplates: IncidentTemplate[],
  categoryOptions: CategoryOption[],
  subcategoryOptions: SubcategoryOption[],
  urgencyOptions: UrgencyOption[],
}

export const useTicketsStore = defineStore('tickets', {
  state: (): TicketState => ({
    tickets: [],
    currentTicket: {},
    incidentTemplates: [],
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
        categoryOptions,
        subcategoryOptions,
        urgencyOptions,
      } = JSON.parse(fileContent);
      this.tickets = tickets;
      this.incidentTemplates = incidentTemplates;
      this.categoryOptions = categoryOptions;
      this.subcategoryOptions = subcategoryOptions;
      this.urgencyOptions = urgencyOptions;
    },
  },
});
