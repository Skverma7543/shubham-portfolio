import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // social media urls
  facebookUrl:string="https://www.facebook.com/shubham.kumarverma.560/"
  twitterUrl:string="https://twitter.com/shubham26625929"
  googleUrl:string=""
  instagramUrl:string="https://www.instagram.com/s._k._.v/"
  githubUrl:string="https://github.com/Skverma7543"
  //profile data
  name:string="Shubham Verma"
  birthDate:string="15/01/1996"
  email:string="skverma7543@gmail.com"
  address:any={
    "at":"bari Bazar",
    "city":"chaibasa",
    "pin":"833201",
    "state":"jharkhand"
  }
  phone:string="+91-7000890535"
  proffession:string="Fullstack developer"
  whoAmI:string="A Full stack / Developer Located In Our Lovely Universe"
  whoAmIDesc:string="To find challenging position in organization where I can efficiently use my programing, Debugging,problem solving, quick learning and smart working skills to grow organization as well as myself."
  
  // my Resume
  languages:any=[
    {
      languageName:"English",
      proffiencyInPer:"80%"
    },
    {
      languageName:"Hindi",
      proffiencyInPer:"90%"
    },
    {
      languageName:"abc",
      proffiencyInPer:"20%"
    }
  ]

  skills:any=[
    {
    skillName:"HTML",
    proffiencyInPer:"80%"
  },
  {
    skillName:"CSS",
    proffiencyInPer:"80%"
  },
  {
    skillName:"Java Script",
    proffiencyInPer:"70%"
  },
  {
    skillName:"Angular",
    proffiencyInPer:"75%"
  },
  {
    skillName:"React",
    proffiencyInPer:"50%"
  },
  {
    skillName:"Java",
    proffiencyInPer:"90%"
  }
  ,
  {
    skillName:"Oracle ADF",
    proffiencyInPer:"60%"
  }
  ,
  {
    skillName:"Spring",
    proffiencyInPer:"70%"
  },
  {
    skillName:"Sql",
    proffiencyInPer:"70%"
  },
  {
    skillName:"Mongo DB",
    proffiencyInPer:"50%"
  },
  {
    skillName:"Shell Script",
    proffiencyInPer:"50%"
  },
  {
    skillName:"C & C++",
    proffiencyInPer:"80%"
  }
]
education:any=[
  {
    startDate:"2015",
    endDate:"2019",
    courseName:"B.Tech",
    department:"E.C.E",
    collegeName:"Guru Ghasidas University , Bilaspur",
    subtitle:"I have successfully completed this course and develope knowledge of DS/Algo, microcontroller,communication System etc"

  },
  {
    startDate:"2013",
    endDate:"2014",
    courseName:"Intermediate",
    department:"Science",
    collegeName:"ST Xavier college , Ranchi",
    subtitle:"I have succefully completed this course"

  }
  ,
  {
    startDate:"2011",
    endDate:"2012",
    courseName:"Matriculation",
    department:"Science",
    collegeName:"ST Xavier school , chaibasa",
    subtitle:"I have succefully completed this course"

  }
]  

experience:any=[
  {
    startDate:"2021",
    endDate:"present",
    position:"System Engineer",
    company:"TCS",
    subtitle:"Worked in oracle ADF, Shell Script automation, Rest API, UI design, System monitoring & bug fixing"
  },
  {
    startDate:"2020",
    endDate:"2021",
    position:"Trainee",
    company:"Vector India private limited",
    subtitle:"It was Post-graduation course where I did handon on coding , DS/Algo ,Linux and Microcontroller"
  }
]
expertise:any=[
  
  {
    title:"UX Design",
    subtitle:"experience in angular,React,HTML,CSS,JS and worked with JSP/JSF also",
    class:"ti-widget icon-lg"
  },
  {
    title:"Web Development",
    subtitle:"experience in java,spring,Oracle ADF,SQL,Express,Mongo DB, AWS and oracle cloud etc",
    class:"ti-paint-bucket icon-lg"
  },
  {
    title:"Other",
    subtitle:"Good in problem solving,DS/Algorithm and having competative coding experties",
    class:"ti-stats-up icon-lg"
  }

  
]
service:any=[
  {
    title:"UX Development",
    iconClass:"ti-vector text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  },
  {
    title:"Web Development",
    iconClass:"ti-write text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  },
  {
    title:"Automation",
    iconClass:"ti-package text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  },
  {
    title:"IOT",
    iconClass:"ti-map-alt text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  },
  {
    title:"Microcontroller & Aurduino",
    iconClass:"ti-bar-chart text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  },
  {
    title:"System Monitoring",
    iconClass:"ti-support text-danger",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodiprovident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! Inpraesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipitblanditiis, dignissimos quos nesciunt nulla aperiam officia."
  }
]
//******************project finished********************* */
myCareerStartDate:any={
  year:2021,
  month:4,
  date:5
};
totalProjectFinished:number=5;
totalLikes:number=100;

totalHourWorked:any;
  constructor() { }

  ngOnInit(): void {
    const msInHour = 1000 * 60 * 60*24;
  let endDate:any=new Date();
  let startDate:any=new Date(this.myCareerStartDate['year'], this.myCareerStartDate['month'], this.myCareerStartDate['date'], 0, 0, 0);
  this.totalHourWorked=Math.round(Math.abs(endDate - startDate) / msInHour);
  console.log(this.totalHourWorked)
  }
  printResume(){
    window.print()
  }
 
    

}
