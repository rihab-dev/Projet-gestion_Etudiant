import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  role: string = 'etudiant';

  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();

    // Validation des identifiants (exemple simple)
    if (this.username === 'etudiant' && this.password === '1234') {
      // Redirection en cas de succès
      this.router.navigate(['/home']);
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }
}
