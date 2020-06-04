import { Component, OnInit } from '@angular/core';

interface Job {
  active: boolean;
  title: string;
  company: string;
  website: string;
  time: string;
  details: Array<string>;
}

interface Project {
  name: string;
  description: string;
  github: string;
  website: string;
  image: string;
  languages: Array<string>;
  viewable: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobList: Array<Job> = [];
  featuredProjectList: Array<Project> = [];
  otherProjectList: Array<Project> = [];
  selectedJob: Job = null;

  ngOnInit(): void {
    this.importJobs();
    this.importFeaturedProjects();
    this.importOtherProjects();
    this.selectedJob = this.jobList[0];
  }

  importFeaturedProjects(): void {
    this.featuredProjectList.push({
      name: 'Trillo Sample Website',
      description: 'Barebone proof of concept for a hotel website. ',
      github: 'https://github.com/anthonyvelazquez/Trillo',
      website: 'https://avelazquez-trillo.netlify.app/',
      image: 'https://via.placeholder.com/1920x1080',
      languages: ['Angular 2+', 'HTML5', 'SCSS'],
      viewable: true
    });
    this.featuredProjectList.push({
      name: 'Nexter Sample Website',
      description: 'Barebone proof of concept for a realtor website. ',
      github: 'https://github.com/anthonyvelazquez/Nexter',
      website: 'https://avelazquez-nexter.netlify.app/',
      image: 'https://via.placeholder.com/1920x1080',
      languages: ['HTML5', 'CSS'],
      viewable: true
    });
    this.featuredProjectList.push({
      name: 'Natour Sample Website',
      description: 'Barebone proof of concept for a outdoor website. ',
      github: 'https://github.com/anthonyvelazquez/Natour',
      website: 'https://avelazquez-natour.netlify.app/',
      image: 'https://via.placeholder.com/1920x1080',
      languages: ['Angular 2+', 'HTML5', 'SCSS'],
      viewable: true
    });
  }

  importOtherProjects(): void {
    this.otherProjectList.push({
      name: 'Trillo Sample Website',
      description: 'Barebone proof of concept for a hotel website. Created through the assistance Udemy course',
      github: 'https://github.com/anthonyvelazquez/Trillo',
      website: 'https://avelazquez-trillo.netlify.app/',
      image: '',
      languages: ['Angular 2+', 'HTML5', 'SCSS'],
      viewable: true
    });
    this.otherProjectList.push({
      name: 'Nexter Sample Website',
      description: 'Barebone proof of concept for a realtor website. Created through the assistance Udemy course',
      github: 'https://github.com/anthonyvelazquez/Nexter',
      website: 'https://avelazquez-nexter.netlify.app/',
      image: '',
      languages: ['HTML5', 'CSS'],
      viewable: true
    });
    this.otherProjectList.push({
      name: 'Natour Sample Website',
      description: 'Barebone proof of concept for a outdoor website. Created through the assistance Udemy course',
      github: 'https://github.com/anthonyvelazquez/Natour',
      website: 'https://avelazquez-natour.netlify.app/',
      image: '',
      languages: ['Angular 2+', 'HTML5', 'SCSS'],
      viewable: true
    });
    this.otherProjectList.push({
      name: 'Python Snake Clone',
      description: 'Basic Python Snake Game Clone made with PyGame',
      github: 'https://github.com/anthonyvelazquez/SimpleSnake',
      website: '',
      image: '',
      languages: ['Python', 'PyGame'],
      viewable: false
    })
  }

  importJobs(): void {
    this.jobList.push({
      active: true,
      title: 'Software Engineer',
      company: 'Common Cents Distributors',
      website: 'https://www.commoncentsdistributors.com',
      time: 'May 2018 - Present',
      details: ["Converted the company's business structure from Google Sheets into a robust and user friendly web application using Angular 2+.",'Designed and implemented database architecture for said web app using Python, Django, MySQL and Amazon Services such as RDS, SQS, S3 Buckets and Lambda.', "Setup a proper development cycle for our new development team through the use of Github, Trello and Monday", "Took over DevOps management by creating an automated testing and deployment pipeline through the use of Jenkins and Docker", "Mentored 2 developers in industry standard development cycle as well as design and development of a SaaS version of the previously created web application"]
    });
    this.jobList.push({
      active: false,
      title: 'Full Stack Developer - Freelance',
      company: 'AmazonLit',
      website: 'https://www.amazonlit.com',
      time: 'Dec 2019 - Present',
      details: ["Created website with Angular 9 based on client's design documents.", 'Used Python, Django and MySQL for user storage.', 'Integrated website with Intercom and Calendly.', 'Integrated Pixel from Facebook Ads Manager for user tracking.']
    });
    this.jobList.push({
      active: false,
      title: 'Full Stack Developer - Freelance',
      company: 'Car Service of South Florida',
      website: 'https://www.carserviceofsouthflorida.com',
      time: 'May 2019 - Aug 2019',
      details: ["Created website with Angular 9 based on client's design documents.", 'Setup simple clientele data storage for rides with AWS S3 Buckets.', 'Implemented email notifications on new ride requests.', 'Assisted in transition of website to React.']
    });
    this.jobList.push({
      active: false,
      title: 'Web Developer Intern',
      company: 'System On Grid',
      website: 'https://systemongrid.com/',
      time: 'May 2017 - May 2018',
      details: ['Created HOW TO Guides for most of the available features and servers that are offered', 'Rewrote Angular.js website to a static website for SEO compatibility', 'Designed and implemented a Django based CRM Portal for internal use', "Assisted in the development and maintenance of the website's frontend pages"]
    });
    this.jobList.push({
      active: false,
      title: 'App Developer Intern',
      company: 'Wedu VR',
      website: 'http://weduvr.com/',
      time: 'January 2016 - May 2017',
      details: ['Design and created a prototype iOS app that displayed team information for stadium sports fans using Augmented Reality', 'Implemented a fan shop, where buyers can purchase merchandise', 'Created a AR environment where fans could see player models and read statistics or fun facts through AR on their devices', 'Assisted in the development of a 3D virtual environment for a VR Financial Assistant App in Unreal Engine']
    });
  }

  setNewActiveJob(newJob: Job): void {
    this.jobList.forEach((job) => job.active = false);
    this.selectedJob = newJob;
    this.selectedJob.active = true;
  }
}
