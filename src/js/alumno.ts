export type Turn = 'm' | 't' | 'n';

export type Course = 't' | 'a' | 'r';

export type Email = string;

export type Alumno = {
  name: string;
  email: Email;
  info: string;
  isOk: boolean;
  turn: Turn;
  course: Course;
};
