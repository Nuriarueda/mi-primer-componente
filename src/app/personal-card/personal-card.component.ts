import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() age: string = '';
  
  @Output() delete = new EventEmitter<void>();

  isFavorite: boolean = false;

  constructor() {}

  ngOnInit() {}

  onDelete() {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarjeta?')) {
      this.delete.emit();
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
