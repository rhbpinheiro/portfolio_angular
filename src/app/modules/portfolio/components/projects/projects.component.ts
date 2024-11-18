import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/iprojects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelcClass } from '../../enum/EDialogPanelcClass.enum';
import { DialogProjectComponent } from '../dialog/dialog-project/dialog-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public projectsList = signal<IProjects[]>([
    {
      src: 'assets/projetos/app.png',
      alt: 'Imagem projeto App ID Agro Máquinas',
      title: 'App ID Agro Máquinas',
      width: '200px',
      height: '150px',

      description: '<p>Nesse projeto fui responsável por desenvolver o front-end da nova verão do aplicativo ID Agro Máquinas e também atuo na manutenção e desenvolvimento de novas funcionalidades.</p>',
      links: [
        {
          name: 'GitHub',
          url: 'https://github.com/IDAgroMaquinas'
        }
      ]
    },
    {
      src: 'assets/projetos/renagro.png',
      alt: 'Imagem projeto Módulos ID AGro',
      title: 'Módulos ID AGro',
      width: '200px',
      height: '150px',
      description: '<p>Nesse projeto atuo na sustentação e desenvolvimento de novas funcionalidades relacionado ao front-end.</p>',
      links: [{
        name: 'GitHub',
        url: 'https://github.com/IDAgroMaquinas'
      }]
    },
    {
      src: 'assets/projetos/sitev1.png',
      alt: 'Imagem projeto Site ID Agro versão 1',
      title: 'Site ID Agro versão 1',
      width: '200px',
      height: '150px',
      description: '<p>A Primeira vesão já existia mas em Wordpress, meu trabalho foi migrar a tecnogia para Flutter Web.</p>',
      links: [{
        name: 'GitHub',
        url: 'https://github.com/IDAgroMaquinas'
      }]
    },
    {
      src: 'assets/projetos/sitev2.png',
      alt: 'Imagem projeto Site ID Agro versão 2',
      title: 'Site ID Agro versão 2',
      width: '200px',
      height: '150px',
      description: '<p>Nesse projeto fui responsável por desenvolver o front-end da nova vesão do site ID Agro Máquinas, no site você encontra todas as informações relevantes ao projeto.</p>',
      links: [{
        name: 'GitHub',
        url: 'https://github.com/IDAgroMaquinas'
      }]
    },
    {
      src: 'assets/projetos/portfolio.png',
      alt: 'Imagem projeto Site Portfólio',
      title: 'Site Portfólio',
      width: '200px',
      height: '150px',
      description: '<p>Site para contar um pouco sobre mais sobre mim e meus projetos.</p>',
      links: [{
        name: 'GitHub',
        url: 'https://github.com/IDAgroMaquinas'
      }]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectComponent, {
      data,
      panelClass: EDialogPanelcClass.PROJECTS
    });
  }
}
