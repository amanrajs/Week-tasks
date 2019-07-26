const defaultContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const defaultDescription='created at 21 July 2019""created at 21 July 2019';
const defaultTitle='SAMPLE NEWS HEADING';
const buttonText='Continue Reading';
const checkButtonClickRegex=/^\d+$/;
const regexEmail = /\S+@\S+\.\S+/;
const emailSubscribedMessage='Subscribed Successfully';
const emailInvalidMessage='Invalid Email id';
const closePopupText='X';
const imageSource='resource/download.png';
const selectCategoryText='Select Category';
const subscribeText='Subscribe';
const headerTagText='NEWSFEED';
const headerTagSubText='yet Another Newsfeed';
const footerText = ' \u00A9 NewsFeed 2019 ';
const defaultSelectChannelText='Select a NEWS Channel'

const article_data = [
    {
        imageSrc: 'images/bbc.jpg',
        postTitle: 'Delhi CEO writes to EC over Modi web series',
        postDate: '29th June , 2019',
        postCategory: 'BBC',
        postDesc: 'Delhi Chief Electoral Officer Ranbir Singh has written to the poll panel saying that a web series on Modi available on the Eros Now website was streaming without certification from the Media Certification and Monitoring Committee (MCMC).A senior official at the Delhi CEO`s office reportedly said that they have brought to the notice of the ECI that a series on PM Narendra Modi is being screened on the Eros Now platform without MCMC certification. Since it not a Delhi specific matter, the CEO office has asked the ECI to take cognizance of the matter.'
    },
    {
        imageSrc: 'images/timesNow.jpg',
        postTitle: 'New guidelines to tackle mental health of inmates',
        postDate: '22th June , 2019',
        postCategory: 'Times Now',
        postDesc: 'At present, only Pennsylvania has constituted a detailed manual on mental health for prisoners. Dr Nand Kumar, professor of psychiatry at AIIMS has framed these guidelines on mental health condition for prisoners.Doctors of AII India Institute of Medical Sciences (AIIMS) in collaboration with Delhi Prison Administration have drafted first guidelines on mental health issues for inmates in jail. The manual known as "Psychological First Aid" will be released on Tuesday.'
    },
    {
        imageSrc: 'images/woin.jpg',
        postTitle: 'City ring vowing jobs in Territorial Army busted',
        postDate: '20th June , 2019',
        postCategory: 'WION',
        postDesc: 'The fraudsters, police said, have interstate links and they confidently organised physical and medical tests in park adjacent to cantonment area of Bhubaneswar.The entire nexus was unearthed after Delhi crime branch received a complaint from one of the job seeker on April 13. The complainant also given a lead that the accused are coming here in Mahipalpur area of Delhi to distribute admit cards.'
    },
    {
        imageSrc: 'images/abnAJ.jpg',
        postTitle: '"Traders" ire to impact election results in Delhi',
        postDate: '20th June , 2019',
        postCategory: 'ABN Andhrajyothi',
        postDesc: 'The Delhi High Court asked Delhi Pollution Control Committee (DPCC) not to take coercive steps against traders until the next day of hearing on April 26.The violence that rocked the area a month before Delhi votes in the Lok Sabha elections left many wounded on both sides and renewed the old political slugfest over the hot button issue.Since December 2017, about 10,000 commercial establishments have been sealed across the National Capital for land misuse (converting residential units into commercial ones), non-payment of conversion charges and increased pollution emissions.'
    },
    {
        imageSrc: 'images/tv9.jpg',
        postTitle: 'Ahead of polls, MLA hostel searched in Chennai',
        postDate: '29th June , 2019',
        postCategory: 'TV9',
        postDesc: 'With just a few days left for the Lok Sabha elections in Tamil Nadu, a team of officials from the flying squad of the Election Commission along with Income Tax officials carried out raids in Tamil Nadu MLA’s Hostel in Omandurar Government Estate.Sources in the IT department said rooms of Tamil Nadu revenue minister RB Udhayakumar and two others were searched. However, it is not clear whether the team seized any cash or incriminating documents from the minister’s room.'
    },
    {
        imageSrc: 'images/republictv.jpg',
        postTitle: 'Canada drops reference to Sikh extremism from terror threat report',
        postDate: '22th June , 2019',
        postCategory: 'REPUBLIC',
        postDesc: 'Pro-Khalistan group Sikhs for Justice (SFJ) has called upon Canadian Prime Minister Justin Trudeau to step down for practising the politics of expediency in having his government drop Sikh extremism from a report on terror the day before he participated in Baisakhi parade.The damage has been done Mr Prime Minister and you should resign over this, said Gurpatwant Singh Pannun, SFJ legal adviser.'
    },
    {
        imageSrc: 'images/tv5.jpg',
        postTitle: 'Jet puts off date to resume foreign flights',
        postDate: '20th June , 2019',
        postCategory: 'TV5',
        postDesc: 'Jet Airways has stopped accepting bookings for its Mumbai-Paris flight until June 10 and closed reservations for its Mumbai-London, Mumbai-Amsterdam-Mumbai and Bangalore-Amsterdam flights, up to April 18.Meanwhile, the airline`s pilots who are on the warpath have also decided to defer their strike which was scheduled from Monday as they want to give the airline a chance to survive, keeping in mind the meeting with banks tomorrow.'
    },
    {
        imageSrc: 'images/sakshi.jpg',
        postTitle: 'SP, BJP battle over national security',
        postDate: '20th June , 2019',
        postCategory: 'Sakshi',
        postDesc: 'Prime Minster Narendra Modi also targeted SP-BSP alliance while addressing a rally in Uttar Pradesh`s Moradabad district. PM Modi said, The irony is that elephant is riding on bicycle for personal gains. They have done nothing for the poor in the state during their regimes, and now they are trying to lure public on fake promises.'
    },
    {
        imageSrc: 'images/ntv.jpg',
        postTitle: 'Summer assault! Delhi again in big water crisis',
        postDate: '20th June , 2019',
        postCategory: 'NTV',
        postDesc: 'The crisis turns so grave that violent fights over water among neighbours in summers are common. Delhi Police said they are gearing up to tackle water clashes that left three dead and many injured last summer.All experts are unanimous that Delhi must revive its water bodies, ensure groundwater recharge through storm drains, store rainwater, and recycle and reuse its waste water.'
    },
    {
        imageSrc: 'images/CBN.jpg',
        postTitle: 'Melbourne nightclub shooting leaves 1 dead, 3 injured',
        postDate: '20th June , 2019',
        postCategory: 'CBN',
        postDesc: 'Sunday`s shooting took place around 3.20 a.m. in the lively entertainment district of Melbourne`s southeastern suburb of Prahran, police said.Three security guards and a man queuing to enter were taken to hospital with gunshot injuries, police said in a televised news conference in Melbourne.'
    },
];
