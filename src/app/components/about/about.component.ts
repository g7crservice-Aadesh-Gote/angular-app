import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Fixed "styleUrl" to "styleUrls"
})
export class AboutComponent implements OnInit {
  public aboutDatas: any;
  public loading: boolean = false; // Loading state

  constructor(
    private aboutService: AboutService,
    private toastr: ToastrService // Inject ToastrService
  ) { }
  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData(): void {
    this.loading = true; 
    this.aboutService.getAboutData().subscribe(
      data => {
        this.aboutDatas = data?.users;
        this.loading = false; 
        
        // alert('Data successfully fetched');

      },
      error => {
        console.error('Error fetching about data:', error);
        alert('Failed to fetch data');
        this.loading = false; 
      }
    );
  }
}
