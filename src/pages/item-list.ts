import { Component, Input } from '@angular/core';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.html',
})

export class ItemListComponent {
    title = 'hire-trailer';
    @Input() name: string;
}