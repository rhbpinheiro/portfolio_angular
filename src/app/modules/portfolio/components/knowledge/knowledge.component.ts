import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledgeList = signal<IKnowledge[]>([
    {
      src: 'assets/icons/dart.svg',
      alt: 'Icone de conhecimento de Dart'
    },
    {
      src: 'assets/icons/flutter2.svg',
      alt: 'Icone de conhecimento de Flutter'
    },
    {
      src: 'assets/icons/js.svg',
      alt: 'Icone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/react.svg',
      alt: 'Icone de conhecimento de Reactjs'
    },
    {
      src: 'assets/icons/typescript.svg',
      alt: 'Icone de conhecimento de TypeScript'
    },
    {
      src: 'assets/icons/nextjs.svg',
      alt: 'Icone de conhecimento de Nextjs'
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'Icone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/styledcomponents.svg',
      alt: 'Icone de conhecimento de styledcomponents'
    },
    {
      src: 'assets/icons/tailwindcss.svg',
      alt: 'Icone de conhecimento de tailwindcss'
    },
    {
      src: 'assets/icons/css.svg',
      alt: 'Icone de conhecimento de css'
    },
    {
      src: 'assets/icons/html.svg',
      alt: 'Icone de conhecimento de html'
    },
    {
      src: 'assets/icons/nest.svg',
      alt: 'Icone de conhecimento de nest'
    },
    {
      src: 'assets/icons/node.svg',
      alt: 'Icone de conhecimento de node'
    },
    {
      src: 'assets/icons/postgre.svg',
      alt: 'Icone de conhecimento de postgres'
    },

  ]);
}
