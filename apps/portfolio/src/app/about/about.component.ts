import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'cmuthyala-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = `About Me`
  aboutContent = `Results-driven senior software engineer with 5+ years of experience in
                    development and a year of Experience in leading a team of 6 developers to
                    deliver incremental value on multiple projects via an Agile Development
                    Methodology. Expertise at scripting dialects on both client and server
                    side. Capable at creating reusable solutions with object-oriented
                    programming (OOP) concepts, strong understanding of Software Development
                    Life Cycle (SDLC) with the ability to work from scratch in designing and
                    developing web applications.`
  competencies = `Angular 7, ExpressJS,
                  ES6, NodeJS, REST API, PHP, Python, AWS(EC2, S3, IAM, AWS Lambda
                  Serverless, VPC, IaC, Redshift, Apache Airflow, EMR, Athena, and Amazon
                  Glue), MySQL, NoSQL, MongoDB, D3JS, JIRA, Test Driven Development(TDD),
                  Jasmin-Unit testing, Agile Development Methodology, SDLC, Scrum Meetings,
                  Daily standups, Documenting the work.`
  highlightSummary = `=> Team Lead, Hackathon Winner, Online Certifications, Linkedin
                      Recommendations.`
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
