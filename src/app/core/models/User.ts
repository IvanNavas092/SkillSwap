import { Skill } from "./skill";

export interface User {
  id: number;
  full_name: String,
  username: string;
  email: string;
  password: string;
  skills: Skill[]; // ID
  interests: Skill[]; // ID
  skills_details: Skill[];  // for read  (with names)
  interests_details: Skill[]; // for read (with names)
  // Extras
  age: number;
  gender: string;
  description: string;
  location: string;
  avatar?: | number;
  rating_count : number // cantidad de ratings
  average_rating : number // media de ratings
  interactions: number;
  last_login: Date;


}

export interface UserResponse {
  user: {
    id: number;
    username: string;
    email: string;
    full_name: string;
    description?: string;
    avatar?: number;
    skills: any[];
    interests: any[];
    rating_count : number 
    average_rating : number 
  }
}

export interface UserUpdate {
  full_name: string;
  username: string;
  email: string;
  age: number;
  location: string;
  gender: string;
  description: string;
  skills: Skill[]; 
  interests: Skill[]; 
  avatar?: number;
}
