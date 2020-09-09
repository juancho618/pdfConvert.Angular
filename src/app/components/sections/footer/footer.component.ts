import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  public currentYear = new Date().getFullYear();

  constructor() {
  }

  ngOnInit(): void {
  }

}
