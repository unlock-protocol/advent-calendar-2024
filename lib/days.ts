/**
 * description supports markdown!
 */

const days = [
  {
    // Day 1
    title: '🌟Stella Achenbach',
    role: 'Lead Steward at Unlock DAO',
    description: `Stella’s journey with Unlock started by bringing **ALANAmagazine** onchain, blending **creativity and decentralized tools** to make it happen. When the DAO needed structure, she stepped up, redefining the Mayor role into **Lead Steward** and fostering a thriving community.

Always keeping creativity at the forefront, Stella feels passionate about decentralized governance, an **omni-accessible Metaverse** and reimagining beauty in the digital space. 
`,
    link: 'https://www.bonfire.xyz/stellaachenbach',
    image: '/images/nft/1.png',
  },
  {
    // Day 2
    title: '🌸 Cecilia Contreras (Ceci Sakura)',
    role: 'Event Organizer and ReFi Advocate at Unlock DAO',
    description: `Ceci discovered Unlock while simplifying event ticketing and tracking impact on-chain for **Ethereum Bolivia community**, finding freedom and transparency in Web3 tools. From hosting **Let’s Grow Live** to connecting communities with **La Mudanza**, she’s helped bridge Unlock’s tools with the community.

Passionate about ReFi and Web3’s power to drive environmental and social change, Ceci is inspired by nature’s beauty—**sakura flowers, sunflowers, and honey bees**—as she links creativity and purpose in every collaboration.`,
    link: 'https://x.com/Ceci_Sakura007',
    image: '/images/nft/2.png',
  },
  {
    // Day 3
    title: '☀️ Kara Howard',
    role: 'Community Empowerment Advocate at Unlock DAO',
    description: `Kara’s collaboration with Unlock began through workshops with **SI<3>**, sparking a partnership that brought community education to life. Through these efforts, she’s strengthened bonds, built friendships, and continues to write her story of impact and innovation.

Passionate about supporting underrepresented communities, Kara uses Unlock to help them **activate their potential** and streamline their programming. Her energy is as vibrant as **sunlight, spicy vegan wings, and dynamic NFTs**—a true force for empowerment in Web3.`,
    link: 'https://www.linkedin.com/in/decentralizing',
    image: '/images/nft/3.png',
  },
  {
    // Day 4
    title: '🔮 Lana Dingwall',
    role: 'Unlock Protocol Ambassador and Regenerative Crypto Advocate',
    description: `Lana’s journey with Unlock began at **ETHNewYork 2022**, where she first built with the protocol during a hackathon. A year later, she came full circle, becoming an ambassador and helping hackers integrate Unlock into their projects. From **PizzaDAO** to **The GreenPill Network**, Lana has brought Unlock to diverse communities, shaping its impact through initiatives like Retro Grant rounds and active delegation.

Passionate about using blockchain for **regeneration and a better world**, Lana’s adventurous spirit is reflected in her **Jeep Wrangler, 5-panel hat, and tarot cards**.`,
    link: 'https://warpcast.com/lanadingwall',
    image: '/images/nft/4.png',
  },
  {
    // Day 5
    title: '🌲 David Ehrlichman',
    role: 'Coordination Innovator and Unlock Protocol Enthusiast',
    description: `David’s passion for helping **living systems flourish** led him to champion better coordination through Web3 tools. As part of the team at **Hats**, he played a key role in developing the **Hats + Unlock integration**, enabling seamless subscription and membership roles for onchain organizations.

Whether guiding communities with a **facilitation chime, drumming up creativity on a drum set**, or embodying resilience like an **evergreen tree**, David’s contributions inspire thriving ecosystems in Unlock and beyond.`,
    link: 'https://x.com/davehrlichman',
    image: '/images/nft/5.png',
  },
  {
    // Day 6
    title: '🚲 Fries Jnr',
    role: 'Contributor at Unlock DAO',
    description: `Fries Jnr joined Unlock with a mission: to **improve the pipeline** and keep things moving forward. Though the journey is ongoing, their dedication and unique flair have made a mark within the community.

With a love for the **skeleton hat lil noun**, Fries brings a creative edge to everything they do, shining bright like a **old tooth, cruising on a bicycle**, and always rocking a **blue hat**.`,
    link: 'https://warpcast.com/pip',
    image: '/images/nft/6.png',
  },
  {
    // Day 7
    title: '🌐 Julien Genestoux',
    role: 'Creator of Unlock Protocol',
    description: `Julien’s passion for **building a better web** led him to **create Unlock Protocol**, paving the way for a more open and decentralized internet. His vision continues to inspire the DAO and the countless projects powered by Unlock.

Always on the move—whether with his **laptop, running shoes**, or signature **sunglasses**—Julien embodies innovation, energy, and the drive to make the web a better place for everyone.`,
    link: 'https://ouvre-boite.com',
    image: '/images/nft/7.png',
  },
  {
    // Day 8
    title: '🏔️ Mexi',
    role: 'Unlock DAO Prime Member and Community Builder',
    description: `Mexi’s passion for **empowering communities** through blockchain shines in every project. From using Unlock Protocol to sell tickets for **Ethereum México 2023** to creating over **50 locks** for events, Mexi has seamlessly blended accessibility and innovation.

With **BandaWeb3**, a podcast on X Spaces, Mexi shares insights from Web3 builders while offering free collectibles for token-gated content. Now, with **BandaWeb3 Prime**, Mexi is unlocking exclusive tools and content for members, driving collaboration and governance.

Mexi’s adventurous spirit—reflected in a **mountain, rock climber**, and **surfboard**— fuels a mission to build stronger, more innovative communities with Unlock.`,
    link: 'https://x.com/meximalist',
    image: '/images/nft/8.png',
  },
  {
    // Day 9
    title: '🔥 Sohobiit',
    role: 'Contributor at Unlock DAO',
    description: `Sohobiit believes in using **Unlock Protocol** to create **exclusive, sustainable experiences** that foster real connections and shape a more decentralized world. Drawn to the potential of **tokenized ticketing**, they joined Unlock DAO and discovered a **goldmine**: a supportive team dedicated to helping members thrive and succeed.

Fueled by a **fire** for innovation, guided by a **heart** for community, and inspired by the luck of a **clover**, Sohobiit continues to build and contribute to Unlock’s transformative vision.`,
    link: 'https://x.com/sohobiit',
    image: '/images/nft/9.png',
  },
  {
    // Day 10
    title: '🔥 Danny Thomx',
    role: 'Unlock DAO Contributor',
    description: `Danny is driven by a passion for **gamified systems** that enhance human coordination and create prototypes for **universal basic income**. A referral from a friend introduced him to Unlock Protocol, leading to an integration project with **scaffold-eth**. By the time the task was complete, Danny had fallen in love with both the **tech** and the **community.

Now an active contributor to the DAO, Danny brings the elements of **water, fire**, and **metal** to his work—fueling innovation, adaptability, and strength in building systems that truly empower people.`,
    link: 'https://x.com/dannithomx',
    image: '/images/nft/10.png',
  },
  {
    // Day 11
    title: '📘 David-Moderator',
    role: 'Longtime Unlock DAO Member',
    description: `David’s passion for **technology, blockchain, and cybersecurity** is matched only by his love for the **world of motors**. As one of the earliest members of Unlock DAO, he was captivated by the protocol’s innovative potential and the visionary leadership of Julien.

From the start, David has been a key contributor, blending the precision of a **computer**, the creativity of a **book**, and the power of an **engine** to help drive the DAO forward. His dedication continues to shape the future of Unlock.`,
    link: 'https://x.com/_Cryptosmonitor',
    image: '/images/nft/11.png',
  },
  {
    // Day 12
    title: '🏄‍♂️ PostArchitekt',
    role: 'Creator & Innovator in Web3',
    description: `Driven by a passion for **AI-driven narratives** and creating engaging **educational experiences in Web3**, PostArchitekt stumbled upon Unlock Protocol while exploring Web3 tools for his **edutainment project, Surfing on Entropy.

He found a vibrant and passionate community within the Unlock DAO—a space where creators and developers collaborate to directly engage with their audience. Inspired and energized by the possibilities, he dove right into the DAO, experimenting with **Quantum Entanglement, Brian Eno’s influence**, and a **surfboard** to craft groundbreaking experiences in the Web3 space.`,
    link: 'https://warpcast.com/postarchitekt',
    image: '/images/nft/12.png',
  },
  {
    // Day 13
    title: '🎧 mash7',
    role: 'Web3 Enthusiast & Contributor',
    description: `Passionate about **giving power back to everyone through Web3**, mash7 discovered Unlock while searching for a unique, welcoming community to contribute to. He quickly found his home in the **Unlock DAO**, where the mission to empower individuals resonated with his own values.

From the moment he joined, mash7 embraced the opportunity to collaborate, innovate, and be part of something transformative in the world of Web3. His **headphones, Winrar**, and **light bulb** are symbols of the creativity, problem-solving, and bright ideas he brings to the community.`,
    link: 'http://discord.com',
    image: '/images/nft/13.png',
  },
  {
    // Day 14
    title: '💻 txbi',
    role: 'Creator & Visionary',
    description: `**Passionate about providing leverage for visionaries** to turn their goals and dreams into reality, txbi joined **Unlock DAO** early this year, drawn to how **Unlock Protocol** empowers creators to fully own and control their content. The DAO, filled with **passionate creators and developers** who are both visionaries and executors, resonated deeply with his own dedication to making things happen.

With a **MacBook Pro, coffee mug**, and **octopus** as his symbols, txbi brings creativity, focus, and adaptability to the table in everything he does.`,
    link: 'https://github.com/0xTxbi',
    image: '/images/nft/14.png',
  },
  {
    // Day 15
    title: '📓 jhonastic',
    role: 'Contributor & Advocate',
    description: `**Passionate about a fair world and decentralized economy for everyone**, jhonastic’s journey with **Unlock DAO** began almost by chance, fitting perfectly into the role he holds today. He’s grateful for the opportunity to connect with **Stella** and the amazing people in the DAO, sharing a vision of a more equitable world.

With a **blank notebook, an HDD**, and **a fraction of a valuable token** representing his journey, jhonastic values new beginnings, data-driven ideas, and the potential of blockchain to reshape the future.`,
    link: 'https://www.linkedin.com/in/jonathan-asti/',
    image: '/images/nft/15.png',
  },
  {
    // Day 16
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/16.png',
  },
  {
    // Day 17
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/17.png',
  },
  {
    // Day 18
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/18.png',
  },
  {
    // Day 19
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/19.png',
  },
  {
    // Day 20
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/20.png',
  },
  {
    // Day 21
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/21.png',
  },
  {
    // Day 22
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/22.png',
  },
  {
    // Day 23
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/23.png',
  },
  {
    // Day 24
    title: '',
    role: '',
    description: ``,
    link: '',
    image: '/images/nft/24.png',
  },
];

export default days;
