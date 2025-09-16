const backendDummyData = [
  {
    id: "1",
    title:
      "Independence Day Special Promo | स्वतंत्रता दिवस विशेष | Powerkids Wishes you Happy Independence Day",
    channelLogo:
      "https://tse2.mm.bing.net/th/id/OIP.CTJ_g0wbWpgn2DR_Ko7N4gHaHa?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "1 year ago",
    views: "23.1M",
    author: "Power Kids",
    videoUrl: "https://www.youtube.com/embed/_deJF3Kgblo",
    subscriber: "48.7M Subscribers",
    category: "Cartoon",
  },
  {
    id: "2",
    title: "Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid",
    channelLogo:
      "https://static.wixstatic.com/media/5871b3_9a733a7cfc364bb6b1572cc43f9ea916~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/5871b3_9a733a7cfc364bb6b1572cc43f9ea916~mv2.jpg",
    uploadTime: "9 months ago",
    views: "352M",
    author: "Coke Studio Pakistan",
    videoUrl: "https://www.youtube.com/embed/-2RAq5o5pwc?si=mha6M1-n1sAer-2Q",
    subscriber: "17M Subscribers",
    category: "Music",
  },
  {
    id: "3",
    title: "Anuv Jain - JO TUM MERE HO (Official Video)",
    channelLogo:
      "https://tse2.mm.bing.net/th/id/OIP.d_MSPdCYG8XS_l4kY7Uz2wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "2 years ago",
    views: "302M",
    author: "Anuv Jain",
    videoUrl: "https://www.youtube.com/embed/ilNt2bikxDI?si=tk9SYtPSBzAypgX4",
    subscriber: "3.37M Subscribers",
    category: "Music",
  },
  {
    id: "4",
    title:
      "SOFTLY (Official Music Video) KARAN AUJLA | IKKY | LATEST PUNJABI SONGS",
    channelLogo:
      "https://i.pinimg.com/736x/c7/b5/84/c7b5843d471a0221fe2f7b0b106a813d.jpg",
    uploadTime: "6 months ago",
    views: "391M",
    likes: 1400000,
    dislikes: 2000,
    author: "Karan Aujla",
    videoUrl: "https://www.youtube.com/embed/cWMxCE2HTag?si=hzI7FL-2r2YObmJN",
    subscriber: "4.42M Subscribers",
    category: "Music",
  },
  {
    id: "5",
    title:
      "How I Got Full-Time JOB at FLIPKART in DATA SCIENCE via Internshala",
    channelLogo:
      "https://play-lh.googleusercontent.com/8t6U6HGuMnP1DAJYpb4U_fEwVA7fgaOBJYRyfPHM5OLZllGj-8tsmJhu6Y4ikMrGpZg",
    uploadTime: "1 month ago",
    views: "639",
    author: "Internshala",
    videoUrl: "https://www.youtube.com/embed/fzXqYBJhXSY?si=yWdC-z0oLLqfz33C",
    subscriber: "148K Subscribers",
    category: "Podcast",
  },
  {
    id: "6",
    title: "Gogi aur Goli ke beech hui ladai!| FULL MOVIE |",
    channelLogo:
      "https://tse4.mm.bing.net/th/id/OIP.tg2DwVkmp6lEkN0FdvKQQAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "3 years ago",
    views: "2.4M",
    author: "Taarak Mehta Ka Ooltah Chashmah",
    videoUrl: "https://www.youtube.com/embed/K7DkBt1z1wo?si=KJZz1np3qmiEg2Rg",
    subscriber: "33M Subscribers",
    category: "Comedy",
  },
  {
    id: "7",
    title:
      "NO PROBLEM - Full Comedy Movie |Paresh Rawal| Sanjay Dutt | Anil Kapoor",
    channelLogo:
      "https://www.shemarooent.com/uploads/channel_images/thumb/1712315348.jpg",
    uploadTime: "May 9, 2012",
    views: "35.9M",
    author: "Shemaroo Comedy",
    videoUrl: "https://www.youtube.com/embed/wZy8BHzdS7I?si=txxXAW4hUsUT6pzq",
    subscriber: "22M Subscribers",
    category: "Movie",
  },
  {
    id: "8",
    title:
      "Chhota Bheem - Paani se Sona | Adventure Cartoons for Kids | Fun Kids Videos",
    channelLogo:
      "https://www.seekpng.com/png/full/360-3604678_5-photos-green-gold-animation-logo-png.png",
    uploadTime: "October 20, 2010",
    views: "24K",
    author: "Green Gold Kids",
    videoUrl: "https://www.youtube.com/embed/CVWV_VJdkjw?si=lg5aRtvnbWVKQru2",
    subscriber: "8.64M Subscribers",
    category: "Cartoon",
  },
  {
    id: "9",
    title: "Guru Randhawa - SIRRA ft. Kiran Bajwa - Without Prejudice",
    channelLogo:
      "https://tse4.mm.bing.net/th/id/OIP.iP3RaBRgkegQgO9VthO0FQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "2 months ago",
    views: "4.2M",
    author: "Guru Randhawa",
    videoUrl: "https://www.youtube.com/embed/j2ohNffOvQ8?si=Lmp909lBXNSEldAg",
    subscriber: "5.38M Subscribers",
    category: "Music",
  },
  {
    id: "10",
    title:
      "Khan Sir Podcast: India vs China, Pakistan, Bihar’s Reality & Geopolitics | FO343 ",
    channelLogo:
      "https://tse3.mm.bing.net/th/id/OIP.x0APmT13A_CsQhWh7xW3-gHaEs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "1 month ago",
    views: "23M",
    author: "Raj Shamani",
    videoUrl: "https://www.youtube.com/embed/E3oG313_kps?si=4HwgKUNGRIEbgvIh",
    subscriber: "12.6M Subscribers",
    category: "Podcast",
  },
  {
    id: "11",
    title:
      "FULL MATCH: Cody Rhodes vs. Brock Lesnar: WWE Night of Champions 2023",
    channelLogo:
      "https://tse2.mm.bing.net/th/id/OIP.Io0Urz7J40Jp4ZCvMR6VjAHaFY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "July 9, 2023",
    views: "2.7M",
    author: "WWE",
    videoUrl: "https://www.youtube.com/embed/c5z3adB7yqc?si=wON4FcwceFIHXnc7",
    subscriber: "110M Subscribers",
    category: "Wrestling",
    likes: 35000,
    dislikes: 0,
    comments: [
      {
        userId: "@ManabBora-l5w",
        comment: "Lesnar is acting well. This is a 2 minutes job for him 😂😂",
        timestamp: "1 month ago",
      },
      {
        userId: "@eoinphelan6080",
        comment: "Brok is not only star but also BIG MONSTER ☠️☠️☠️",
        timestamp: "1 month ago",
      },
      {
        userId: "@bikashsuna6063",
        comment:
          "Brock is the only wrestler in the WWE that always makes the matches so entertaining and so realistic 🔥🔥🔥 What a legend",
        timestamp: "1 month ago",
      },
    ],
  },
  {
    id: "12",
    title:
      "Match 4 | Pakistan vs Oman | Match Highlights | DP World Asia Cup 2025",
    channelLogo:
      "https://tse3.mm.bing.net/th/id/OIP.2kFPS06ppGHy8FxdVJ_suwHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "4 months ago",
    views: "80M",
    author: "Asian Cricket Council",
    videoUrl: "https://www.youtube.com/embed/Aqb4XQ-_BfM?si=t-PGgCmB2X_ZHPNo",
    subscriber: "110M Subscribers",
    category: "Sports",
    likes: 19000,
    dislikes: 3,
  },
  {
    id: "13",
    title:
      "Top 100 News: देखिए आज की 100 बड़ी ख़बरें | Nepal News | Hindi News | PM Modi | Aaj Tak News",
    channelLogo:
      "https://tse1.mm.bing.net/th/id/OIP.9Z92B54tl1EyiJnT_EGX5QHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "1 day ago",
    views: "117K",
    author: "Aaj Tak",
    videoUrl: "https://www.youtube.com/embed/qJ3hDOVmh9E?si=1rHYcnQUGakrVBqH",
    subscriber: "73.5M Subscribers",
    category: "News",
    likes: 511,
    dislikes: 0,
  },
  {
    id: "14",
    title:
      "Top 100 News: देखिए आज की 100 बड़ी ख़बरें | Nepal News | Hindi News | PM Modi | Aaj Tak News",
    channelLogo:
      "https://tse4.mm.bing.net/th/id/OIP.io4xpsvpMKD9obICrJpNUwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    uploadTime: "2 months ago",
    views: "28K",
    author: "Horror Films",
    videoUrl: "https://www.youtube.com/embed/Xspo0jE3Q6o?si=vqfOheZR9MihtOCM",
    subscriber: "222K Subscribers",
    category: "Horror",
    likes: 174,
    dislikes: 4,
    comments: [
      {
        userId: "@AnujKumar-oy1qg",
        comment: "अभी कौन कौन देख रहा है",
        timestamp: "13 hours ago",
      },
      {
        userId: "@sonirandhir-i3q",
        comment: "Thanks for 80 subscriber",
        timestamp: "6 hours ago",
      },
      {
        userId: "@SaraNamber",
        comment: "Aakhir ek chudail hi dusre chudail ki madad kar sakti hai😂",
        timestamp: "23 hours ago",
      },
    ],
  },
  {
    id: "15",
    title:
      " Aankhein Khuli Song | Mohabbatein | Shah Rukh Khan, Aishwarya Rai | Lata Mangeshkar, Udit Narayan",
    channelLogo:
      "https://media.ptcpunjabi.co.in/wp-content/uploads/2020/08/yrf.jpg",
    uploadTime: "10 year ago",
    views: "48.5M",
    author: "YRF",
    videoUrl: "https://www.youtube.com/embed/eM8Mjuq4MwQ?si=cYzKs8mxbSVTF2Ly",
    subscriber: "69M Subscribers",
    category: "Music",
    likes: 207000,
    dislikes: 0,
    comments: [
      {
        userId: "@yrf",
        comment: "The dance war we never knew we needed",
        timestamp: "3 weeks ago",
      },
      {
        userId: "@ESMashupMusic",
        comment:
          "A message to the future generations..Don’t let this masterpiece song die..",
        timestamp: "1 year ago",
      },
      {
        userId: "@deepakkumar",
        comment:
          "Childhood memories..... no smartphone , no internet, no YouTube, only  cassette tape and CD life was simple but memorable",
        timestamp: "4 years ago",
      },
      {
        userId: "@Shreya-m7t",
        comment: "SRK's peak = Bollywood's peak",
        timestamp: "3 years ago",
      },
      {
        userId: "@abhishekranjan5228",
        comment: "CHILDHOOD MEMORIES.....I CANT EXPLAIN IN WORDS",
        timestamp: "1 years ago",
      },
    ],
  },
  {
    id: "16",
    title:
      "Cradle Call (2025) New Hollywood Hindi Dubbed Action Movie | Chinese Jungle Survival Film | Thriller",
    channelLogo:
      "https://yt3.googleusercontent.com/BQtOJXSPqJfHhrEfV3_jl8QbN1hNWzEfQaUVCGyRqasAUZiA2o8z2dUEpN473YHb5_yxCb3m3A=s900-c-k-c0x00ffffff-no-rj",
    uploadTime: "1 year ago",
    views: "48.5M",
    author: "Hollywood Express",
    videoUrl: "https://www.youtube.com/embed/fFp5bRp-Has?si=fDbdt4hPezcJRnwt",
    subscriber: "2.84M Subscribers",
    category: "Movie",
    likes: 929,
    dislikes: 47,
    comments: [
      {
        userId: "@navjotwahla_13",
        comment: "Super",
        timestamp: "1 day ago",
      },
      {
        userId: "@NareshKumar-wq3bv",
        comment:
          "Wow that is the very best fully entertainment hollywood Chinese jungle survival",
        timestamp: "5 days ago",
      },
      {
        userId: "@deepakkumar",
        comment:
          "Childhood memories..... no smartphone , no internet, no YouTube, only  cassette tape and CD life was simple but memorable",
        timestamp: "4 years ago",
      },
      {
        userId: "JabirKhan-z6s",
        comment: "Ye sanp to superbduper khiadi hai re baba😂",
        timestamp: "4 days ago",
      },
    ],
  },
  {
    id: "17",
    title:
      "Puneri Paltan Decimate Bengal Warriors in Massive Win | PKL 10 Match #25 Highlights",
    channelLogo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2f3a318133289.5ada7a7233f6e.jpg",
    uploadTime: "1 year ago",
    views: "1.6M",
    author: "Star Sports",
    videoUrl: "https://www.youtube.com/embed/uyPvenCAigg?si=uEINeKQjbYDcrwzh",
    subscriber: "9.15M Subscribers",
    category: "Sports",
    likes: 22,
    dislikes: 0,
    comments: [
      {
        userId: "@sameerjadhav1467",
        comment:
          "Pune crowd 🔥 what an energy 💥💯 ... Brilliant performance by team 👌",
        timestamp: "1 year ago",
      },
      {
        userId: "@SUNIL.0n.Search",
        comment: "puneri paltan on beast mode ❤",
        timestamp: "1 year ago",
      },
      {
        userId: "@Gladiator_88888",
        comment:
          "Puneri paltan has got good raiders but in this match Pune's defence was at it's best.",
        timestamp: "1 years ago",
      },
      {
        userId: "@MarathiHomelander",
        comment: "महाराष्ट्रा ची शान पुणेरी पलटण 🧡🚩",
        timestamp: "1 year ago",
      },
    ],
  },
   
];

export default backendDummyData;
