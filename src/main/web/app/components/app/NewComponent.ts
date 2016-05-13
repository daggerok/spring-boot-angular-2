/**
 * Created by mak on 5/14/16.
 */
import {Component, OnInit} from "angular2/core"

@Component({
  selector: 'new-component',
  templateUrl: 'app/components/app/new-component.html',
  styleUrls: ['app/components/app/new-component.css']
})
export default class NewComponent implements OnInit {

  private name: string

  public ngOnInit(): any {
    this.name = 'Max'
  }
}
