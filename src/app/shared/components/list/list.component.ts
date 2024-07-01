import { Component, ContentChildren, Input, OnInit, QueryList, TrackByFunction } from '@angular/core';
import { LoaderComponent } from "shared/components/loader/loader.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    imports: [
        CommonModule,
        LoaderComponent
    ],
    standalone: true
})
export class ListComponent implements OnInit{
    @Input() data: Array<any> | undefined = []
    @Input() columns: Array<string> = []
    @Input() loading: boolean | undefined
    @Input() trackBy!: TrackByFunction<any>

    public gridTemplateColumns: string = ''

    @ContentChildren('cell') cells!: QueryList<any>

    ngOnInit(): void {
        this.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`
    }
}
