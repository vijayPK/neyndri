import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit{

  selectedtype = 'Trending';
  trendingJobs = ["Salesforce Developer", "Java Springboot Developer", "Azure DevOps Engineer", "AI Prompt Engineer", "AWS Cloud Solutions Architect", "MERN Stack Developer", "AEM Developer", "Cybersecurity Specialist"];
  ngOnInit(): void {
      
  }

  typeChange(type: string) {
    this.selectedtype = type;
  }
}
