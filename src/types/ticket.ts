export interface Category {
  id?: number,
  name?: string,
}

export interface Subcategory {
  id?: number,
  category?: string,
  name?: string,
}

export interface Urgency {
  id?: number,
  name?: string,
}

export interface NewTicket {
  category?: Category,
  subcategory?: Subcategory,
  title?: string,
  description?: string,
  urgency?: Urgency,
  value?: NewTicket,
}

export interface TicketData {
  id?: number | string,
  title?: string,
  description?: string,
  solution?: string,
  status?: string,
  urgency?: Urgency,
  priority?: string,
  category?: Category,
  subcategory?: Subcategory,
  created?: string,
  updated?: string,
}

export interface Template {
  id?: number,
  name?: string,
}

export interface CategoryOption {
  id?: number,
  name?: string,
}

export interface SubcategoryOption {
  id?: number,
  category?: string,
  name?: string,
}

export interface UrgencyOption {
  id?: number,
  name?: string,
}

export interface TicketState {
  tickets: TicketData[],
  currentTicket: TicketData,
  incidentTemplates: Template[],
  requestTemplates: Template[],
  categoryOptions: CategoryOption[],
  subcategoryOptions: SubcategoryOption[],
  urgencyOptions: UrgencyOption[],
}
