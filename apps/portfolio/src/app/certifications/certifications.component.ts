import { Component, OnInit } from '@angular/core'

export interface Icertification {
  class: string
  title: string
  issuedby: string
  date: string
  credentials?: string
  url?: string
}
@Component({
  selector: 'cmuthyala-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  title = `Certifications`
  isCollapsed = false
  certToggleText = '...show more'
  certToggleIcon = 'expand_more'
  showMoreCertifications: Icertification[] = [
    {
      class: 'udemy-header-image',
      title: 'MEAN stack',
      issuedby: 'Udemy',
      date: 'Issued on August 2019',
      credentials: 'UC-U0Q0G9DN',
      url: 'https://www.udemy.com/certificate/UC-U0Q0G9DN/',
    },
    {
      class: 'hackerrank-header-image',
      title: 'Gold Badge SQL',
      issuedby: 'HackerRank',
      date: 'Issued on August 2019',
      credentials: 'N/A',
      url: 'https://www.hackerrank.com/mchandrasekharr1',
    },
    {
      class: 'udacity-header-image',
      title: 'Data Engineering Nanodegree',
      issuedby: 'Udacity',
      date: 'Issued on April 2019',
      credentials: 'E9AU43CU',
      url: 'https://confirm.udacity.com/E9AU43CU',
    },
    {
      class: 'coursera-header-image',
      title: 'Python Data Structures ',
      issuedby: 'Coursera, By University of Michigan(Grade Achieved: 100.0%)',
      date: 'Issued on January 2017',
      credentials: 'N/A',
    },
    {
      class: 'coursera-header-image',
      title: 'Python Data Structures ',
      issuedby: 'Coursera, By University of Michigan(Grade Achieved: 100.0%)',
      date: 'Issued on January 2017',
      credentials: 'N/A',
    },
    {
      class: 'coursera-header-image',
      title: 'Using Databases with Python',
      issuedby: 'Coursera, By University of Michigan(Grade Achieved: 98.9%)',
      date: 'Issued on December 2016',
      credentials: 'N/A',
    },
    {
      class: 'sololearn-header-image',
      title: 'Certificate of Completion: Python Course',
      issuedby: 'SoloLearn',
      date: 'Issued on November 2016',
      credentials: '073-2777149',
      url: 'http://www.sololearn.com/Profile/2777149/',
    },
    {
      class: 'eduonix-header-image',
      title: 'HTML5 Animated Image Gallery',
      issuedby: 'Eduonix Learning Solutions Pvt Ltd',
      date: 'Issued on May 2016',
      credentials: 'd163249f2d',
      url: 'https://www.eduonix.com/certificate/d163249f2d',
    },
  ]
  certifications: Icertification[] = [
    {
      class: 'comptia-header-image',
      title: 'Google Cloud Platform Essential Training',
      issuedby: 'CompTIA',
      date: 'Issued on November 2019',
      credentials: 'AcZdHpPbzwgWvNFnn0buBN2yCEXG',
      url:
        'http://www.linkedin.com/learning/google-cloud-platform-essential-training-3?trk=flagship-lil_details_certificati',
    },
    {
      class: 'aws-header-image',
      title: 'Introduction to Amazon API Gateway',
      issuedby: 'Amazon Web Services (AWS)',
      date: ' Issued on September 2019',
      credentials: 'S6bcLuyvAEaj2zWdKXkHTQ2',
      url:
        'https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=S6bcLuyvAEaj2zWdKXkHTQ2',
    },
    {
      class: 'aws-header-image',
      title: 'Introduction to Amazon ElastiCache',
      issuedby: 'Amazon Web Services (AWS)',
      date: 'Issued on September 2019',
      credentials: 'y4CRFEispUS_2v3E8LXblw2',
      url:
        'https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=y4CRFEispUS_2v3E8LXblw2',
    },
    {
      class: 'udemy-header-image',
      title: 'Web Design for Web Developers: Build Beautiful Websites!',
      issuedby: 'Udemy',
      date: 'Issued on September 2019',
      credentials: 'UC-W28IW9HK',
      url:
        'https://www.udemy.com/certificate/UC-W28IW9HK/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email',
    },
  ]
  constructor() {}

  ngOnInit(): void {}

  toggleViewMore() {
    this.isCollapsed = !this.isCollapsed
    this.certToggleText = this.isCollapsed ? 'show less' : '...show more'
    this.certToggleIcon = this.isCollapsed ? 'expand_less' : 'expand_more'
  }
}
