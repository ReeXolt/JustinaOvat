import facebook from '../assets/svg/facebookIcon.svg';
import linkedin from '../assets/svg/linkedInIcon.svg';
import twitter from '../assets/svg/twitterIcon.svg';
import instagram from '../assets/svg/instagramIcon.svg';
// import heroImg from "../assets/images/heroImg.png";

import just1 from '../assets/images/just1.png';
import just2 from '../assets/images/just2.png';
import just3 from '../assets/images/just3.png';
import just4 from '../assets/images/just4.png';
import just5 from '../assets/images/just5.png';

import press1 from '../assets/images/press1.jpg';
import press2 from '../assets/images/press2.jpg';
import press3 from '../assets/images/press3.jpg';
import press4 from '../assets/images/press4.jpg';
import press5 from '../assets/images/press5.jpg';
import press6 from '../assets/images/press6.jpg';
import press7 from '../assets/images/press7.jpg';

import blog1 from '../assets/images/blogImg1.png';
import blog2 from '../assets/images/blogImg2.png';
import blog3 from '../assets/images/blogImg3.png';
import blog4 from '../assets/images/blogImg4.png';
// import blog5 from "../assets/images/blogImg5.png";
import blog6 from '../assets/images/blogImg6.png';
// import blog7 from "../assets/images/blogImg7.png";
// import blog8 from "../assets/images/blogImg8.png";
// import blog9 from "../assets/images/blogImg9.png";
import blog10 from '../assets/images/blogImg10.png';
import blog11 from '../assets/images/blogImg11.png';

import feat1 from '../assets/images/feat1.png';
import feat2 from '../assets/images/feat2.png';
import feat3 from '../assets/images/feat3.png';
import feat4 from '../assets/images/feat4.png';
import feat5 from '../assets/images/feat5.png';
import feat6 from '../assets/images/feat6.png';
import feat7 from '../assets/images/feat7.png';
import feat8 from '../assets/images/feat8.png';

import tick from '../assets/svg/tick.svg';

import order1 from '../assets/images/order1.png';
import order2 from '../assets/images/order2.png';
import order3 from '../assets/images/order3.png';
import order4 from '../assets/images/order4.png';
import order5 from '../assets/images/order5.png';
import order6 from '../assets/images/order6.png';
import order7 from '../assets/images/order7.png';
import order8 from '../assets/images/order8.png';
import order9 from '../assets/images/order9.png';
import order10 from '../assets/images/order10.png';
import order11 from '../assets/images/order11.png';
import order12 from '../assets/images/order12.png';

import assurance1 from '../assets/images/assuranceIcon1.png';
import assurance2 from '../assets/images/assuranceIcon2.png';
import assurance3 from '../assets/images/assuranceIcon3.png';
import assurance4 from '../assets/images/assurance4.png';
import assurance5 from '../assets/images/assurance5.png';
import assurance6 from '../assets/images/assurance6.png';

import test1 from '../assets/images/test1.png';

export const socialIcons = [
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=100008343258165&mibextid=ZbWKwL',
    icon: facebook,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/justina-ovat-04523480/',
    icon: linkedin,
  },
  {
    id: 3,
    url: 'https://twitter.com/JustinaOvat',
    icon: twitter,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/justiceovat/',
    icon: instagram,
  },
];

export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '',
    text: 'ABOUT',
    width: 'w-24',
    dropdown: [
      { text: 'ABOUT JUSTINA', path: '/about' },
      { text: 'PRESS & MEDIA', path: '/about#press' },
    ],
  },
  {
    id: 3,
    url: '',
    text: 'WORK WITH ME',
    width: 'w-40',
    dropdown: [
      { text: 'SPEAKING', path: '/work-with-jo#speaking' },
      { text: 'TRAINING & DEVELOPMENT', path: '/work-with-jo#training' },
      { text: 'MY APPROACH', path: '/work-with-jo#myApproach' },
      { text: 'EVENT CONTENT CURATION', path: '/work-with-jo#event' },
    ],
  },
  {
    id: 4,
    url: '',
    text: 'ORGANIZATIONS',
    width: 'w-40',
    dropdown: [
      {
        text: 'SERVICE CRAFT COMPANY',
        path: '/TSC',
      },
      { text: 'JO FOUNDATION', path: 'https://thejofoundation.org/' },
      { text: 'AFIEGU EVENTS & TOURS', path: '/afiegu' },
    ],
  },
  {
    id: 5,
    url: '/book-details',
    text: 'BOOK',
    width: 'w-40',
    dropdown: [
      { text: 'MY HOSPITALITY', path: '/book-details#my-hospitality' },
      {
        text: 'THE SERVICE INNOVATORS HANDBOOK',
        path: '/book-details#the-service-innovators-handbook',
      },
    ],
  },
  {
    id: 6,
    url: '/blog',
    text: 'BLOG',
  },
  {
    id: 7,
    url: '/podcast',
    text: 'Podcast',
  },
  {
    id: 8,
    url: '/contact',
    text: 'Contact',
  },
];

export const imagesAndTexts = [
  {
    // image: heroImg,
    headingText: ' Elite Speaker, Social Entrepreneur',
    // subText:
    //   "Unleashing the Power of Persuasion: Join Justina Ovat on a Journey of Inspiration",
  },
  {
    // image: heroImg,
    headingText: 'Erudite Tutor, Outstanding Innovator',
    // subText:
    //   "Try the Power of Persuasion: Join Justina Ovat on a Journey of Inspiration",
  },
  {
    // image: heroImg,
    headingText: ' Author and Writer Extraordinaire',
    // subText:
    //   "Try the Power of Persuasion: Join Justina Ovat on a Journey of Inspiration",
  },
];

export const justOne = [
  {
    src: just1,
    alt: 'img1',
    heading: 'Entrepreneur',
    text: ' Elevate your events with Justina Ovat as your dynamic keynote speaker. With a captivating presence and a gift for connecting with audiences, Justina Ovat delivers impactful talks that inspire, motivate, and leave a lasting impression',
    colSpan: 2,
  },
  {
    src: just2,
    alt: 'img2',
    heading: 'Innovator',
    text: ' Elevate your events with Justina Ovat as your dynamic keynote speaker. With a captivating presence and a gift for connecting with audiences, Justina Ovat delivers impactful talks that inspire, motivate, and leave a lasting impression',
    colSpan: 2,
  },
  {
    src: just3,
    alt: 'img3',
    heading: 'Tutor',
    text: ' Elevate your events with Justina Ovat as your dynamic keynote speaker. With a captivating presence and a gift for connecting with audiences, Justina Ovat delivers impactful talks that inspire, motivate, and leave a lasting impression',
    colSpan: 2,
  },
  {
    src: just4,
    alt: 'img4',
    heading: 'KeyNote Speaker',
    text: ' Elevate your events with Justina Ovat as your dynamic keynote speaker. With a captivating presence and a gift for connecting with audiences, Justina Ovat delivers impactful talks that inspire, motivate, and leave a lasting impression',
    colSpan: 3,
  },
  {
    src: just5,
    alt: 'img5',
    heading: 'Best Selling Author',
    text: ' Elevate your events with Justina Ovat as your dynamic keynote speaker. With a captivating presence and a gift for connecting with audiences, Justina Ovat delivers impactful talks that inspire, motivate, and leave a lasting impression',
    colSpan: 3,
  },
];

export const cardData = [
  {
    date: '2023',
    title: 'Excellence',
    award: 'Student Union Government',
    location: 'University of Calabar',
    text: 'Recognized for her outstanding support to the growth of young women in society',
  },
  {
    date: '2022',
    title: 'Tourism Ambassador',
    award: 'Inter Party Advisory Council',
    location: 'IPAC, CRS',
    text: 'Recognized for her achievement in the promotion of tourism in Cross River State and Nigeria',
  },
  {
    date: '2022',
    title: 'Master Trainer',
    award: 'Hoteliers Association',
    location: 'Cross River',
    text: 'Recognized for her  service to the hospitality industry as trainer and consultant',
  },
  {
    date: '2022',
    title: 'Matron',
    award: 'Sir Philip Ibol Foundation',
    location: 'Nigeria',
    text: 'Recognized for her outstanding performance and contribution to the growth and sustainability of the Sir Philip Ibol Foundation and the development of Northern Cross River Communities',
  },
  {
    date: '2019',
    title: 'Excellence',
    award: 'National Youth Council of Nigeria',
    location: 'Calabar',
    text: 'Awarded for her excellence in tourism & hospitality for my role as General Manager of the Tinapa Lakeside Hotel, Calabar',
  },
  {
    date: '2015',
    title: 'Profiles & Biographies',
    award: 'Young Person to Watch - Cross River @50',
    location: 'Cross River',
    text: 'Recognized as a born hospitality driver',
  },
];

export const press = [
  {
    id: 1,
    img: press7,
    title:
      'Ovat, Akporiaye, Yakubu, Others Elected Into ARSO/TC76/ Working Groups as Conveners, Secretaries',
    text: 'Nigeria has made inroad into the Technical Committee for Tourism TC 76 of the African Organisation for Standardisation (ARSO), as overwhelming number of operators in the tourism sector were elected in various positions by the body recently. This is coming in the wake of the election of the President of Federation of Tourism Associations of Nigeria (FTAN), Mr. Nkereuwem Onung last year as the Chairman of the Technical Committee for Tourism TC 76 of the African Organisation for Standardisation (ARSO). Other elected Nigerians into ARSO positions alongside Onung in 20223 were Mrs. Chidinma Ewuzie of Standard Organisation of Nigeria (SON) as Secretary of the Committee, and Dr. Adeoye Adedipe of the Federal University of Agriculture, Abeokuta as Vice Chairman, Technical Committee. This year more Nigerians were elected this month by the African Organisation for Standardisation (ARSO) at its annual meet- ing into various Working Groups (WGs) of the Organisation. Contestants were drawn from various member African countries like Ghana, Botswana, Burkina Faso, DR Congo, South Africa, Ethiopia, Kenya, Tunisia, Cameroun, Uganda, Tanzania, and South Sudan. Roll call of Nigerians elected include: Mrs. Justina Ovat, as Convener of the ARSO/TC76/WG1 – Tourist Information and Reception Services; Mrs. Susan Akporiaye, as Convener of ARSO/TC76/WG6 – Online Travel Agencies (OTA); and Mr. Tope Fajemirokun, as Convener ARSO/ TC76/WG3 – Yacht Harbours, Bareboat charter, and Diving services. While those elected as Secretaries of varYakubu – ARSO/TC76/WG2 – Adventure Tourism; Joseph Umoh – ARSO/TC76/WG5 – Accommodation Facilities; and Mr. Sunday Olugbenga – ARSO/TC76/WG7 -Exhibition and Event. Seven other Working Groups and counterparts from other member African countries were elected as Conveners and Secretaries of each group. The African Organisation for Standardisation (ARSO) was formed in 1977, with a focal mandate to harmonise African Standards and prioritise conformity Assessment and Procedures to reduce technical trade barriers critical to the promotion of intra -African and international trade, as well as powering the industrialisation of Africa. There are 43 African countries as members, making it one of the leading inter-governmental organisations in the continent.',
    link: 'https://newtelegraphng.com/ovat-akporiaye-yakubu-others-elected-into-arso-tc76-working-groups-as-conveners-secretaries/',
  },
  {
    id: 2,
    img: press2,
    title: ' Kayode, Jafiya, others to headline IHTEF 2023 conference',
    text: 'Organisers of this year’s International Hospitality, Tourism and Eco-Sustainability Forum (IHTEF), which holds from April 25-26, 2023 in Abuja, with the theme, Collaboration; Investments and Sustainability, has disclosed its guests and speakers’ list filled with people of vast experience and expertise in different fields of tourism and hospitality business',
    link: 'https://businessday.ng/life-arts/article/kayode-jafiya-others-to-headline-ihtef-2023-conference/?amp=1',
  },

  {
    id: 3,
    img: press3,
    title: 'Babalola, Ovat, Efa, Confirmed As Speakers',
    text: 'To ensure continuous tourism development and drive to improve the performance of hotel managers in Nigeria and Africa, top-rated resource personnel have been listed to share their wealth of experience in the sector, especially as it relates to the hospitality industry during the forthcoming third edition of Hotel Managers’ Conference (HMC)',
    link: 'https://guardian.ng/saturday-magazine/africas-tourism-development-tops-agenda-as-hotel-managers-meet-in-uyo/amp/',
  },

  {
    id: 4,
    img: press4,
    title:
      ' FTAN Appoints WIHN President, Ovat as Secretary of Tourism Law Review Committee',
    text: 'The President, Women in Hospitality Nigeria (WIHN), Mrs. Justina Ovat has been appointed as the Secretary, Tourism Law Review Committee.',
    link: 'https://travelscopengr.com/ftan-appoints-wihn-president-ovat-as-secretary-of-tourism-law-review-committee/',
  },

  {
    id: 5,
    img: press5,
    title:
      'Group partners Justina Ovat Foundation to create empowerment opportunities for 500 women',
    text: ' African Women in Leadership Organisation in partnership with Justina Ovat Foundation, and are set to create empowerment opportunities for 500 women in Niger-Delta Region and others.',
    link: 'https://www.negroidhaven.com/2019/10/group-partners-justina-ovat-foundation/',
  },

  {
    id: 6,
    img: press6,
    title:
      'Hospitality industry stakeholders identify good work culture as key to business growth',
    text: 'To enhance sector competitiveness, business sustainability and growth, stakeholders in the hospitality industry have identified the need for players to take their jobs beyond service delivery to consumer experience.',
    link: 'https://businessday.ng/life-arts/article/hospitality-industry-stakeholders-identify-good-work-culture-as-key-to-business-growth/?amp=1',
  },

  {
    id: 7,
    img: press1,
    title:
      'Babalola, Pinder, Belinda, others to speak at Hotel Managers Conference',
    text: 'The organisers of the annual Hotel Managers Conference (HMC), which is slated for Owerri, Imo State, from July 13-14, 2023, have unveiled a line-up of speakers',
    link: 'https://businessday.ng/life-arts/article/babalola-pinder-belinda-others-to-speak-at-hotel-managers-conference/?amp=1',
  },
];

export const featuredLogo = [
  {
    id: 1,
    logo: feat1,
  },
  {
    id: 2,
    logo: feat2,
  },
  {
    id: 3,
    logo: feat3,
  },
  {
    id: 4,
    logo: feat4,
  },
  {
    id: 5,
    logo: feat5,
  },
  {
    id: 6,
    logo: feat6,
  },
  {
    id: 7,
    logo: feat7,
  },
  {
    id: 8,
    logo: feat8,
  },
];

export const blog = [
  {
    id: 1,
    img: blog1,
    title: 'Press Topic 1',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },

  {
    id: 2,
    img: press2,
    title: 'Press Topic 2',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },

  {
    id: 3,
    img: press2,
    title: 'Press Topic 3',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },

  {
    id: 4,
    img: press2,
    title: 'Press Topic 4',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },

  {
    id: 5,
    img: press2,
    title: 'Press Topic 5',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },

  {
    id: 6,
    img: press2,
    title: 'Press Topic 6',
    date: '29th Dec 2023',
    text: 'Lorem ipsum dolor sit amet consectetur. Mattis mauris ut nibh libero ullamcorper sed rutrum egestas interdum. Neque sit neque nunc sed scelerisque. Diam sit hendrerit adipiscing lorem. Morbi eu viverra praesent purus. Imperdiet nullam sed placerat egestas.Sollicitudin amet in vestibulum dolor. Tempor eu amet urna ipsum scelerisque. Vitae dignissim massa mi cras elit. Et libero tortor nec pulvinar felis massa amet lorem. Consectetur imperdiet consequat nec quis amet fames pellentesque non amet. Nunc massa et hac sit volutpat in sem. Viverra turpis donec id lectus nascetur non. Nisl mi curabitur mauris nec at nibh urna mattis vitae. Cras vulputate sit ultrices donec vestibulum sed. Fringilla leo elementum in id porttitor et ac quis. Nec lorem vitae porttitor lorem. Adipiscing purus lorem semper interdum morbi nibh. Venenatis volutpat sit augue massa ut. Enim donec malesuada imperdiet eu aliquet vitae adipiscing ultricies interdum. Sociis ut augue mauris facilisi sed fames.Lorem et sed volutpat ultricies. Tincidunt neque ipsum non lacinia ut vestibulum augue velit. At duis urna adipiscing libero urna arcu vitae duis ultrices. Eleifend volutpat suspendisse ut ut ultrices mus donec felis sit. Vestibulum quis pellentesque praesent molestie tristique libero. Condimentum nullam id a vel. Amet lobortis erat purus mauris. Sed eu enim ultricies gravida.Felis facilisi fermentum commodo adipiscing id nulla. Potenti sem posuere leo turpis elementum velit vitae fringilla. Porta malesuada commodo in penatibus sed arcu vel molestie. Nisi amet lectus aliquam id fames sagittis lobortis adipiscing. Volutpat nulla vel convallis adipiscing et egestas quis proin. Lacinia tristique laoreet scelerisque mattis. Eget ultrices sit tortor leo sed sit. Tellus praesent id porta amet turpis. Nunc magna arcu sit phasellus. Consectetur at arcu adipiscing bibendum neque adipiscing posuere dolor cursus. Sed dui viverra neque dictum. Urna lectus risus eleifend diam molestie ipsum vel facilisis. Elementum a condimentum diam nec gravida cum sed. Praesent viverra id nunc tellus lacus fringilla sed.Nulla sed faucibus sem aliquam proin viverra lacus mattis in. Gravida in volutpat ut a convallis cursus vivamus orci. Pharetra amet condimentum erat nulla pellentesque pretium laoreet sem.',
  },
];

export const training1 = [
  {
    icon: tick,
    text: 'Hotels and resorts',
  },
  {
    icon: tick,
    text: 'Hospitality and tourism groups',
  },
  {
    icon: tick,
    text: 'Service-driven organisations scaling operations',
  },
  {
    icon: tick,
    text: 'Institutions seeking to professionalise learning systems',
  },
];
export const training2 = [
  {
    icon: tick,
    text: '  Understand hospitality operations, not just learning theory',
  },
  {
    icon: tick,
    text: 'Speak the language of business, not just training',
  },
  {
    icon: tick,
    text: 'Diagnose before prescribing',
  },
  {
    icon: tick,
    text: 'Design systems that clients can sustain internally',
  },
];

export const sponsors = {
  my_hospitality: [
    {
      img: order1,
      link: 'https://www.scribd.com/book/622904232/My-Hospitality',
    },
    {
      img: order2,
      link: 'https://books.rakuten.co.jp/rk/5802e63fcf853022aab6a4babcbd797f/?l-id=search-c-item-text-01',
    },
    {
      img: order3,
      link: 'https://www.casadellibro.com/ebook-my-hospitality-ebook/9791222057507/13531256',
    },
    {
      img: order4,
      link: 'https://www.angusrobertson.com.au/ebooks/my-hospitality-justina-ovat/p/9791222057507?searchTerm=9791222057507',
    },
    {
      img: order5,
      link: 'https://www.amazon.com/dp/B0BVVXYQGS',
    },
    {
      img: order6,
      link: 'https://www.scribd.com/book/622904232/My-Hospitality',
    },
    {
      img: order7,
      link: 'https://selar.co/m/justinaovat',
    },
    {
      img: order8,
      link: 'https://www.24symbols.com/book/english/justina-ovat/my-hospitality?id=4427948',
    },
    {
      img: order9,
      link: 'https://www.booktopia.com.au/my-hospitality-justina-ovat/ebook/9791222057507.html',
    },
    {
      img: order10,
      link: 'https://www.hoepli.it/ebook/relationship-red-flags/9791222027418.htmlhttps:/www.hoepli.it/ebook/my-hospitality/9791222057507.html',
    },
    {
      img: order11,
      link: 'https://www.lehmanns.ch/shop/wirtschaft/62025707-9791222057507-my-hospitality',
    },
    {
      img: order12,
      link: 'https://www.fnac.com/livre-numerique/a17738393/Justina-Ovat-My-Hospitality#FORMAT=ebook%20(ePub)',
    },
  ],
  the_Service_innovators_handbook: [
    {
      img: order1,
      link: 'https://www.scribd.com/book/622904232/My-Hospitality',
    },
    {
      img: order2,
      link: 'https://books.rakuten.co.jp/rk/5802e63fcf853022aab6a4babcbd797f/?l-id=search-c-item-text-01',
    },
    {
      img: order3,
      link: 'https://www.casadellibro.com/ebook-my-hospitality-ebook/9791222057507/13531256',
    },
    {
      img: order4,
      link: 'https://www.angusrobertson.com.au/ebooks/the-service-innovators-handbook-justina-ovat/p/9798869361608',
    },
    {
      img: order5,
      link: 'https://www.amazon.com/dp/B0BVVXYQGS',
    },
    {
      img: order6,
      link: 'https://www.scribd.com/book/622904232/My-Hospitality',
    },
    {
      img: order7,
      link: 'https://selar.co/m/justinaovat',
    },
    {
      img: order8,
      link: 'https://www.24symbols.com/book/english/justina-ovat/my-hospitality?id=4427948',
    },
    {
      img: order9,
      link: 'https://www.booktopia.com.au/the-service-innovator-s-handbook-justina-ovat/ebook/9798869361608.html',
    },
    {
      img: order10,
      link: 'https://www.hoepli.it/ebook/relationship-red-flags/9791222027418.htmlhttps:/www.hoepli.it/ebook/my-hospitality/9791222057507.html',
    },
    {
      img: order11,
      link: 'https://www.lehmanns.ch/shop/wirtschaft/70436953-9798869361608-the-service-innovator-s-handbook',
    },
    {
      img: order12,
      link: 'https://www.fnac.com/livre-numerique/a17738393/Justina-Ovat-The-Service-Innovators-Handbook#FORMAT=ebook%20(ePub)',
    },
  ],
};

export const allblogs = [
  {
    id: 1,
    img: blog1,
    title:
      'Exceed Expectations, Not Just Standards. Surprise and Delight Your Guests.',
    date: '29th Dec 2023',
    text: "Strive to transcend the ordinary benchmarks of hospitality by exceeding expectations, not merely meeting standards. Surprise and delight your guests by cultivating an atmosphere of unparalleled service and thoughtfulness.In the competitive realm of hospitality, it is not enough to adhere to established norms; rather, the emphasis should be on surpassing the anticipated level of service and crafting an experience that leaves a lasting impression.To 'exceed expectations, not just standards' implies a commitment to elevating the guest experience beyond the commonplace. This could involve a meticulous attention to detail, offering personalized services, or anticipating and fulfilling needs before they are expressed. By setting a higher standard for service, hospitality providers can distinguish themselves and create a positive and lasting impact on their guests.The directive to 'surprise and delight your guests' suggests going above and beyond in creating memorable experiences. Hospitality transcends the transactional; it's about creating emotional connections and leaving guests with a sense of joy and satisfaction. This can involve unexpected gestures, exclusive amenities, or even tailor-made experiences that cater to the unique preferences of each guest.In the realm of hospitality, this philosophy is not just a business strategy; it's a commitment to creating moments that linger in the hearts and minds of guests. By consistently delivering exceptional service and exceeding expectations, businesses can build a loyal customer base and enhance their reputation.The festive Christmas period provides a unique opportunity to infuse the spirit of the season into the hospitality experience.",
    addText:
      "Going the extra mile by incorporating holiday-themed decorations, offering special seasonal amenities, or organizing festive events can contribute to the overall atmosphere of joy and celebration.This not only aligns with the philosophy of exceeding expectations but also taps into the emotional resonance of the holiday season, leaving guests with warm and cherished memories.In conclusion, the mantra 'exceed expectations, not just standards; surprise and delight your guests' encapsulates a commitment to elevating the hospitality experience. By infusing every interaction with a sense of thoughtfulness and going beyond what is expected, hospitality providers can create not just customers, but advocates who will remember and appreciate the exceptional service, especially during special occasions like Christmas.Today, I leave you with my own words of felicitation as the festive season envelops us in its warmth and joy, I want to take a moment to express my heartfelt gratitude to each and every one of you. Your continued support and companionship on this journey mean the world to me. May this season bring you moments of peace, love, and laughter. May the melody of the season fill your hearts with harmony, and the spirit of giving illuminate your days with kindness.Thank you for being a part of our community. Wishing you and your loved ones a great time filled with cherished memories and the promise of a bright and beautiful year ahead.",
  },

  {
    id: 2,
    img: blog2,
    title:
      "Create Experiences That Guests Can't Wait To Share. They Become Your Best Marketers.",
    date: '8th Dec 2023',
    text: "In the context of hospitality, the statement emphasises the idea that providing exceptional and memorable experiences to guests can turn them into enthusiastic promoters of the hospitality business.The statement suggests that hospitality businesses should focus on creating experiences that go beyond basic expectations. These experiences should be so outstanding and memorable that guests are eager to talk about them.When guests have remarkable experiences, they are likely to share their positive stories with friends, family, and through online platforms. This word-of-mouth marketing can be highly influential and authentic, reaching a wider audience.Guests who can't wait to share their experiences become advocates for the hospitality brand. Their recommendations and positive reviews act as powerful endorsements, influencing potential customers and building trust.The statement implies that genuine and authentic experiences are more likely to be shared. It's not just about meeting expectations but exceeding them in a way that resonates with guests on a personal level.Exceptional experiences have the potential to go viral, especially in the age of social media. Guests may share their experiences through posts, photos, videos, and reviews, contributing to the organic growth of the hospitality brand.Unlike traditional advertising, guest-generated content serves as sustainable and cost-effective marketing. The positive impact of shared experiences continues long after the guest has left, influencing others to choose the same hospitality service. ",
    addText:
      'In summary, the statement encourages hospitality businesses to prioritise creating remarkable and shareable experiences. By doing so, guests become not only satisfied customers but also enthusiastic advocates, playing a vital role in the organic marketing and growth of the hospitality brand.I leave you with the words of Seth Godin, the secret to marketing success is no secret at all; word of mouth is all that matters.',
  },

  {
    id: 3,
    img: blog3,
    title:
      'Consistency Is The Foundation Of Trust. Be Reliably Excellent In Every Guest Interaction.',
    date: '6th Dec 2023',
    text: "In the context of hospitality, the statement emphasizes the importance of providing a consistently high level of service to guests. In the hospitality industry, where customer satisfaction is paramount, creating a consistent and excellent experience for guests is crucial for building and maintaining a positive reputation.Guests often choose hospitality services based on recommendations, reviews, and past experiences, so a reliable and excellent service contributes significantly to the overall success of a hospitality business.To say consistency is the foundation of trust suggests that guests are more likely to trust and have confidence in a hospitality service when they can rely on a consistent experience. Inconsistency in service quality can lead to uncertainty and erode trust.To be reliably excellent in every guest interaction highlights the need for excellence in all interactions with guests, whether it's during check-in, room service, dining, or any other aspect of the guest experience. It implies that each guest should receive the same high standard of service, creating a predictable and positive experience.In the hospitality industry, guests often seek a stress-free and enjoyable experience. Consistent excellence reduces uncertainty for guests, providing them with confidence that their stay or experience will meet or exceed their expectations.Hospitality is not just about transactions; it's about creating memorable experiences. Consistently excellent interactions between hotel staff and guests contribute to the development of positive personal relationships.This can lead to returning guests and positive word-of-mouth recommendations.Issues and concerns can arise in any hospitality setting.",
    addText:
      ' However, a track record of consistent excellence builds a foundation for effective problem resolution. Guests are more likely to trust that any concerns will be addressed promptly and professionally.Long-term success in the hospitality industry often relies on repeat business and a positive reputation. Consistency in delivering excellent service is a key factor in building a loyal customer base and establishing the business as a reliable and reputable choice. In the hospitality sector, where customer satisfaction is paramount, these principles underscore the importance of maintaining high standards in service delivery, ensuring that each guest has a consistently positive experience, and thereby contributing to the long-term success and reputation of the establishment.I leave you with the words of Millard Drexler, “People like consistency. Whether it’s a store or a restaurant, they want to come in and see what you are famous for.',
  },

  {
    id: 4,
    img: blog4,
    title:
      'Hospitality Is A Team Sport. Collaboration And Communication Make For A Winning Guest Experience.',
    date: '26th Oct 2023',
    text: "The statement conveys several key ideas in the context of the hospitality industry. Let’s break it down Hospitality is not the work of a single individual but a collective effort. It involves various departments and staff working together seamlessly to create a positive and memorable guest experience. Whether it's front-of-house staff, housekeeping, kitchen, maintenance, or management, everyone plays a vital role.Collaborative efforts are essential to address the diverse needs and expectations of guests. Different departments must coordinate their actions to ensure guests receive consistent and high-quality service. For example, the front desk communicates with housekeeping to prepare rooms, while the kitchen coordinates with servers to deliver meals promptly.Effective communication is the linchpin of a successful guest experience. It's not just about communication within the team but also with the guests themselves. This means listening to guests, understanding their preferences, and addressing their requests promptly and accurately.The statement underscores the importance of focusing on the guest. Every aspect of the hospitality operation should revolve around providing the best possible experience for the guest. This requires collaboration and communication to ensure that all guest needs and preferences are met.By working as a team and communicating effectively, a hospitality establishment can maintain a consistent level of service. Whether a guest interacts with the front desk, housekeeping, or the restaurant, they should experience the same level of professionalism and attention to detail.Guests may encounter issues or requests during their stay. Effective collaboration and communication are vital for resolving these issues efficiently.",
    addText:
      'Teams need to work together to address guest concerns promptly and ensure that they leave with a positive impression. In summary, the statement emphasises that successful hospitality is a collective effort where every team member plays a crucial role in delivering an exceptional guest experience.Collaboration and communication are the key elements that bind the team together, allowing them to cater to the diverse needs and expectations of guests and ultimately create a memorable and satisfying stay.As usual I’ll leave you with some wise quotes. Today’s quote is by Roy Bennet and it says.Listen with curiosity. Speak with honesty. Act with integrity. The greatest problem with communication is we don’t listen to understand. We listen to reply. When we listen with curiosity, we don’t listen with the intent to reply. We listen for what’s behind the words.',
  },

  // {
  //   id: 5,
  //   img: blog5,
  //   title:
  //     "Every Interaction Is An Opportunity To Create A Lasting Impression. Make It Count!",
  //   date: "25th Oct 2023",
  //   text: "In the context of hospitality, the statement emphasises the significance of each and every interaction between a guest and a hospitality service provider.Here's what it means:1. Guest Experience: In the hospitality industry, the quality of the guest experience is paramount. Every interaction, whether it's a front desk check-in, a meal in a restaurant, or assistance from a concierge, contributes to the overall experience a guest has during their stay.2. First Impressions: The initial interactions a guest has with a hotel, restaurant, or any establishment often form their first impression. These moments can set the tone for the entire experience.3. Lasting Memories: Positive interactions and exceptional service can create lasting memories for guests. These memories lead to guest satisfaction, loyalty, and positive word-of-mouth recommendations.4. Customer Retention: Making each interaction count is crucial for customer retention. Happy guests are more likely to return in the future and become loyal patrons of your establishment.5. Competitive Advantage: In a highly competitive industry, providing exceptional service in every interaction sets a hospitality business apart from its competitors. It can be a key differentiator.6. Word of Mouth: Guests who have memorable and positive interactions are more likely to share their experiences with friends, family, and on review platforms. This word-of-mouth marketing can significantly impact a business's reputation.7. Personalisation: Tailoring interactions to the specific needs and preferences of each guest can lead to a more personalized and memorable experience. It shows that the establishment values the individual guest.8. Employee Training: Staff should be trained to understand the importance of every interaction. They should be empowered to go the extra mile to ensure guests feel valued and cared for.In summary, the statement underscores the idea that every interaction is an opportunity for a business to leave a positive, lasting impression on its guests.It's a reminder to prioritise exceptional customer service in every aspect of the guest experience to build loyalty, reputation, and success in the industry.I leave you with the words of John Montgomery, “Hospitality exhibits itself in interaction. It could be by checking in a guest, cleaning the guest’s room, taking a meal order in the restaurant, taking a beverage order in the lounge, or any other opportunity that may arise as a guest needs.",
  // },

  {
    id: 6,
    img: blog6,
    title:
      'Anticipate Needs Before They Arise. A Little Thoughtfulness Goes A Long Way.',
    date: '28th Sept 2023',
    text: "The statement in the context of hospitality means that it's not enough to merely respond to guest requests or address their needs when they explicitly mention them.It emphasises the importance of proactively identifying and fulfilling a guest's needs or desires even before they express them.Here's a breakdown of what this statement implies: Proactive Guest Service: Providing excellent service is not just about responding to guest requests; it's about anticipating those needs before guests have to ask. For instance, if a guest arrives at a hotel on a hot day, a proactive approach might involve offering them a cold beverage upon check-in without them having to request it.Enhancing Guest Satisfaction: Anticipating and meeting guest needs before they ask can significantly enhance their overall satisfaction. When guests feel that their comfort and preferences are being prioritised, they are more likely to rate their experience positively and recommend the establishment to others.Building Guest Loyalty: Thoughtful service is a key driver of guest loyalty. When guests experience anticipatory service, they are more likely to return to the same establishment in the future. Additionally, they may share their positive experiences with friends and family, leading to word-of-mouth referrals.Creating Memorable Moments: Anticipatory service can lead to creating memorable moments for guests. For example, if a hotel knows a guest is celebrating a special occasion like a birthday, they might surprise the guest with a complimentary cake in their room, leaving a lasting and positive memory.Enhancing Reputation: Establishments that consistently provide thoughtful service tend to build strong reputations for excellence.",
    addText:
      "Positive reviews and word-of-mouth recommendations from satisfied guests can contribute to the long-term success and profitability of a hospitality business.In essence, the statement emphasises that thoughtfulness and anticipation of guest needs are integral to providing exceptional hospitality. It's about creating a positive, tailored, and memorable experience that not only meets but exceeds guest expectations. In the competitive world of hospitality, this approach can set an establishment apart and lead to long-term success.I leave you with the words of Meher Baba, People wait for the big moment, the great event, and forget that happiness comes from building steadily on the small daily things of life. People wait for that special moment to express love and forget that love springs from thoughtfulness practiced every day. People wait, but waiting is future and NOW is always the time.",
  },
  // {
  //   id: 7,
  //   img: blog7,
  //   title:
  //     "Feedback Is A Gift. Embrace It, Learn From It, And Use It To Continuously Improve.",
  //   date: "14th Sept 2023",
  //   text: "In the context of hospitality, the statement emphasises the importance of guest feedback and reviews in the hospitality industry.It underscores the idea that feedback from guests is a valuable resource that can help hospitality establishments enhance their services, deliver a better guest experience, and ultimately thrive in a competitive industry. It encourages a proactive and customer-centric approach to continuous improvement.Let’s break it down some more:When we say Feedback is a Gift: This suggests that when guests take the time to provide feedback, whether it's positive or negative, it should be seen as a valuable contribution. It's a gift because it provides insight into the guest experience and how the hospitality establishment is perceived.Embrace It: means that Hospitality professionals should welcome and encourage feedback from guests. Instead of avoiding criticism or ignoring comments, they should create an environment where guests feel comfortable sharing their thoughts and opinions.Learn from It: reminds us that Feedback offers a learning opportunity. It allows the hospitality staff and management to gain insights into what they are doing well and where there might be areas for improvement. Learning from feedback helps identify strengths and weaknesses.Use It to Continuously Improve: suggests that The ultimate goal of feedback in hospitality is to drive improvement. Whether it's making changes to service standards, addressing specific issues, or enhancing overall guest satisfaction, the insights gained from feedback should be actively used to bring about positive changes.I leave you with the words of Ed Batista “we can’t sit back and wait for feedback to be offered, particularly when we are in a leadership role. If we want feedback to take root in the culture, we need to explicitly ask for it.",
  // },
  // {
  //   id: 8,
  //   img: blog8,
  //   title:
  //     "Attention To Detail Is The Secret Ingredient That Turns Ordinary Experiences Into Extraordinary Memories.",
  //   date: "31st Aug 2023",
  //   text: "In the context of hospitality, the statement emphasises the importance of focusing on even the smallest aspects of a guest's experience to create truly exceptional and memorable moments.Let's break down what this statement means:Attention to Detail: This refers to being meticulous and thorough in every aspect of service and interaction with guests. It involves noticing and addressing even the most subtle details that might contribute to the overall experience.Secret Ingredient: Just as a secret ingredient can make a dish exceptional, attention to detail is the hidden element that elevates the overall experience. It's not always immediately obvious to guests, but it significantly impacts how they perceive and remember their time spent in your establishment.Ordinary Experiences: These are the baseline interactions or services that guests might expect. It's the standard level of service that meets the basic requirements.Extraordinary Memories: These are the exceptional moments that stand out in a guest's mind long after their visit. They are the experiences that go above and beyond expectations and leave a lasting positive impression.In summary, the statement suggests that by paying close attention to the smallest details of service, ambiance, presentation, and more, hospitality professionals can transform what might have been ordinary interactions or experiences into extraordinary memories for their guests.It's about exceeding expectations, surprising and delighting guests with thoughtful touches, and creating a lasting emotional connection that guests will remember and share with others.I leave you with the words of Marco Arment, Attention to detail can't be (and never is) added later. It's an entire development philosophy, methodology, and culture.",
  // },
  // {
  //   id: 9,
  //   img: blog9,
  //   title:
  //     "Listen Actively, Speak Warmly, And Empathize Sincerely. Connect With Your Guests On A Human Level..",
  //   date: "24th Aug 2023",
  //   text: "In the context of hospitality, the statement emphasises the importance of effective communication and emotional connection when interacting with guests or customers.Let's break down what each part of the statement means:Firstly, Listen Actively: This means paying full attention to what the guest is saying, not just hearing their words. Active listening involves giving your full focus, maintaining eye contact, nodding to show understanding, and avoiding interrupting. It's about making the guest feel heard and valued.Secondly, Speak Warmly: When interacting with guests, using a warm and friendly tone of voice creates a welcoming atmosphere. Speaking warmly involves using polite language, a pleasant demeanour, and a positive attitude. This can help put guests at ease and make them feel comfortable.Thirdly, Empathise Sincerely: Empathy involves understanding and sharing the feelings of another person. In the context of hospitality, it means recognising and acknowledging the emotions and needs of your guests. Sincere empathy shows that you genuinely care about their well-being and are willing to provide assistance or support as needed.And fourthly, connect on a Human Level: This aspect emphasises treating guests as individuals rather than just customers. It involves recognising their unique preferences, needs, and experiences. Connecting on a human level means building a rapport with guests by finding common ground, showing genuine interest, and creating a more personalised experience.Even banks have banks have moved from sending emails with the generic ‘dear valued customer’ to the personalised, dear Justina.In summary, the statement underscores the importance of fostering meaningful and genuine interactions with guests in the hospitality industry.By actively listening, speaking warmly, empathising sincerely, and connecting on a human level, hospitality professionals can create a positive and memorable experience for their guests, leading to increased satisfaction and loyalty.I leave you with one of my favourite quotes, the words of the great Maya Angelou that says, People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  // },
  {
    id: 10,
    img: blog10,
    title:
      'Personalisation Is The Key To Making Guests Feel Special. Remember The Little Things That Matter.',
    date: '17th Aug 2023',
    text: "The statement Personalisation is the key to making guests feel special. Remember the little things that matter,highlights the significance of tailoring experiences and services to individual guests' preferences and needs.Let's explore its meaning in detail:In the context of hospitality, personalisation refers to customising guest experiences and interactions based on their specific preferences, tastes, and requirements. It involves going beyond a one-size-fits-all approach and recognising that each guest is unique.Personalisation aims to create a sense of individual importance and attention for each guest. When guests feel special, they are more likely to have a positive emotional connection with your establishment, leading to enhanced satisfaction and loyalty.Remembering the little things means paying attention to the small details that might seem insignificant but can have a profound impact on the guest experience. It involves being observant and thoughtful about guest preferences, past interactions, and special occasions.The essence of this statement lies in the fact that personalisation is a powerful way to show guests that their individual needs and preferences are genuinely valued and appreciated. When guests receive personalised attention and care, they are more likely to feel connected to your establishment and are more inclined to return in the future.In a competitive industry such as hospitality, personalisation sets your establishment apart by creating memorable and distinctive guest experiences.",
    addText:
      "Remembering the little things and tailoring services to each guest's preference contributes to creating lasting impressions and positive word-of-mouth, ultimately driving guest satisfaction, loyalty, and business success. I leave you with the words of John Bessant – “In a world where things increasingly become commodities (especially services) the real differentiator becomes the personal experience you are able to create in the lives of your customers.",
  },
  {
    id: 11,
    img: blog11,
    title:
      "Exemplary Service Starts with a Servant's Heart. Be Genuinely Committed to Serving Others.",
    date: '10th Aug 2023',
    text: "The statement Exemplary service starts with a servant's heart. Be genuinely committed to serving others, conveys the essence of true hospitality and the fundamental mindset that underpins exceptional customer service.Let's break down the meaning of this statement:Having a servant's heart means having a genuine desire to help and serve others selflessly. It reflects a compassionate and caring approach where the primary focus is on meeting the needs and expectations of the guests or customers.Exemplary service refers to providing service that goes above and beyond the ordinary. It is about delivering outstanding experiences that leave a lasting impression and exceed customer expectations.Genuinely committed indicates a wholehearted dedication to the task of serving others. It means being fully engaged and enthusiastic about providing exceptional service, not merely going through the motions.The core essence of hospitality lies in serving others. It means placing the needs of guests or customers above one's own and making their well-being and comfort a top priority.In essence, the statement emphasises the importance of having a sincere and humble attitude when serving others in the hospitality industry. It is about cultivating a genuine care for guests and customers, seeking to understand their preferences, anticipating their needs, and proactively attending to their requests. It involves going the extra mile to create a welcoming and comfortable environment where guests feel valued and appreciated.Having a servant's heart in the context of hospitality also means being attentive, empathetic, and responsive to the unique requirements of each individual.",
    addText:
      " It is not just about completing tasks or following procedures but about building meaningful connections and providing personalised experiences.When service providers approach their roles with a servant's heart and genuine commitment to serving others, they embody the true spirit of hospitality. This mindset fosters a culture of exceptional service and creates memorable guest experiences that leave a positive and lasting impact on customers, fostering loyalty and advocacy for the business.I leave you with the words of Wayne Mack, “A leader must have a servant’s heart. And if he has a servant’s heart, he will act like a servant and react like a servant when he is treated like a servant.",
  },
];

export const assuranceCards = [
  {
    img: assurance1,
    title: 'Comprehensive Assessment',
    text: 'We begin with a thorough assessment of your existing quality assurance processes, ensuring they align with the specific needs of the hospitality industry. This includes evaluating your service delivery, cleanliness standards, and overall guest satisfaction protocols.',
  },
  {
    img: assurance2,
    title: 'Automation Integration',
    text: 'Embrace the efficiency of automation in QA processes. We integrate automated testing for systems, ensuring smooth operations in reservations, check-ins, and other critical processes, allowing your staff to focus on delivering exceptional guest service.',
  },
  {
    img: assurance3,
    title: 'Quality Metrics and Reporting',
    text: 'Establishing key quality metrics, we provide insightful reporting on service quality, cleanliness, and overall guest satisfaction. Our reports serve as a valuable tool for continuous improvement and strategic decision-making.',
  },
  {
    img: assurance4,
    title: 'Customized QA Solutions',
    text: 'Tailoring services to the hospitality industry, we provide customized QA solutions that focus on enhancing guest  experiences. From meticulous room inspections to evaluating front-of-house services, our solutions are designed to elevate every aspect of your operation.',
  },
  {
    img: assurance5,
    title: 'Improvement and Service Recovery',
    text: 'Our commitment to continuous improvement includes service recovery strategies. In the event of service lapses, we work with you to implement effective recovery strategies, turning potential negatives into opportunities to showcase your commitment to guest satisfaction.',
  },
  {
    img: assurance6,
    title: 'Provision of Enhanced Services',
    text: 'We deploy services such as Mystery Shopping Programs; Scalable Solutions; and Collaboration and Communication to offer unbiased evaluations of guest experiences, scale our services to meet demands, and foster collaboration.',
  },
];

export const testimonial = [
  {
    name: 'Kunle Lawal',
    designation: 'Executive Director, Electoral College Nigeria',
    text: ' Justina  expertise in HR and customer service can be described as an avant-garde. Her dedication to duty is military precision  and her focus is unwavering. I absolutely would recommend  her to organizations seeking optimum results',
    img: test1,
  },
  {
    name: 'Nkereuwem Onung',
    designation: 'President, Federation of Tourism Associations of Nigeria',
    text: 'Mrs Justina Ovat is Principal consultant at CHH Consults. Hospitality trainer and a service design Specialist. She is a very reliable and competent social Entrepreneur. She is a performance enhancer who keeps to agreement and delivers on schedule. She is highly recommended.',
    img: test1,
  },
  {
    name: 'Agnes Sherina',
    designation: 'Co-Founder 7Ace Consult and Founder Arc Initiative',
    text: 'Justina Ovat is the epitome of excellent and life-long memorable client experience in the hospitality industry; an asset that every hospitality establishments need in their corner!',
    img: test1,
  },
  {
    name: 'Mmanti Umoh',
    designation: 'Senior Partner, The PurplePatch Consults',
    text: "Justina Ovat isn't just a hospitality professional; she's a whirlwind of passion and expertise. I've had the privilege of partnering with Justina on several projects, and her depth of knowledge is as awe-inspiring as her strategic vision. If you seek a consultant who delivers results and ignites change, look no further than Justina Ovat.",
    img: test1,
  },
  {
    name: 'Uchenna Achunine',
    designation:
      'Director, Business Development and Communications, Nigerian Conservation Foundation (NCF)',
    text: 'Having had the privilege of working closely with her, I am consistently impressed by her unwavering dedication, exceptional work ethic, and outstanding professional competence. Her ability to navigate complex projects with grace and precision is truly commendable.',
    img: test1,
  },
  {
    name: 'Kunle Lawal',
    designation: 'Chief Registrar, Cross River State Judiciary',
    text: 'Justina is an invaluable asset that is innovative and inspire a huge drive for success as a mindset and in practice',
    img: test1,
  },
];

import { BiSolidTimeFive } from 'react-icons/bi';
import { IoShieldHalf } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';
import { MdGroups } from 'react-icons/md';
import { FaChartLine, FaUsersRays } from 'react-icons/fa6';

export const clienthelp = [
  {
    text: 'Reduce onboarding time and early attrition',
    icon: <BiSolidTimeFive size={20} />,
    subtext:
      'Minimize early attrition and accelerate new hire productivity through structured learning pathways that embed your service standards from day one.',
  },
  {
    text: 'Build Competent Supervisors and First-Time Managers',
    icon: <MdGroups size={20} />,
    subtext:
      'Develop supervisors and first-time managers with the skills to lead high-performing teams through structured learning pathways and capability development.',
  },
  {
    text: 'Improve Service Consistency Across Departments',
    icon: <FaChartLine size={20} />,
    subtext:
      'Ensure uniform excellence across all departments and touchpoints in your organization through standardized learning systems and clear performance expectations.',
  },
  {
    text: 'Create Internal Leadership Pipelines',
    icon: <GiBookshelf size={20} />,
    subtext:
      'Build internal talent pathways that develop future leaders from within your organization, reducing dependency on external hires and strengthening organizational culture.',
  },
  {
    text: 'Protect Brand Standards Through Learning Systems',
    icon: <IoShieldHalf size={20} />,
    subtext:
      'Safeguard your brand reputation through comprehensive learning systems that ensure service excellence is sustainable, not personality-driven.',
  },
  {
    text: 'Strengthen Organizational Culture',
    icon: <FaUsersRays size={20} />,
    subtext:
      'Minimize early attrition and accelerate new hire productivity through structured learning pathways that embed your service standards from day one.',
  },
];

export const methodology = [
  {
    text: 'Diagnose learning culture maturity',
    subtext:
      'Evaluate your current learning culture and identify capability gaps and leadership development needs',
  },
  {
    text: 'Design role-based learning architectures',
    subtext:
      'Create role-based learning pathways and governance structures aligned with your business objectives',
  },
  {
    text: 'Enable leaders and supervisors as learning owners',
    subtext:
      'Evaluate your current learning culture and identify capability gaps and leadership development needs',
  },
  {
    text: 'Embed governance and sustainability mechanisms',
    subtext:
      'Embed accountability systems that ensure continuous improvement and long-term effectiveness',
  },
];

import { FaHotel } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa';
import { FaPlaneDeparture } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import hotel from '../assets/images/hotel.jpg';
import hospitality from '../assets/images/hospitality.jpg';
import tourism from '../assets/images/tourism.jpg';
import graduate from '../assets/images/graduate.jpg';

export const workingClients = [
  {
    text: 'Hotels and resorts',
    img: hotel,
    icon: <FaHotel size={20} />,
    subtext:
      'Elevate service standards and build leadership capacity across all departments, from front desk to operations to guest services.',
  },
  {
    text: 'Hotels and resorts',
    img: hospitality,
    icon: <FaHospital size={20} />,
    subtext:
      'Scale consistent service delivery and learning systems across multiple properties while developing internal talent pipelines.',
  },
  {
    text: 'Tourism and service-focused organizations',
    img: tourism,
    icon: <FaPlaneDeparture size={20} />,
    subtext:
      'Elevate service standards and build leadership capacity across all departments, from front desk to operations to guest services.',
  },
  {
    text: 'Hospitality education and training institutions',
    img: graduate,
    icon: <GiGraduateCap size={20} />,
    subtext:
      'We develop learning frameworks that prepare future hospitality professionals for real-world excellence.',
  },
];

import serve1 from '../assets/images/serve1.png';
import serve2 from '../assets/images/serve2.png';
import serve3 from '../assets/images/serve3.png';

export const whoweserve = [
  {
    image: serve1,
    text: 'Visiting Executives & Private Guests',
    subtext: [
      'Business travelers on short stays',
      'VIP guests requiring premium coordination',
      'Tourists seeking curated local experiences',
      'Officials on duty visits',
    ],
  },
  {
    image: serve2,
    text: 'Diaspora Clients & Non-Resident Families',
    subtext: [
      'Property owners needing oversight',
      'Families planning visits from abroad',
      'Investors requiring local representation',
      'Investors requiring local representation',
    ],
  },
  {
    image: serve3,
    text: 'Corporates, Institutions & Event Hosts',
    subtext: [
      'Conference organizers',
      'Retreat planners',
      'Government delegations',
      'NGOs and international organizations',
    ],
  },
];

import { FaUser } from 'react-icons/fa';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';

export const ourServices = [
  {
    icon: <FaUser size={20} />,
    title: ' Visitor & Executive Concierge',
    text: 'End-to-end coordination for short stays, official visits, and private travel',
    list: [
      'Accommodation and transportation .',
      'Dining and Itinerary Planning.',
      'On-Call Local Support.',
    ],
  },
  {
    icon: <FaHouseChimneyWindow size={20} />,
    title: 'Diaspora & Absentee Concierge',
    text: 'Ongoing local representation for non-resident clients',
    list: [
      'Property Oversight and maintenance .',
      'Vendor Coordination.',
      'Visit Planning and Local Execution.',
    ],
  },
  {
    icon: <GiTeamIdea size={20} />,
    title: 'Corporate & Institutional Concierge',
    text: 'Professional delegation support for conferences and retreats',
    list: [
      'Conference and Retreat coordination.',
      'Delegation Management.',
      'Single Point Of Contact.',
    ],
  },
];

export const howitworks = [
  {
    title: 'Engage',
    text: 'We assess needs and scope support required for a seamless experience.',
  },
  {
    title: 'Coordinate',
    text: 'We manage access, vendors, and logistics with precision and professionalism',
  },
  {
    title: 'Deliver',
    text: 'We ensure seamless execution with complete discretion and accountability',
  },
];

import { GiPadlock } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';

export const commitment = [
  {
    icon: <GiPadlock size={20} />,
    title: 'Discretion',
    text: 'Absolute Confidentiality in all engagements.',
  },
  {
    icon: <IoShieldHalf size={20} />,
    title: 'Reliability',
    text: 'Consistent excellence in Service delivery.',
  },
  {
    icon: <FaStar size={20} />,
    title: 'Professionalism',
    text: 'Uncompromising Standard in every detail.',
  },
];

import framework1 from '../assets/images/Framework1.png';
import framework2 from '../assets/images/Framework2.png';
import framework3 from '../assets/images/Framework3.png';
import framework4 from '../assets/images/Framework4.png';
import framework5 from '../assets/images/Framework5.png';
import { PiStrategy } from 'react-icons/pi';
import { PiAsclepius } from 'react-icons/pi';
import { LuRoute } from 'react-icons/lu';
import { PiStudent } from 'react-icons/pi';
import { TiSpiral } from 'react-icons/ti';

export const framework = [
  {
    image: framework1,
    color: {
      background: 'bg-[#F6F7FC]',
      text: 'text-[#090F3A]',
      textbg: 'bg-[#090F3A]',
    },
    icon: <PiStrategy size={20} />,
    title: 'Learning Strategy Alignment',
    subtext: [
      'Capability gap diagnosis',
      'Competency framework development',
      'Learning pathway design',
      'Learning pathway design',
    ],
  },
  {
    image: framework2,
    color: {
      background: 'bg-[#ECEDDF]',
      text: 'text-[#2D300F]',
      textbg: 'bg-[#2D300F]',
    },
    icon: <PiAsclepius size={20} />,
    title: 'Structured Learning Journey Design',
    subtext: [
      'Pre-event diagnostics',
      'Program sequencing and cognitive progression',
      'Experiential learning integration',
      'Post-event reinforcement systems',
    ],
  },
  {
    image: framework3,
    color: {
      background: 'bg-[#FEF0FD]',
      text: 'text-[#583755]',
      textbg: 'bg-[#583755]',
    },
    icon: <LuRoute size={20} />,
    title: 'Onboarding Experience Architecture',
    subtext: [
      'Performance-based onboarding academies',
      'Structured progression models',
      'Blended learning systems',
      'KPI-driven evaluation dashboards',
    ],
  },
  {
    image: framework4,
    color: {
      background: 'bg-[#E6DEE6]',
      text: 'text-[#1F0D1F]',
      textbg: 'bg-[#1F0D1F]',
    },
    icon: <PiStudent size={20} />,
    title: 'Curriculum & Corporate Academy Development',
    subtext: [
      'Modular curriculum design',
      'Certification and accreditation alignment',
      'Multi-level capability pathways',
      'Assessment and quality assurance frameworks',
    ],
  },
  {
    image: framework5,
    color: {
      background: 'bg-[#F4EFDC]',
      text: 'text-[#3F3307]',
      textbg: 'bg-[#3F3307]',
    },
    icon: <TiSpiral size={20} />,
    title: 'Destination-Integrated Learning Experiences',
    subtext: [
      'Hospitality and event ecosystem integration',
      'Retreat and conference architecture',
      'Executive immersion design',
      'Experience-driven engagement optimization',
    ],
  },
];

import { PiGraduationCapDuotone } from 'react-icons/pi';
import { LuBrain } from 'react-icons/lu';
import { PiPresentationChart } from 'react-icons/pi';
import { PiVideoConferenceFill } from 'react-icons/pi';
import { GoDatabase } from 'react-icons/go';
import { PiLaptopDuotone } from 'react-icons/pi';

export const serviceApps = [
  {
    text: 'Executive Leadership Programs',
    icon: <PiGraduationCapDuotone size={20} />,
    subtext:
      'Developing senior leaders through immersive experiences that sharpen strategic thinking, decision-making, and organizational impact.',
  },
  {
    text: 'Corporate Retreats',
    icon: <LuBrain size={20} />,
    subtext:
      'Transforming offsite gatherings into structured learning journeys that drive alignment, innovation, and team cohesion.',
  },
  {
    text: 'Strategy Offsites',
    icon: <PiStrategy size={20} />,
    subtext:
      'Facilitating high-stakes planning sessions where leadership teams define direction, resolve challenges, and commit to action.',
  },
  {
    text: 'Annual Conferences',
    icon: <PiPresentationChart size={20} />,
    subtext:
      'Designing conferences as developmental ecosystems—not just information dumps—with measurable learning outcomes.',
  },
  {
    text: 'Corporate Academies',
    icon: <PiVideoConferenceFill size={20} />,
    subtext:
      'Building institutionalized learning systems that develop talent pipelines and preserve organizational knowledge at scale.',
  },
  {
    text: 'Graduate Programs',
    icon: <PiGraduationCapDuotone size={20} />,
    subtext:
      'Structuring graduate development tracks that build foundational capabilities and accelerate early-career progression.',
  },
  {
    text: 'Onboarding Programs',
    icon: <GoDatabase size={20} />,
    subtext:
      'Transforming new hire orientation into competency-based experiences that reduce time-to-productivity and strengthen retention.',
  },
  {
    text: 'Sector-Specific Capability Development Initiatives',
    icon: <PiLaptopDuotone size={20} />,
    subtext:
      'Creating tailored learning interventions that address unique industry challenges and build specialized expertise.',
  },
];

export const stakeholders = {
  organizations: [
    'Increased learning ROI',
    'Accelerated leadership development',
    'Reduced time-to-productivity',
    'Improved capability alignment with strategy',
    'Structured, repeatable learning systems',
  ],
  partners: [
    'Increased learning ROI',
    'Accelerated leadership development',
    'Reduced time-to-productivity',
    'Improved capability alignment with strategy',
    'Structured, repeatable learning systems',
  ],
};

export const differentiators = [
  'strategy',
  'design',
  'environment',
  'delivery',
  'reinforcement',
  'measurement',
];

import { IoIosSearch } from 'react-icons/io';
import { AiOutlinePieChart } from 'react-icons/ai';
import { GoGear } from 'react-icons/go';
import { MdRocket } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';

export const engageModel = [
  {
    color: {
      background: 'bg-[#ECEFF8]',
      text: 'text-[#142180]',
    },
    text: 'Discovery & Diagnostic Phase',
    icon: <IoIosSearch size={20} />,
    subtext:
      'Identifying capability gaps and learning needs through stakeholder assessments.',
  },
  {
    color: {
      background: 'bg-[#FEE1FB]',
      text: 'text-[#71476D]',
    },
    text: 'Learning Architecture Design',
    icon: <AiOutlinePieChart size={20} />,
    subtext:
      'Creating tailored frameworks and curriculum structures aligned to your goals.',
  },
  {
    color: {
      background: 'bg-[#E7DDB6]',
      text: 'text-[#6B570C]',
    },
    text: 'Experience & Curriculum Development',
    icon: <GoGear size={20} />,
    subtext:
      'Building engaging content and experiential modules that drive results.',
  },
  {
    color: {
      background: 'bg-[#CCBBCC]',
      text: 'text-[#351635]',
    },
    text: 'Program Implementation & Oversight',
    icon: <MdRocket size={20} />,
    subtext:
      'Delivering seamless execution with quality assurance and real-time coordination.',
  },
  {
    color: {
      background: 'bg-[#D8DABD]',
      text: 'text-[#4D5219]',
    },
    text: 'Evaluation & Optimization',
    icon: <BsGraphUpArrow size={20} />,
    subtext:
      'Measuring impact and refining programs for continuous improvement.',
  },
];

import { PiTreeStructureLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { BsStopwatchFill } from "react-icons/bs";

export const outcomeArr = [
  {
    icon: <PiTreeStructureLight size={30} />,
    title: 'Structured learning ecosystems that Scale.',
  },
  {
    icon: <MdRocket size={30} />,
    title: 'Institutionalized leadership pipelines',
  },
  {
    icon: <GoDatabase size={30} />,
    title: 'Measurable capability progression',
  },
  {
    icon: <FaRegHandshake size={30} />,
    title: 'Stronger culture alignment through Learning',
  },
  {
    icon: <BsStopwatchFill size={30} />,
    title: 'Scalable learning frameworks',
    
  },
];