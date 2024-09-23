import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getLiveMatches().subscribe({
      next:data=>{
        console.log(data);
        
      },
      error:error=>{
        console.log(error);
        
      }
    })
  }


}
