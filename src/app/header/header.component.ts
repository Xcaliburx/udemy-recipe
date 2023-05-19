import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = false
    @Output() featureSelected = new EventEmitter<String>();

    onSelect(feature) {
        this.featureSelected.emit(feature)
    }
}