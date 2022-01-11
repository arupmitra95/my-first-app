import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus = "No New Server was created!";
  serverName= "Test Server";
  serverCreated: boolean= false;
  servers = ['Test Server 1, Test Server 2'];
  data = ["Arup","Agomani"];
  // htmlElem = '<p>Arup</p>';
  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server Created!" + this.serverName;
    this.servers.push(this.serverName);
    // this.servers.push(new Date());
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;


  }

}
