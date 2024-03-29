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
  phone: Phone[];
  address: Address[];
  summary: string;
  image: Image;
  social: Social[];
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


export class Phone {
  id: string;
  type: string;
  number: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.type = obj?.type || null;
    this.number = obj?.number || null;
  }
}


export class Address {
  id: string;
  type: string;
  description: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.type = obj?.type || null;
    this.description = obj?.description || null;
  }
}

export class Image {
  id: string;
  alt: string;
  path: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.alt = obj?.alt || null;
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
  category: Category;
  description: string;
  location: string;
  modality: Modality;
  schedule: number;
  date: string;
  isCertified: boolean;
  certificate: Certificate;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.category = obj?.category || null;
    this.description = obj?.description || null;
    this.location = obj?.location || null;
    this.modality = obj?.modality || null;
    this.schedule = obj?.schedule || null;
    this.date = obj?.date || null;
    this.isCertified = obj?.isCertified || null;
    this.certificate = obj?.certificate || null;
  }
}


export class Category {
  id: string;
  name: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
  }
}


export class Modality {
  id: string;
  type: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.type = obj?.type || null;
  }
}


export class Certificate {
  id: string;
  url: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.url = obj?.url || null;
  }
}

export class Skill {
  id: string;
  name: string;
  technologies: Technology[];
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
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
