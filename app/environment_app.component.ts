import {Component, View} from "angular2/core";

//the component tag will allow angular to generate
//an instance of the view component in the html
//where the <my-app> tag is
@Component({
  selector: 'my-app'
})

//View- this is the template that angular puts in the view -> in the myapp thing?
@View({
  template: '<h2>My first angular 2 app</h2>'
})

export class AppComponent {

}
