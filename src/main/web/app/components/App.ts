import {Component, OnInit} from "angular2/core"

let getNum = (): number => {
  let num: number
  console.info(num = Math.round(Math.random()))
  return num
}

@Component({
  selector: 'angular2-typescript',
  templateUrl: 'app/components/App.html',
  styleUrls: [ 'app/components/App.css' ]
})
export class App implements OnInit {
  private level: number

  private num1: number = 0
  private num2: number = 0
  private num3: number = 0
  private num4: number = 0

  public ngOnInit() {
    this.level = 1

    while (this.num1 === this.num2 && this.num2 === this.num3 && this.num3 === this.num4) {
      this.num1 = getNum()
      this.num2 = getNum()
      this.num3 = getNum()
      this.num4 = getNum()
    }
  }
}
