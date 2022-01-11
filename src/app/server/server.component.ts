import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = "offline";
  a:number;

  constructor(){
    this.a = Math.random();
    this.serverStatus = this.a > 0.5 ? "online": "offline"; 
    console.log("the value of math.random", this.a);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === "online"? "green": "red";
  }
  
  getClass(){
    return this.serverStatus === "online"? "online": "offline";
  }
}