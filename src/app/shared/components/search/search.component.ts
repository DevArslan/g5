import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input() loading = false
  @Output() search: EventEmitter<string> = new EventEmitter();

  public value = ''
}
