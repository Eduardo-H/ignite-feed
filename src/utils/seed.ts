import { Author } from '../App';

export interface Post {
  id: number;
  author: Author;
  content: {
    type: string;
    content: string;
  }[],
  publishedAt: Date;
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Eduacator @ Rockeseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal!' },
      { type: 'paragraph', content: 'Hoje eu comecei a estudar a base do React para poder reforçar meus conhecimentos. Espero que seja uma experiência gratificante' },
      { type: 'link', content: 'meusite.com.br' }
    ],
    publishedAt: new Date('2023-01-01 12:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev!' },
      { type: 'paragraph', content: 'Já está no ar o mais novo capítulo da trilha de React do Ignite, vem conferir!' },
      { type: 'link', content: 'rocketseat.com.br/ignite' }
    ],
    publishedAt: new Date('2023-01-01 09:20:00')
  }
]