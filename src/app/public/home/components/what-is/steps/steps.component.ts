import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
})
export class StepsComponent {
  @Input() steps: any[] = [];
}
