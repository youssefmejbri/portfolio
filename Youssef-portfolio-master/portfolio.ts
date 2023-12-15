import emoji from 'react-easy-emoji';
import {
  
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Youssef Mejbri',
  title: "Salut à tous",
  description:
    "Je me présente je suis Youssef Mejbri, j'ai 32 ans, je suis un professionnel dédié du domaine de la fonction publique, avec une spécialisation dans le secteur de la santé. Ayant accumulé une expérience enrichissante au fil des années, j'ai développé une expertise solide et un profond engagement envers l'amélioration des services de santé. Passionné par le développement, notamment par l'exploration de certains langages qui contribuent à l'évolution positive de ce domaine, je cherche constamment à innover et à apporter des contributions significatives. Mon engagement indéfectible envers l'amélioration continue et mon désir ardent de créer un impact positif font de moi un atout précieux dans tout environnement professionnel",
  
};

export const openSource = {
  githubUserName: 'youssefmejbri',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/youssefmejbri',
  linkedin: 'https://tn.linkedin.com/in/youssef-mejbri-bab9b76a?trk=people-guest_people_search-card',
  github: 'https://github.com/youssefmejbri',
  instagram: 'https://www.facebook.com/profile.php?id=100015121698739',
  facebook: 'https://www.facebook.com/profile.php?id=100015121698739',
  twitter: 'https://www.facebook.com/profile.php?id=100015121698739',
};

export const skillsSection: SkillsSectionType = {
  title: 'Ce que je fais',
  subTitle: 'DÉVELOPPEUR FULL STACK PASSIONNÉ QUI VEUT EXPLORER CHAQUE TECHNOLOGIE',
  data: [
    {
      title: 'Développement Full Stack',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Chemin du fichier JSON d'animation Lottie
      skills: [
        emoji(
          '⚡ Construction d\'applications réactives à page unique (SPA) et PWA en React.js'
        ),
        emoji('⚡ Construction de sites web statiques réactifs en utilisant Next.js'),
        emoji('⚡ Construction d\'API RESTful en Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Infrastructure Cloud',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Chemin du fichier JSON d'animation Lottie
      skills: [
        emoji('⚡ Expérience de travail sur plusieurs plateformes cloud'),
        emoji(
          '⚡ Hébergement et maintenance de sites web sur des instances de machines virtuelles avec intégration de bases de données'
        ),
        emoji(
          '⚡ Construction de pipelines CI/CD pour des tests et déploiements automatisés en utilisant Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Vérifiez le README pour obtenir les détails des icônes
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Chemin du fichier JSON d'animation Lottie
      skills: [
        emoji(
          '⚡ Expérience dans le développement de Smart Contract en utilisant Solidity & Ethereum'
        ),
        emoji(
          '⚡ Construction de scripts pour les tests et le déploiement automatisé de Smart Contracts en utilisant Brownie & Infura'
        ),
        emoji(
          '⚡ Expérience dans l\'utilisation des Standards de Smart Contract d\'Openzeppelin & des Oracles de Chainlink'
        ),
        emoji('⚡ Développement de Smart Contracts NFT en utilisant le standard de jeton ERC-721'),
        emoji(
          '⚡ Construction de Dapps avec React.js & Solidity utilisant Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];





// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Youssef Mejbri',
  description:
    'développeur web Full Stack passionné ',
  author: 'Youssef Mejbri',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  keywords: [
    'Youssef',
    'Youssef Mejbri',
    'Portfolio',
    'Youssef Portfolio ',
    'Youssef Mejbri Portfolio',
  ],
};