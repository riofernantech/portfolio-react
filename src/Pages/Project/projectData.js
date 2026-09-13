import {
    HtmlIcon,
    JavaScriptIcon,
    CssIcon,
    PhpIcon,
    ReactIcon,
    BootstrapIcon,
    NodeIcon,
    ElectronIcon,
    CodeIgniterIcon,
    SqlIcon,
} from '../Home/Skill/icons/SkillIcons';

export const projectItems = [
    {
        id: 'sisawit',
        title: 'SI Sawit',
        description: 'Sistem informasi untuk pencatatan transaksi penimbangan buah sawit pada kelompok tani.',
        image: '/images/projects/sisawit.png',
        source: 'https://github.com/riofernantech/si-sawit',
        techStack: [
            { label: 'JavaScript', Icon: JavaScriptIcon },
            { label: 'React JS', Icon: ReactIcon },
            { label: 'Node JS', Icon: NodeIcon },
            { label: 'Electron JS', Icon: ElectronIcon },
            { label: 'Sqlite', Icon: SqlIcon },
        ],
    },
    {
        id: 'rf-blog',
        title: 'RF Blog',
        description: 'CMS multi-user untuk pembuatan dan pengelolaan blog pribadi atau tim.',
        image: '/images/projects/rfblog.png',
        visit: 'https://blog.riofernando.my.id',
        source: 'https://github.com/riofernantech/rf-blog',
        techStack: [
            { label: 'PHP', Icon: PhpIcon },
            { label: 'JavaScript', Icon: JavaScriptIcon },
            { label: 'CSS', Icon: CssIcon },
        ],
    },
    {
        id: 'rf-music',
        title: 'RF Music',
        description: 'Aplikasi pemutar musik berbasis web yang mengonsumsi data dari API eksternal.',
        image: '/images/projects/rfmusic.png',
        visit: 'https://music.riofernando.my.id',
        source: 'https://github.com/riofernantech/rf-music',
        techStack: [
            { label: 'HTML', Icon: HtmlIcon },
            { label: 'JavaScript', Icon: JavaScriptIcon },
            { label: 'CSS', Icon: CssIcon },
        ],
    },
    {
        id: 'kaori',
        title: 'Landing Page LPK-Kaori',
        description: 'Website landing page dan CMS untuk organisasi lembaga pelatihan Kaori.',
        image: '/images/projects/kaori.png',
        source: 'https://github.com/riofernantech/lpk-kaori',
        techStack: [
            { label: 'CodeIgniter', Icon: CodeIgniterIcon },
            { label: 'JavaScript', Icon: JavaScriptIcon },
            { label: 'Bootstrap', Icon: BootstrapIcon },
        ],
    },


];
