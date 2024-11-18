import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiencesList = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Front-End Flutter | React',
        p: 'Desenvolvimento Web e Mobile com Flutter e React'
      },
      text: `<p><strong>Competências:</strong> Desenvolvimento Web com React e mobile com Flutter, HTML, CSS, JavaScript, React, GitHub.</p>`
    },
    {
      summary: {
        strong: 'Consultor de vendas',
        p: 'Atendimento ao cliente.'
      },
      text: `<p><strong>Competências:</strong> Desenvolvimento Web com React e mobile com Flutter, HTML, CSS, JavaScript, React, GitHub.</p>`
    },
    {
      summary: {
        strong: 'G2 Auto Peças - Administrativo',
        p: 'Área administrativa e comercial.'
      },
      text: `<p><strong>Competências:</strong> Gestão de estoque, coordenação de equipes,recuperação de crédito, vendas.</p>`
    },
    {
      summary: {
        strong: 'Auto Peças Arthur - Administrativo',
        p: 'Área administrativa e comercial.'
      },
      text: `<p><strong>Competências:</strong> Gestão de estoque, coordenação de equipes,recuperação de crédito, vendas.</p>`
    },
  ]);
}
