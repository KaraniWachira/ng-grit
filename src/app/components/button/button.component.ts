import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output () btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }

}
