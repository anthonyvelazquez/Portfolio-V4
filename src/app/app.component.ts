import { Component, OnInit } from '@angular/core';

interface Job {
  active: boolean;
  title: string;
  company: string;
  website: string;
  time: string;
  details: Array<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobList: Array<Job> = [];
  selectedJob: Job = null;
  ngOnInit(): void {
    this.importJobs();
    this.selectedJob = this.jobList[0];
  }
  importJobs(): void {
    this.jobList.push({
      active: true,
      title: 'Full Stack & UI/UX Developer',
      company: 'Common Cents Distributors',
      website: 'https://www.commoncentsdistributors.com',
      time: 'May 2018 - Present',
      details: ['Test Information']
    });
    this.jobList.push({
      active: false,
      title: 'Web Developer Intern',
      company: 'System On Grid',
      website: 'https://www.commoncentsdistributors.com',
      time: 'May 2017 - May 2018',
      details: ['']
    });
    this.jobList.push({
      active: false,
      title: 'App Developer Intern',
      company: 'Wedu VR',
      website: 'https://www.commoncentsdistributors.com',
      time: 'January 2016 - May 2017',
      details: ['']
    });
  }
}
