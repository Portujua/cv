export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location?: string;
  achievements: string[];
}

export interface Resume {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  position: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  whatsappUrl: string;
  skills: string[];
  experiences: Experience[];
  // education: [],
  // languages: [],
  // projects: [],
}
