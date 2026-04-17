import JsIcon from "../assets/img/javascript.svg?react"
import CssIcon from "../assets/img/css.svg?react"
import HtmlIcon from "../assets/img/html.svg?react"
import TailwindIcon from "../assets/img/tailwindcss.svg?react"
import TsIcon from "../assets/img/typescript.svg?react"
import ReactIcon from "../assets/img/react.svg?react"
import ExIcon from "../assets/img/express.svg?react"
import PostgreIcon from "../assets/img/postgresql.svg?react"
import SolidDev from "../assets/img/soliddev-solutions.png"
import Engeplanti from "../assets/img/engeplanti-projetos.png"
import LifeCoffee from "../assets/img/life-coffee.png"
import TodoList from "../assets/img/todo-list.png"

export const NavbarMenu = [
    {
        id: 1,
        nome: 'Home',
        link: '#home'
    },
    {
        id: 2,
        nome: 'Projetos',
        link: '#project'
    },
    {
        id: 3,
        nome: 'Sobre',
        link: '#contact'
    }
]

export const SliderTech = [
    {
        id: 1,
        img: HtmlIcon,
        nome: "html",
    },
    {
        id: 2,
        img: CssIcon,
        nome: "css",
    },
    {
        id: 3,
        img: JsIcon,
        nome: "javascript",
    },
    {
        id: 4,
        img: TsIcon,
        nome: "typescript",
    },
    {
        id: 5,
        img: ReactIcon,
        nome: "react",
    },
    {
        id: 6,
        img: TailwindIcon,
        nome: "tailwindcss",
    },
    {
        id: 7,
        img: ExIcon,
        nome: "express",
    },
    {
        id: 8,
        img: PostgreIcon,
        nome: "postgresql",
    }
]

export const ProjectsData = [
    {
        image: SolidDev,
        title: "SolidDev Solutions",
        description: "A SolidDev Solutions é uma empresa especializada no desenvolvimento de soluções digitais modernas, escaláveis e de alto desempenho. Nosso foco está em transformar ideias em produtos sólidos, com arquitetura bem definida e excelente experiência do usuário.",
        technologies: ["React", "TailwindCSS", "TypeScript"],
        link: "https://solid-dev-solutions.vercel.app",
    },
    {
        image: Engeplanti,
        title: "Engeplanti Projetos e Supervisão",
        description: "Este projeto é uma refatoração completa do site institucional da Engeplanti Projetos e Supervisão, desenvolvido com foco em modernização de layout, performance e boas práticas de desenvolvimento front-end.",
        technologies: ["React", "TailwindCSS", "TypeScript"],
        link: "https://engeplanti.vercel.app"
    },
    {
        image: LifeCoffee,
        title: "Life Coffee",
        description: "Projeto de cafeteria desenvolvido como parte do meu portfólio, com foco em boas práticas de front-end, componentização e experiência do usuário.",
        technologies: ["React", "TailwindCSS", "TypeScript"],
        link: "https://henrymiles02.github.io/life-coffe/"
    },
    {
        image: TodoList,
        title: "ToDo List",
        description: "Aplicação de lista de tarefas (To-Do List) desenvolvida em React, com o objetivo de praticar e aprofundar os conhecimentos adquiridos durante o curso da Rocketseat. A aplicação permite aos usuários criar, editar e excluir tarefas, além de marcar as tarefas como concluídas.",
        technologies: ["React", "TailwindCSS", "TypeScript"],
        link: "https://github.com/HenryMiles02/todo-react"
    },
]