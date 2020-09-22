export interface Itestimonial {
  id: string;
  name: string;
  class: string;
  role: string;
  content: string;
}
export interface Icertification {
  class: string;
  title: string;
  issuedby: string;
  date: string;
  credentials?: string;
  url?: string;
}
export interface Icollege {
  name: string;
  class: string;
  degree: string;
  cgpa: string;
  url: string;
}
