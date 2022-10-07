import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Portfolio> {
    return this.http.get<Portfolio>('assets/data/portfolio.json');
  }
}

export class Portfolio {
  person: Person;
  constructor(obj?: any) {
    this.person = obj?.person || null;
  }
}

export class Person {
  id: string;
  name: string;
  age: number;
  degree: string;
  email: string;
  phone: string;
  address: Address;
  summary: string;
  image: Image;
  social: Social;
  education: Education[];
  skills: Skill[];
  jobs: Job[];
  projects: Project[];
  user: User;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
    this.age = obj?.age || null;
    this.degree = obj?.degree || null;
    this.email = obj?.email || null;
    this.phone = obj?.phone || null;
    this.address = obj?.address || null;
    this.summary = obj?.summary || null;
    this.image = obj?.image || null;
    this.social = obj?.social || null;
    this.education = obj?.education || null;
    this.skills = obj?.skills || null;
    this.jobs = obj?.jobs || null;
    this.projects = obj?.projects || null;
    this.user = obj?.user || null;
  }
}

export class Address {
  id: string;
  homeAddress: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.homeAddress = obj?.homeAddress || null;
  }
}

export class Image {
  id: string;
  path: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.path = obj?.path || null;
  }
}

export class Social {
  id: string;
  link: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.link = obj?.link || null;
  }
}

export class Education {
  id: string;
  reference: string;
  category: string;
  description: string;
  location: string;
  modality: string;
  schedule: number;
  certified: boolean;
  date: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.reference = obj?.reference || null;
    this.category = obj?.category || null;
    this.description = obj?.description || null;
    this.location = obj?.location || null;
    this.modality = obj?.modality || null;
    this.schedule = obj?.schedule || null;
    this.certified = obj?.certified || null;
    this.date = obj?.date || null;
  }
}

export class Skill {
  id: string;
  name: string;
  tools: Tool[];
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
    this.tools = obj?.tools || null;
  }
}

export class Tool {
  id: string;
  name: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
  }
}

export class Job {
  id: string;
  position: string;
  description: string;
  startDate: string;
  finishDate: string;
  achievements: Achievement[];
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.position = obj?.position || null;
    this.description = obj?.description || null;
    this.startDate = obj?.startDate || null;
    this.finishDate = obj?.finishDate || null;
    this.achievements = obj?.achievements || null;
  }
}

export class Achievement {
  id: string;
  description: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.description = obj?.description || null;
  }
}

export class Project {
  id: string;
  name: string;
  description: string;
  releaseDate: string;
  image: Image;
  technologies: Technology[];
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
    this.description = obj?.description || null;
    this.releaseDate = obj?.releaseDate || null;
    this.image = obj?.image || null;
    this.technologies = obj?.technologies || null;
  }
}

export class Technology {
  id: string;
  name: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
  }
}

export class User {
  id: string;
  username: string;
  password: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.username = obj?.username || null;
    this.password = obj?.password || null;
  }
}
