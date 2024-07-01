import { Component, ContentChildren, Input, QueryList, TrackByFunction } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "shared/components/loader/loader.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CommonModule, LoaderComponent]
})
export class TableComponent {
  @Input() data: Array<any> | undefined = []
  @Input() columns: Array<string> = []
  @Input() loading: boolean | undefined
  @Input() trackBy!: TrackByFunction<any>

  @ContentChildren('cell') cells!: QueryList<any>

}
