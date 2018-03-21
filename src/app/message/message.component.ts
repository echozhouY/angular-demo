import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(@Inject('message') public messageService) { }

  ngOnInit() {
  }

}
