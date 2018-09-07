import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'Login',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    @Input() login: any
    @Output() eventClick = new EventEmitter()

    CancelClicked(){
         this.eventClick.emit('clicked with $event')
    }
}

