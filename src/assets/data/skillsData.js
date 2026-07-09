import cImg from '@/assets/images/skills/c.png';
import pythonImg from '@/assets/images/skills/python.png';
import javascriptImg from '@/assets/images/skills/javascript.png';
import htmlImg from '@/assets/images/skills/html.png';
import cssImg from '@/assets/images/skills/css.png';
import postgresImg from '@/assets/images/skills/postgres.png';
import firebirdImg from '@/assets/images/skills/firebird.png';
import dockerImg from '@/assets/images/skills/docker.png';
import nginxImg from '@/assets/images/skills/nginx.png';

export const skillsData = [
  {
    id: "c",
    alt: "C",
    src: cImg,
    name: { "pt-br": "C", "en-us": "C" },
    description: {
      "pt-br": "Utilizei na disciplina de Algoritmos e Estruturas de Dados durante a faculdade, desenvolvendo desde algoritmos de ordenação e busca até manipulação de arquivos e ponteiros. Normalmente utilizo C em projetos hobby, quando eu quero entender mais a fundo o funcionamento de algo.",
      "en-us": "I used it in Algorithms and Data Structures during college, developing sorting and search algorithms, file manipulation, and pointers. I normally use C in hobby projects, when I want to understand more deeply how something works."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "python",
    alt: "Python",
    src: pythonImg,
    name: { "pt-br": "Python", "en-us": "Python" },
    description: {
      "pt-br": "Minha linguagem principal para back-end. Utilizo diariamente o framework FastAPI e também Django Rest Framework para criar e manter APIs REST completas com integração com banco de dados e outros serviços.",
      "en-us": "My primary language for backend development. I daily use the FastAPI framework and also Django Rest Framework to create and maintain complete REST APIs with database and other service integrations."
    },
    level: { "pt-br": "Avançado", "en-us": "Advanced" }
  },
  {
    id: "javascript",
    alt: "JavaScript",
    src: javascriptImg,
    name: { "pt-br": "JavaScript", "en-us": "JavaScript" },
    description: {
      "pt-br": "Utilizo no desenvolvimento web na parte do front-end com React ou manipulando diretamente o DOM.",
      "en-us": "I use it in web development on the front-end with React or directly manipulating the DOM."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "html",
    alt: "HTML",
    src: htmlImg,
    name: { "pt-br": "HTML", "en-us": "HTML" },
    description: {
      "pt-br": "Acompanha meus estudos em desenvolvimento web desde o início. Utilizo HTML semântico em todos os meus projetos front-end, garantindo acessibilidade e uma boa estrutura de página.",
      "en-us": "It has been part of my web development journey since the beginning. I use semantic HTML in all my front-end projects, ensuring accessibility and good page structure."
    },
    level: { "pt-br": "Avançado", "en-us": "Advanced" }
  },
  {
    id: "css",
    alt: "CSS",
    src: cssImg,
    name: { "pt-br": "CSS", "en-us": "CSS" },
    description: {
      "pt-br": "Aprendi no início da minha jornada como desenvolvedor. Embora não seja a minha praia eu consigo compreender e mexer.",
      "en-us": "I learned it at the start of my developer journey. Although it's not my strong suit, I can understand and work with CSS."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "postgresql",
    alt: "PostgreSQL",
    src: postgresImg,
    name: { "pt-br": "PostgreSQL", "en-us": "PostgreSQL" },
    description: {
      "pt-br": "Principal banco de dados relacional que eu utilizo em meus projetos e no trabalho, tenho experiência na modelagem, consultas e no trabalho com os schemas.",
      "en-us": "The main relational database I use in my projects and at work. I have experience in modeling, creating queries, and working with schemas."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "firebird",
    alt: "Firebird",
    src: firebirdImg,
    name: { "pt-br": "Firebird", "en-us": "Firebird" },
    description: {
      "pt-br": "Tive contato em ambientes corporativos que utilizavam sistemas legados com este banco de dados. Aprendi a realizar consultas, manutenção e integração com aplicações existentes.",
      "en-us": "I had contact with it in corporate environments that used legacy systems with this database. I learned to perform queries, maintenance, and integration with existing applications."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "docker",
    alt: "Docker",
    src: dockerImg,
    name: { "pt-br": "Docker", "en-us": "Docker" },
    description: {
      "pt-br": "Aprendi para containerizar aplicações back-end e bancos de dados, garantindo ambientes reproduzíveis e facilitando deploys.",
      "en-us": "I learned it to containerize backend applications and databases, ensuring reproducible environments and simplifying deployments."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  },
  {
    id: "nginx",
    alt: "Nginx",
    src: nginxImg,
    name: { "pt-br": "Nginx", "en-us": "Nginx" },
    description: {
      "pt-br": "Utilizei como reverse proxy e servidor web para deploy de aplicações. Configurei roteamento de domínio, SSL/TLS e balanceamento para serviços rodando em containers Docker.",
      "en-us": "I used it as a reverse proxy and web server for application deployment. I configured domain routing, SSL/TLS, and load balancing for services running in Docker containers."
    },
    level: { "pt-br": "Intermediário", "en-us": "Intermediate" }
  }
];
