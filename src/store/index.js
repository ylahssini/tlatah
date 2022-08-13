import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create((set) => ({
    sun: {
        position: [80, 0, 0],
        title: { ar: 'الشمس', en: 'Sun' },
        description: {
            color: '#b00800',
            orbitSpeed: null,
            rotationSpeed: { d: 26, h: 0, m: 0 },
            content: 'الشمس هي النجم المركزي للمجموعة الشمسية. وهي تقريباً كروية وتحوي بلازما حارة متشابكة مع الحقل المغناطيسي. يبلغ قطرها حوالي 1,392,684 كيلومتر، وهو ما يعادل 109 أضعاف قطر الأرض، وكتلتها 2×1030 كيلوغرام وهو ما يعادل 330,000 ضعف كتلة الأرض وهو ما يشكل نسبة 99.86 % من كتلة المجموعة الشمسية',
            url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B4%D9%85%D8%B3',
        },
    },
    planets: {
        mercury: {
            radiusX: 60,
            fov: 1,
            title: { ar: 'عطارد', en: 'Mercury' },
            description: {
                color: '#bf8f4f',
                orbitSpeed: 47.9,
                rotationSpeed: { d: 58, h: 15, m: 30 },
                content: 'عُطَارِد هو أصغر كواكب المجموعة الشمسية وأقربها إلى الشمس، أطلقت العرب على هذا الكوكب تسمية «عطارد»؛ وأصل الاسم من المصدر ط ر د، طارد ومطّرَد أي المتتابع في سيره، وأيضاً سريع الجري ومن هنا اسم الكوكب عطارد الذي يرمز إلى السرعة الكبيرة لدوران الكوكب حول الشمس. إن اللغات التي لم تعرف الكوكب باسم محدد، تستعمل الاسم اللاتيني ميركوري نسبة لإله التجارة الروماني.',
                url: 'https://ar.wikipedia.org/wiki/%D8%B9%D8%B7%D8%A7%D8%B1%D8%AF',
            },
        },
        venus: {
            radiusX: 100,
            fov: 4,
            title: { ar: 'الزهرة', en: 'Venus' },
            description: {
                color: '#faba27',
                orbitSpeed: 35,
                rotationSpeed: { d: 243, h: 0, m: 26 },
                content: 'الزُّهَرَة هو ثاني كواكب المجموعة الشمسية من حيث المسافة بينه وبين الشمس. يبعد الزهرة عن الشمس نحو 108 مليون كيلومتر، ومَدَارُه حول الشمس ليس دائريًا تمامًا. وهو كوكب ترابي كعطارد والمريخ، شبيه بكوكب الأرض من حيث الحجم والتركيب. سمي فينوس نسبة إلى إلهة الجمال، أما سبب تسميته بالزهرة فبحسب ما جاء في لسان العرب: الزُّهْرَة هي الحسن والبياض، زَهرَ زَهْراً والأَزْهَر أي الأبيض المستنير.',
                url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9',
            },
        },
        earth: {
            radiusX: 125,
            fov: 4,
            title: { ar: 'الأرض', en: 'Earth' },
            description: {
                color: '#0d65ad',
                orbitSpeed: 29.8,
                rotationSpeed: { d: 0, h: 23, m: 56 },
                content: 'الأرض هي ثالث كواكب المجموعة الشمسية بعدًا عن الشمس بعد عطارد والزهرة، وتُعتبر من أكبر الكواكب الأرضية وخامس أكبر الكواكب في النظام الشمسي، وذلك من حيث قطرها وكتلتها وكثافتها، ويُطلق على هذا الكوكب أيضًا اسم العالم. ',
                url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A3%D8%B1%D8%B6',
            },
        },
        mars: {
            radiusX: 140,
            fov: 7,
            title: { ar: 'المريخ', en: 'Mars' },
            description: {
                color: '#964244',
                orbitSpeed: 24.1,
                rotationSpeed: { d: 1, h: 0, m: 36 },
                content: 'المِرِّيخ أو الكوكب الأحمر هو الكوكب الرابع من حيث البعد عن الشمس في النظام الشمسي وهو الجار الخارجي للأرض ويصنف كوكبا صخريا، من مجموعة الكواكب الأرضية. أما اسمه بالعربية فهو مُشتق من كلمة «أمرخ» أي صاحب البقع الحمراء، ويقال ثور أَمرخ أي به بقع حمراء، وأما مارس فهو اسم الإله الذي اتخذه الرومان للحرب، وأما لقب الكوكب الأحمر فسببه لون الكوكب المائل إلى الحمرة أو الاحمرار بفعل نسبة غبار أكسيد الحديد الثلاثي العالية على سطحه وفي جوه',
                url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%B1%D9%8A%D8%AE',
            },
        },
        jupiter: {
            radiusX: 180,
            fov: 35,
            title: { ar: 'المشتري', en: 'Jupiter' },
            description: {
                color: '#a45e2a',
                orbitSpeed: 13.1,
                rotationSpeed: { d: 0, h: 9, m: 55 },
                content: 'المُشْتَرِي هو أضخم كواكب المجموعة الشمسية. سمي بالمشتري لأنه يستشري في سيره أي يلـجُّ ويمضي ويَـجِدُّ فيه بلا فتور ولا انكسار. وكان المشتري معروفاً للفلكيين القدماء وارتبط بأساطير وأديان العديد من الشعوب. وقد أطلق الرومان عليه اسم جوبيتر وهو إله السماء والبرق.',
                url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B1%D9%8A',
            },
        },
        saturn: {
            radiusX: 230,
            fov: 35,
            title: { ar: 'زحل', en: 'Saturn' },
            description: {
                color: '#e4cea8',
                orbitSpeed: 9.7,
                rotationSpeed: { d: 0, h: 10, m: 33 },
                content: 'زُحَل اسمه مشتق من الجذر "زَحَل" بمعنى تنحّى وتباعد. ويُقال إنه سمي زُحَل لبعده في السماء، أما الاسم اللاتيني فهو "ساتورن" وهو إله الزراعة والحصاد عند الرومان، ويُمثل رمزه منجل الإله الروماني سالف الذكر. زحل هو الكوكب السادس من حيث البُعد عن الشمس وهو ثاني أكبر كوكب في النظام الشمسي بعد المشتري، ويُصنف زحل ضمن الكواكب الغازية مثل المشتري وأورانوس ونبتون.',
                url: 'https://ar.wikipedia.org/wiki/%D8%B2%D8%AD%D9%84',
            }
        },
        uranus: {
            radiusX: 260,
            fov: 20,
            title: { ar: 'أورانوس', en: 'Uranus' },
            description: {
                color: '#84bbcf',
                orbitSpeed: 6.8,
                rotationSpeed: { d: 0, h: 17, m: 14 },
                content: 'أورانوس هو سابع الكواكب بعدًا عن الشمس، وثالث أضخم كواكب المجموعة الشمسية، والرابع من حيث الكتلة. سمي على اسم الإله أورانوس (باليونانية القديمة: Οὐρανός) في الميثولوجيا الإغريقية. لم يتم تمييزه من قبل الحضارات القديمة على أنه كوكب رغم أنه مرئي بالعين المجردة، نظرًا لبهوته وبطء دورانه في مداره.',
                url: 'https://ar.wikipedia.org/wiki/%D8%A3%D9%88%D8%B1%D8%A7%D9%86%D9%88%D8%B3',
            }
        },
        neptune: {
            radiusX: 290,
            fov: 20,
            title: { ar: 'نبتون', en: 'Neptune' },
            description: {
                color: '#2b4dac',
                orbitSpeed: 5.4,
                rotationSpeed: { d: 0, h: 16, m: 0 },
                content: 'نبتون معناها بالإغريقية إله الماء، ويطلق عليه الكوكب الأزرق هو أحد كواكب النظام الشمسي وهو رابع أكبر الكواكب الثمانية، وهو ثامن كواكب المجموعة الشمسية وأبعدها عن الشمس في نظامنا الشمسي وهو رابع أكبر كوكب نسبةً إلى قطره وثالث أكبر كوكب نسبةً إلى كتلته. تبلغ كتلة نبتون 17 مرة كتلة الأرض. وهو أكبر قليلا من توأمه القريب أورانوس الذي يعادل 15 مرة كتلة الأرض.',
                url: 'https://ar.wikipedia.org/wiki/%D9%86%D8%A8%D8%AA%D9%88%D9%86',
            }
        },
    },

    target: '',
    setTarget: (target) => set({ target }),

    loading: true,
    setLoading: (loading) => set(() => ({ loading })),

    free_mode: false,
    setFreeMode: (free_mode) => set(() => ({ free_mode })),
}));

mountStoreDevtool('store', useStore);
