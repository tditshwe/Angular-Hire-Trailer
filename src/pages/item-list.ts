import { Component, Input } from '@angular/core';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.html',
    styleUrls: ['./item-list.css']
})

export class ItemListComponent {
    @Input() title: string;
    @Input() items;
    @Input() currentTab: string;
}