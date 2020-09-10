import { Component, OnInit } from '@angular/core'
import { Itestimonial } from '../../../../../libs/models/src/lib/models'

@Component({
  selector: 'cmuthyala-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss'],
})
export class TestimoniesComponent implements OnInit {
  isCollapsed = false
  testimonyToggleText = 'VIEW MORE'
  testimonyToggleIcon = 'expand_more'
  note = 'Note: Loaded from LinkedIn recommendation section.'
  testimonialsViewMore: Itestimonial[] = [
    {
      id: 'yasaswy',
      name: 'Yasaswy Aluri',
      content: ` He was my peer when i was working in Synopsys banglore. He is very
    hardworking and can adapt to the existing system in very faster way.
    He played a key role in optimizing the VCS incremental build issues.
    Wish you all the best for furture endeavours 😁`,
      class: 'yasaswy-img',
      role: 'Sr Data Analyst at Synopsys Inc',
    },
    {
      id: 'kristen',
      name: 'Kristen Carros',
      content: ` I coached a student hackathon, where Chandra and his teammates did
    an outstanding job working together and ultimately placing in the
    competition. Chandra was focused and adaptable during this high
    stress time, and was a pleasure to work with! I would highly
    recommend Chandra in any position, because he worked so well within
    a team, and was always open to suggestion for the project!`,
      class: 'kristen-img',
      role: 'Cloud Software Engineer at Cloudreach',
    },
    {
      id: 'justin',
      name: 'Justin Russell',
      content: `I had the pleasure of serving as Chandra's coach during the 2018
    Dominion Enterprises Hackathon. Through out the Hackathon, Chandra
    stayed focused and collaborated with his team to deliver a great
    product. I was particularly impressed Chandra's ability remain calm
    while being under such a short turn around time for his project.
    With his assistance his team took home the third place prize. I
    would highly recommend Chandra and would welcome the opportunity to
    work with him again in the future.`,
      class: 'justin-img',
      role: 'Product Manager',
    },
  ]
  testimonials: Itestimonial[] = [
    {
      id: 'timKing',
      name: 'Tim King',
      content: `I currently work with Chandrasekhar (Chandu) on the same team at
      Highmark Health. It has been my pleasure to work along side him on
      multiple projects. With every project or task that Chandu has been
      assigned, he makes it his personal business to master the technologies
      involved. This is particularly noteworthy as our team requires true,
      full-stack, expertise. Chandu has successfully completed work in a
      variety of platforms and languages ranging from nodejs and google
      cloud, to sql and java. Chandu is extremely hard working, and learns
      very quickly. He would be a tremendous addition to any software
      development team.`,
      class: 'timKing-img',
      role: 'Software Engineer at Highmark Health',
    },
    {
      id: 'jyothi',
      name: 'Jyothi Gummadi',
      content: ` Chandrasekhar is focused, calm and committed and is a great addition
      to any team. He worked with me on a collaboration project for the
      Center of Learning and Teaching in Old Dominion University. He quickly
      established himself as an invaluable member and came up with several
      fresh ideas at the meetings that we successfully implemented. A
      confident and friendly co-worker, Chandrasekhar is popular with his
      colleagues and stakeholders alike and has a real passion and
      enthusiasm for the software industry.`,
      class: 'jyothi-img',
      role: 'Senior Delivery Data Analyst at ConnectYourCare',
    },
  ]
  constructor() {}
  ngOnInit(): void {}

  toggleViewMore() {
    this.isCollapsed = !this.isCollapsed
    this.testimonyToggleText = this.isCollapsed ? 'VIEW LESS' : 'VIEW MORE'
    this.testimonyToggleIcon = this.isCollapsed ? 'expand_less' : 'expand_more'
  }
}
