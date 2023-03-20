import { Injectable } from '@angular/core';
import User from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user : User[] = [
    {
      "name": "Troy",
      "phone": "01 66 54 77 32",
      "email": "accumsan.neque@aol.net"
    },
    { "name": "Isabella", "phone": "03 43 24 22 91", "email": "eu.eros@aol.net" },
    {
      "name": "Gemma",
      "phone": "08 86 12 68 65",
      "email": "molestie@google.edu"
    },
    {
      "name": "Yeo",
      "phone": "03 21 15 26 50",
      "email": "pellentesque.massa@icloud.edu"
    },
    {
      "name": "Inga",
      "phone": "03 11 33 78 84",
      "email": "vel.lectus@icloud.edu"
    },
    {
      "name": "Mikayla",
      "phone": "04 77 58 49 33",
      "email": "mattis.integer@outlook.ca"
    },
    { "name": "Jane", "phone": "05 36 65 86 16", "email": "ac.urna.ut@aol.ca" },
    {
      "name": "Upton",
      "phone": "04 62 52 69 08",
      "email": "donec.feugiat@google.com"
    },
    {
      "name": "Cora",
      "phone": "09 54 52 73 37",
      "email": "dis.parturient@hotmail.net"
    },
    {
      "name": "Basia",
      "phone": "05 82 75 13 08",
      "email": "vitae.posuere.at@yahoo.ca"
    },
    {
      "name": "Phillip",
      "phone": "06 31 68 62 94",
      "email": "ipsum.suspendisse@hotmail.net"
    },
    {
      "name": "Ariel",
      "phone": "03 86 55 35 36",
      "email": "amet.massa@icloud.couk"
    },
    {
      "name": "Kylee",
      "phone": "03 73 52 15 46",
      "email": "neque.non.quam@icloud.edu"
    },
    {
      "name": "Craig",
      "phone": "03 99 64 91 87",
      "email": "nunc.ac.mattis@aol.couk"
    },
    {
      "name": "Kessie",
      "phone": "09 35 47 52 41",
      "email": "auctor.velit@aol.ca"
    },
    {
      "name": "Murphy",
      "phone": "05 87 28 85 57",
      "email": "nisi.mauris.nulla@protonmail.ca"
    },
    {
      "name": "Claire",
      "phone": "06 85 41 68 84",
      "email": "ligula.aenean@protonmail.org"
    },
    {
      "name": "Leilani",
      "phone": "07 21 62 36 63",
      "email": "ornare.sagittis.felis@yahoo.org"
    },
    {
      "name": "Noel",
      "phone": "01 43 46 82 27",
      "email": "vehicula.pellentesque@google.net"
    },
    {
      "name": "Cadman",
      "phone": "05 24 62 53 58",
      "email": "eget.dictum@google.edu"
    },
    {
      "name": "Keefe",
      "phone": "03 03 63 31 86",
      "email": "risus.morbi@protonmail.net"
    },
    {
      "name": "Alec",
      "phone": "08 90 50 97 22",
      "email": "ipsum.primis@aol.org"
    },
    {
      "name": "Tatiana",
      "phone": "05 30 51 60 43",
      "email": "amet@hotmail.couk"
    },
    {
      "name": "Sierra",
      "phone": "02 41 83 69 53",
      "email": "aliquam@hotmail.edu"
    },
    {
      "name": "Cecilia",
      "phone": "06 57 21 25 74",
      "email": "vulputate.dui.nec@google.org"
    },
    {
      "name": "Arthur",
      "phone": "07 43 94 56 85",
      "email": "libero.at@icloud.ca"
    },
    {
      "name": "Jenette",
      "phone": "02 73 68 37 86",
      "email": "iaculis.enim@icloud.net"
    },
    { "name": "Kyle", "phone": "07 79 17 76 54", "email": "per@yahoo.com" },
    {
      "name": "Garrett",
      "phone": "07 37 76 38 88",
      "email": "dapibus@outlook.com"
    },
    { "name": "May", "phone": "09 65 85 35 24", "email": "amet@yahoo.edu" },
    {
      "name": "Delilah",
      "phone": "09 84 57 54 38",
      "email": "egestas.a.dui@hotmail.couk"
    },
    {
      "name": "Cassidy",
      "phone": "05 29 71 87 89",
      "email": "orci.quis@protonmail.com"
    },
    {
      "name": "Kiona",
      "phone": "04 83 23 33 58",
      "email": "dui.fusce@hotmail.edu"
    },
    { "name": "Colin", "phone": "07 61 34 98 05", "email": "a@protonmail.org" },
    { "name": "Quyn", "phone": "04 38 02 46 98", "email": "ac@outlook.edu" },
    {
      "name": "Evangeline",
      "phone": "06 58 73 77 82",
      "email": "magna.tellus.faucibus@google.edu"
    },
    {
      "name": "Flynn",
      "phone": "05 84 73 52 91",
      "email": "lorem.eget@hotmail.ca"
    },
    {
      "name": "Justin",
      "phone": "07 08 61 62 17",
      "email": "commodo.tincidunt.nibh@outlook.net"
    },
    {
      "name": "Susan",
      "phone": "05 25 94 21 67",
      "email": "sed.nunc.est@google.net"
    },
    {
      "name": "Maxine",
      "phone": "05 62 65 04 57",
      "email": "adipiscing.enim@google.net"
    },
    { "name": "Alea", "phone": "06 58 50 25 80", "email": "nisi@google.org" },
    {
      "name": "Vanna",
      "phone": "05 52 14 18 60",
      "email": "at.iaculis@yahoo.ca"
    },
    {
      "name": "Blossom",
      "phone": "02 57 17 76 04",
      "email": "erat.vitae@outlook.com"
    },
    { "name": "Nola", "phone": "09 20 11 20 01", "email": "vitae@google.com" },
    {
      "name": "Kay",
      "phone": "09 11 48 67 03",
      "email": "non.hendrerit@yahoo.couk"
    },
    {
      "name": "Jessamine",
      "phone": "04 22 13 67 58",
      "email": "scelerisque.lorem@aol.ca"
    }
  ];

  constructor() { }
}
