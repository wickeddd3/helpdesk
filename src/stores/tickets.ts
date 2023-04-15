import { defineStore } from 'pinia';
import { toRaw } from 'vue';
import router from '@/routes/router';
import ticketsData from '@/data/tickets.txt';

interface Category {
  id?: Number,
  name?: String,
}

interface Subcategory {
  id?: Number,
  category?: String,
  name?: String,
}

interface Urgency {
  id?: Number,
  name?: String,
}

interface TicketData {
  id?: Number | String,
  title?: String,
  description?: String,
  solution?: String,
  status?: String,
  urgency?: Urgency,
  priority?: String,
  category?: Category,
  subcategory?: Subcategory,
  created?: String,
  updated?: String,
}

interface Template {
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
  incidentTemplates: Template[],
  requestTemplates: Template[],
  categoryOptions: CategoryOption[],
  subcategoryOptions: SubcategoryOption[],
  urgencyOptions: UrgencyOption[],
}

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
    addTicket (ticket: TicketData) {
      const tickets = [ ...this.tickets ];
      tickets.push({
        ...ticket,
        solution: '',
      });
      this.tickets = tickets;
      router.push('/tickets');
    },
    getTicket (id: Number | String) {
      const tickets = toRaw(this.tickets);
      const ticket = tickets.find(item => item.id == id);
      this.currentTicket = toRaw(ticket) as TicketData;
    },
    resolveTicket (ticket: TicketData, solution: String) {
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
    reopenTicket (ticket: TicketData, id: String | Number) {
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
