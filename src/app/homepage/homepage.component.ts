import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent], // CommonModule est nécessaire pour *ngFor et FormsModule pour le binding de ngModel
  template: `
    <app-navbar></app-navbar>
    <h1>Bienvenue sur la page d'accueil</h1>
    <input
      type="text"
      [(ngModel)]="searchTerm"
      placeholder="Rechercher une matière..."
      class="search-bar"
    />
    <div class="subjects-container">
      <div class="subject-card" *ngFor="let subject of filteredSubjects">
        <img
          [src]="subject.image"
          [alt]="subject.name"
          class="subject-image"
          (click)="onImageClicked(subject)"
        />
        <h3>{{ subject.name }}</h3>
      </div>
    </div>
    <h2>Ajouter une image</h2>
    <input type="file" (change)="onImageSelected($event)" />
    <input
      type="text"
      [(ngModel)]="newImageName"
      placeholder="Nom de l'image"
      class="image-name-input"
    />
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  searchTerm: string = '';
  newImageName: string = ''; // Pour stocker le nom de la nouvelle image
  subjects = [
    { name: 'Mathématiques', image: 'assets/images/math.jpg' },
    { name: 'Physique', image: 'assets/images/physic.jpg' },
    { name: 'Informatique', image: 'assets/images/computer.jpg' },
    { name: 'Anglais', image: 'assets/images/anglais.jpg' },
    { name: 'Français', image: 'assets/images/francais.png' },
    { name: 'Arabic', image: 'assets/images/arabic.jpg' },
  ];

  get filteredSubjects() {
    return this.subjects.filter(subject =>
      subject.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          // Ajoutez l'image téléchargée à la liste des sujets avec le nom saisi par l'utilisateur
          const imageName = this.newImageName.trim() || 'Nouvelle image';
          this.subjects.push({
            name: imageName,
            image: e.target.result as string // URL de l'image en base64
          });

          // Réinitialisez le nom de l'image après l'ajout
          this.newImageName = '';
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onImageClicked(subject: { name: string; image: string }): void {
    alert(`Vous avez cliqué sur l'image de ${subject.name}`);
  }
}