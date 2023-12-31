import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = false
    private userSub: Subscription
    isAuthenticated = false
    // @Output() featureSelected = new EventEmitter<String>();

    // onSelect(feature) {
    //     this.featureSelected.emit(feature)
    // }
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true
        })
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    onLogout() {
        this.authService.logout()
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
}