import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() color:any;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
    
  }

  onClick(){
    this.btnClick.emit();
  }

}
