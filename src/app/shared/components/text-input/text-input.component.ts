import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() suffixIcon!: string;
  @Input() suffixIconParam!: string;
  @Input() suffixIconAction: () => void = () => {}; // Default function that does nothing
  @Input() prefixIcon!: string;
  @Output() onSuffixIconClick = new EventEmitter<any>()


  emitSuffixAction(event: any) {
    this.onSuffixIconClick.emit(event)
  }

}
