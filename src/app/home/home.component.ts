import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'home',
    templateUrl:'../index.component.html'
})
export class HomeComponent {

    event1 = {
        id: 1,
        name: 'dylan'
    }
    handleEventClicked(data){
        console.log('received', data)
    }
}   