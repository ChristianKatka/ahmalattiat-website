import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, LogoComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
