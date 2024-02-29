import { Component, OnInit } from '@angular/core';
import { JobListService } from '../job-list.service';
import { FavoriteService } from '../favourites.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  constructor(private service:JobListService,private favoriteService: FavoriteService){

  }
  jobs: any = [];
  ngOnInit(): void {

    this.service.jobslist().subscribe((result) => {
      console.log(result);
      this.jobs = result;
    }
    )
  }
  
}
