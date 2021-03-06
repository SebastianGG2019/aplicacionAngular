import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private renderer: Renderer2, private router: Router, public auth: AuthService) { 
  }

  @ViewChild('navBar') navBar!: ElementRef;

  ngOnInit(): void {

  }
  AbrirMenu() {
    this.renderer.addClass(this.navBar.nativeElement, "active");
  }
  CerrarMenu() {
    this.renderer.removeClass(this.navBar.nativeElement, "active");
  }

  navegar(ruta: string){
    this.router.navigateByUrl(ruta);
    this.CerrarMenu();
  }
}
