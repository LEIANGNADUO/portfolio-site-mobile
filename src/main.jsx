import React from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const bmwPoolImages = [
  {
    image: '/assets/works/bmw-pool-01.jpg',
    label: 'Poolside hero composition'
  },
  {
    image: '/assets/works/bmw-pool-02.jpg',
    label: 'Front grille low angle'
  },
  {
    image: '/assets/works/bmw-pool-03.jpg',
    label: 'Waterline side perspective'
  },
  {
    image: '/assets/works/bmw-pool-04.jpg',
    label: 'High-angle campaign frame'
  },
  {
    image: '/assets/works/bmw-pool-05.jpg',
    label: 'Emerging body detail'
  },
  {
    image: '/assets/works/bmw-pool-06.jpg',
    label: 'Top view editorial frame'
  }
];

const benzAmgImages = [
  {
    image: '/assets/sections/project-09/frame-01.png',
    label: 'AMG aircraft launch frame'
  },
  {
    image: '/assets/sections/project-09/frame-02.png',
    label: 'AMG performance angle'
  },
  {
    image: '/assets/sections/project-09/frame-03.png',
    label: 'Luxury transport scene'
  },
  {
    image: '/assets/sections/project-09/frame-04.png',
    label: 'Cloud runway composition'
  },
  {
    image: '/assets/sections/project-09/frame-05.png',
    label: 'Golden hour campaign image'
  },
  {
    image: '/assets/sections/project-09/frame-06.png',
    label: 'High altitude product story'
  },
  {
    image: '/assets/sections/project-09/frame-07.png',
    label: 'Performance lifestyle frame'
  },
  {
    image: '/assets/sections/project-09/frame-08.png',
    label: 'AMG cinematic key visual'
  },
  {
    image: '/assets/sections/project-09/frame-09.png',
    label: 'Launch campaign extension'
  }
];

const projectSections = [
  {
    folder: '1 BMW-M4',
    title: 'BMW M4 POOL CAMPAIGN',
    type: 'Automotive / Image Series',
    cover: '/assets/works/bmw-pool-02.jpg',
    description:
      '红色车身、泳池水面与白色建筑构成第一组汽车主视觉，用连续镜头建立完整的 campaign 视觉节奏。',
    stat: '06 Frames',
    media: bmwPoolImages.map((item) => ({
      kind: 'image',
      src: item.image,
      label: item.label
    }))
  },
  {
    folder: '2 卡地亚',
    title: 'CARTIER PANTHERE JEWELRY FILM',
    type: 'Luxury / Jewelry Motion',
    cover: '/assets/sections/cartier-panthere.jpg',
    description:
      '以豹首胸针为核心，强调白金、宝石镶嵌与高级珠宝的冷冽质感，静帧和视频共同呈现奢侈品视觉语言。',
    stat: 'Image + Film',
    media: [
      {
        kind: 'image',
        src: '/assets/sections/cartier-panthere.jpg',
        label: 'Panthere brooch key visual'
      },
      {
        kind: 'video',
        src: '/assets/sections/cartier-panthere-film-web.mp4',
        sources: [{ src: '/assets/sections/cartier-panthere-film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/sections/cartier-panthere.jpg',
        label: 'Jewelry motion preview'
      }
    ]
  },
  {
    folder: '3',
    title: 'FRAGRANCE PORTRAIT SYSTEM',
    type: 'Beauty / Fragrance Motion',
    cover: '/assets/sections/beauty-fragrance-portrait.jpg',
    description:
      '人物、香水瓶与强光影交互的美妆香氛方向，适合男香、护肤或个人护理品牌的高端传播语境。',
    stat: 'Portrait Film',
    media: [
      {
        kind: 'image',
        src: '/assets/sections/beauty-fragrance-portrait.jpg',
        label: 'Fragrance portrait key frame'
      },
      {
        kind: 'video',
        src: '/assets/sections/beauty-fragrance-film-web.mp4',
        sources: [{ src: '/assets/sections/beauty-fragrance-film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/sections/beauty-fragrance-portrait.jpg',
        label: 'Light interaction motion'
      }
    ]
  },
  {
    folder: '4 BMW M4',
    title: 'BMW M4 MOTION EXPERIMENT',
    type: 'Automotive / Motion Design',
    cover: '/assets/sections/bmw-m4-shell.jpg',
    description:
      '延续 BMW M4 的汽车视觉线索，加入动态影像与造型物件，展示从静态 KV 到视频内容的延展能力。',
    stat: 'Motion',
    media: [
      {
        kind: 'image',
        src: '/assets/sections/bmw-m4-shell.jpg',
        label: 'BMW M4 key frame'
      },
      {
        kind: 'image',
        src: '/assets/sections/bmw-m4-shell.jpg',
        label: 'Sculptural reference frame'
      }
    ]
  },
  {
    folder: '5',
    title: 'MAEXTRO S800 COASTAL FILM',
    type: 'Automotive / MAEXTRO',
    cover: '/assets/works/auto-zunjie-01.jpg',
    description:
      '尊界 S800 海岸公路影像，利用岩石、海雾、车身比例和低角度运动镜头建立豪华旗舰气场。',
    stat: 'Coastal Film',
    media: [
      {
        kind: 'image',
        src: '/assets/works/auto-zunjie-01.jpg',
        label: 'MAEXTRO coastal key visual'
      },
      {
        kind: 'video',
        src: '/assets/sections/maextro-coastal-film-web.mp4',
        sources: [{ src: '/assets/sections/maextro-coastal-film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/works/auto-zunjie-01.jpg',
        label: 'MAEXTRO coastal motion'
      }
    ]
  },
  {
    folder: '6',
    title: 'WENJIE M9 FAMILY DRIVE',
    type: 'Automotive / Smart Cabin',
    cover: '/assets/sections/cover-motion.jpg',
    description:
      '问界 M9 家庭出行视频，从座舱视角呈现智能驾驶、亲子场景和高端家庭用车的安全感。',
    stat: 'Family Film',
    media: [
      {
        kind: 'video',
        src: '/assets/sections/wenjie-m9-family-film-web.mp4',
        sources: [{ src: '/assets/sections/wenjie-m9-family-film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/works/auto-wenjie-m9-01.jpg',
        label: 'Wenjie M9 family drive motion'
      }
    ]
  },
  {
    folder: '7 孩子的太空梦',
    title: "CHILD'S SPACE DREAM",
    type: 'Kids / Story Film',
    cover: '/assets/sections/project-07/cover.jpg',
    description:
      '用儿童宇航员与星空场景建立童梦叙事，适合亲子、教育、公益或品牌情绪短片方向。',
    stat: 'Story Film',
    media: [
      {
        kind: 'image',
        src: '/assets/sections/project-07/cover.jpg',
        label: 'Space dream key frame'
      }
    ]
  },
  {
    folder: '8 HUWEI 橘子海',
    title: 'HUAWEI ORANGE SEA',
    type: 'Tech / Phone Campaign',
    cover: '/assets/sections/project-08/cover.jpg',
    description:
      '以橘色手机、泳池水面和人物自拍视角构成夏日科技传播画面，强化产品色彩与生活方式记忆点。',
    stat: 'Tech Film',
    media: [
      {
        kind: 'image',
        src: '/assets/sections/project-08/cover.jpg',
        label: 'Huawei orange sea key frame'
      },
      {
        kind: 'video',
        src: '/assets/sections/project-08/film-web.mp4',
        sources: [{ src: '/assets/sections/project-08/film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/sections/project-08/cover.jpg',
        label: 'Huawei orange sea motion'
      }
    ]
  },
  {
    folder: '9 BENZ-AMG',
    title: 'BENZ-AMG SKY DELIVERY',
    type: 'Automotive / Image Series',
    cover: '/assets/sections/project-09/frame-01.png',
    description:
      '围绕 AMG 车型、飞机货舱与高空云层建立超现实汽车发布视觉，用系列图片组织豪华性能叙事。',
    stat: '09 Frames',
    media: benzAmgImages.map((item) => ({
      kind: 'image',
      src: item.image,
      label: item.label
    }))
  },
  {
    folder: '10 保时捷',
    title: 'PORSCHE 911 MOTION POSTER',
    type: 'Automotive / Motion Poster',
    cover: '/assets/sections/project-10/cover.jpg',
    description:
      '以 Porsche 911 沙漠公路海报为封面，延展品牌速度、日落道路和经典跑车姿态的动态表达。',
    stat: 'Motion Poster',
    media: [
      {
        kind: 'video',
        src: '/assets/sections/project-10/film-web.mp4',
        sources: [{ src: '/assets/sections/project-10/film-web.mp4', type: 'video/mp4' }],
        poster: '/assets/sections/project-10/cover.jpg',
        label: 'Porsche 911 motion poster'
      }
    ]
  }
];

const advantages = [
  ['40%', 'Creative Direction', '从 Brief、概念、KV 到提案表达，把策略压缩成可执行画面。'],
  ['30%', 'AI Visual Workflow', '将 Prompt、模型、视频生成和内容运营串成稳定生产链路。'],
  ['20%', 'Brand System', '从 VI/CI、字体色彩到传播延展，建立可识别的品牌秩序。'],
  ['10%', 'Execution Control', '跨汽车、快消、美妆、活动与社媒项目，快速切换视觉语境。']
];

const metrics = [
  ['15+', 'Years visual direction'],
  ['300K', 'AI account growth'],
  ['4A+', 'Agency collaboration'],
  ['360', 'Concept to delivery']
];

const serviceBrands = [
  { id: 'bmw', name: 'BMW', logoSrc: '/assets/logos/bmw.png', fallback: 'BMW' },
  { id: 'mercedes', name: 'Mercedes-Benz', logoSrc: '/assets/logos/mercedes.png', fallback: 'Mercedes-Benz' },
  { id: 'volkswagen', name: 'Volkswagen', logoSrc: '/assets/logos/volkswagen.png', fallback: 'VW' },
  { id: 'smart', name: 'smart', logoSrc: '/assets/logos/smart.png', fallback: 'smart' },
  { id: 'porsche', name: 'Porsche', logoSrc: '/assets/logos/porsche.png', fallback: 'Porsche' },
  { id: 'audi', name: 'Audi', logoSrc: '/assets/logos/audi.png', fallback: 'Audi' },
  { id: 'huawei', name: 'Huawei', logoSrc: '/assets/logos/huawei.png', fallback: 'Huawei' },
  { id: 'jeep', name: 'Jeep', logoSrc: '/assets/logos/jeep.png', fallback: 'Jeep' },
  { id: 'nestle', name: 'Nestle', logoSrc: '/assets/logos/nestle.png', fallback: 'Nestle' },
  { id: 'cartier', name: 'Cartier', logoSrc: '/assets/logos/cartier.png', fallback: 'Cartier' },
  { id: 'lego', name: 'LEGO', logoSrc: '/assets/logos/lego.png', fallback: 'LEGO' },
  { id: 'prada', name: 'Prada', logoSrc: '/assets/logos/prada.png', fallback: 'Prada' }
];

function App() {
  usePortfolioMotion();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Advantages />
      <Contact />
    </main>
  );
}

function LazyVideo({
  className,
  sources,
  poster,
  rootMargin = '600px 0px',
  preload = 'metadata',
  autoPlay = true,
  loop = true,
  ...props
}) {
  const videoRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const savesData = navigator.connection?.saveData;
    if (prefersReducedMotion || savesData) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay || !shouldLoad) {
      return;
    }

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [autoPlay, isVisible, shouldLoad]);

  return (
    <video
      className={className}
      ref={videoRef}
      autoPlay={autoPlay && shouldLoad}
      muted
      loop={loop}
      playsInline
      preload={shouldLoad ? preload : 'none'}
      poster={poster}
      {...props}
    >
      {shouldLoad && sources.map((source) => (
        <source src={source.src} type={source.type || getVideoType(source.src)} key={source.src} />
      ))}
    </video>
  );
}

function usePortfolioMotion() {
  React.useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const smooth = 'power4.out';
      const cinematic = 'expo.out';
      const media = gsap.matchMedia();

      gsap.set('.hero .nav, .heroTopline', { autoAlpha: 0, y: -18 });
      gsap.set('.heroTitleBlock p, .heroInfoGrid, .heroNote', { autoAlpha: 0, y: 24 });
      gsap.set('.heroTitleBlock h1', {
        clipPath: 'inset(0 0 100% 0)',
        y: 110,
        scaleY: 0.64,
        transformOrigin: '50% 100%',
        autoAlpha: 1
      });
      gsap.set('.heroTitleBlock h1 span', { yPercent: 72 });
      gsap.set('.heroVideo', { scale: 1.08 });
      gsap.set('.heroMetric', { y: 42, autoAlpha: 0 });

      const opening = gsap.timeline({ defaults: { ease: smooth } });
      opening
        .to('.heroVideo', {
          scale: 1,
          duration: 2.4,
          clearProps: 'transform',
          ease: 'power3.out'
        })
        .fromTo(
          '.motionCurtain',
          { scaleX: 1, transformOrigin: '0% 50%' },
          { scaleX: 0, duration: 1.65, ease: 'expo.inOut' },
          0.12
        )
        .to(
          '.heroTitleBlock h1',
          {
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            scaleY: 1,
            duration: 1.55,
            ease: cinematic
          },
          0.72
        )
        .to('.heroTitleBlock h1 span', { yPercent: 0, duration: 1.35, ease: cinematic }, 0.86)
        .to('.heroTitleBlock p', { y: 0, autoAlpha: 1, duration: 0.95 }, 1.16)
        .to('.hero .nav, .heroTopline', { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08 }, 1.28)
        .to('.heroMetric', { y: 0, autoAlpha: 1, duration: 1.05, stagger: 0.12 }, 1.52)
        .to('.heroInfoGrid, .heroNote', { autoAlpha: 1, duration: 0.8 }, 1.6);

      gsap.utils.toArray('.motionSection').forEach((section) => {
        const title = section.querySelector('.motionTitle');
        const label = section.querySelector('.sectionLabel, .panelMeta');
        const items = section.querySelectorAll('.motionItem');
        const images = section.querySelectorAll('.motionImage');
        const video = section.querySelector('.motionVideo');

        if (label) {
          gsap.from(label, {
            autoAlpha: 0,
            y: 28,
            duration: 0.9,
            ease: smooth,
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              once: true
            }
          });
        }

        if (title) {
          gsap.from(title, {
            autoAlpha: 0,
            xPercent: -18,
            scaleX: 1.22,
            letterSpacing: '0.02em',
            filter: 'blur(6px)',
            transformOrigin: '0% 50%',
            duration: 1.35,
            ease: cinematic,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true
            }
          });
        }

        if (items.length) {
          gsap.from(items, {
            autoAlpha: 0,
            y: 86,
            clipPath: 'inset(28% 0 0 0)',
            duration: 1.15,
            stagger: 0.09,
            ease: cinematic,
            clearProps: 'transform,opacity,visibility,clipPath',
            scrollTrigger: {
              trigger: section,
              start: 'top 62%',
              once: true
            }
          });
        }

        media.add('(min-width: 900px)', () => {
          images.forEach((image) => {
            gsap.fromTo(
              image,
              { scale: 1.08, yPercent: -4 },
              {
                scale: 1,
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                  trigger: image,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.8
                }
              }
            );
          });
        });

        if (video) {
          gsap.fromTo(
            video,
            { scale: 1.08, yPercent: -4 },
            {
              scale: 1.02,
              yPercent: 5,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.9
              }
            }
          );
        }
      });

      media.add('(min-width: 900px)', () => {
        gsap.utils.toArray('.coverCard').forEach((card, index) => {
          gsap.to(card.querySelector('img'), {
            yPercent: index % 2 === 0 ? 7 : -7,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
}

function Hero() {
  return (
    <section className="stage hero" id="top">
      <div className="motionCurtain" aria-hidden="true" />
      <LazyVideo
        className="heroVideo motionVideo"
        poster="/assets/hero-poster.png"
        sources={[{ src: '/assets/zunjie-hero.mp4', type: 'video/mp4' }]}
        rootMargin="1400px 0px"
        aria-hidden="true"
      />
      <div className="scanLayer" aria-hidden="true" />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Joe Qiao Portfolio">
          JQ
        </a>
        <div className="navLinks" aria-label="主导航">
          <a href="#about">Profile</a>
          <a href="#projects">Works</a>
          <a href="#advantages">Strengths</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="contactButton" href="#contact">
          Link Up
        </a>
      </nav>
      <div className="heroTopline">
        <span>Designer: Joe Qiao</span>
      </div>
      <div className="heroTitleBlock">
        <p>Creative Art Director</p>
        <h1>
          VISUAL
          <span>AI BRAND</span>
        </h1>
      </div>
      <div className="heroInfoGrid">
        {metrics.map(([value, label]) => (
          <div className="heroMetric" key={value}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="heroNote">
        将品牌审美、镜头语言、AIGC 工作流与商业传播整合成可执行的视觉内容。
      </div>
    </section>
  );
}

function BrandLogo({ brand }) {
  return (
    <span
      className={`brandLogo brandLogo${brand.id}`}
      aria-label={`${brand.name} logo`}
    >
      <img
        className="brandLogoImage"
        src={brand.logoSrc}
        alt={`${brand.name} logo`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.classList.add('isMissing');
        }}
      />
      <span className="brandLogoFallback">{brand.fallback}</span>
    </span>
  );
}

function About() {
  const [activeTile, setActiveTile] = React.useState(4);
  const [manualFlips, setManualFlips] = React.useState(() => new Set());

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTile(Math.floor(Math.random() * serviceBrands.length));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const toggleTile = (index) => {
    setManualFlips((flips) => {
      const nextFlips = new Set(flips);
      if (nextFlips.has(index)) {
        nextFlips.delete(index);
      } else {
        nextFlips.add(index);
      }
      return nextFlips;
    });
  };

  return (
    <section className="stage profilePanel brandFlipPanel motionSection" id="about">
      <LazyVideo
        className="brandBgVideo motionVideo"
        poster="/assets/about-bmw-road.jpg"
        sources={[]}
        aria-hidden="true"
      />
      <div className="brandMatrixGlow" aria-hidden="true" />
      <div className="brandGridShell" aria-label="服务品牌翻转矩阵">
        <div className="brandGrid">
          {serviceBrands.map((brand, index) => {
            const isFlipped = activeTile === index || manualFlips.has(index);

            return (
              <button
                className={`brandTile ${isFlipped ? 'isFlipped' : ''}`}
                type="button"
                onClick={() => toggleTile(index)}
                aria-label={`翻转查看 ${brand.name}`}
                key={brand.name}
              >
                <span className="brandTileFace brandTileFront">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </span>
                <span className="brandTileFace brandTileBack">
                  <BrandLogo brand={brand} />
                </span>
              </button>
            );
          })}
        </div>
        <div className="brandCenterCopy motionTitle" aria-hidden="true">
          INTO THE
          <span>BRAND FIELD</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = React.useState(null);
  const openedProject = activeProject === null ? null : projectSections[activeProject];

  return (
    <section className={`section projects motionSection ${openedProject ? 'projectsDetailOpen' : ''}`} id="projects">
      <div className="sectionHeader">
        <div>
          <div className="sectionLabel">Selected Works</div>
          <h2 className="motionTitle">PROJECT SCHEDULE</h2>
        </div>
      </div>
      {openedProject ? (
        <ProjectDetail
          project={openedProject}
          projectIndex={activeProject}
          onBack={() => setActiveProject(null)}
        />
      ) : (
        <div className="coverGrid">
          {projectSections.map((section, sectionIndex) => (
            <button
              className={`coverCard motionItem coverCard${sectionIndex + 1}`}
              type="button"
              onClick={() => setActiveProject(sectionIndex)}
              key={section.folder}
            >
              <img
                className="motionImage"
                src={section.cover}
                alt={`${section.title} 封面`}
                loading="lazy"
                decoding="async"
              />
              <span>{String(sectionIndex + 1).padStart(2, '0')} / {section.folder}</span>
              <h3>{section.title}</h3>
              <p>{section.type}</p>
              <strong>Enter</strong>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function getVideoType(src) {
  if (src.endsWith('.mp4') || src.endsWith('.m4v')) {
    return 'video/mp4';
  }

  if (src.endsWith('.mov')) {
    return undefined;
  }

  return 'video/mp4';
}

function DetailVideoPlayer({ video }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const sources = video.sources || [{ src: video.src, type: getVideoType(video.src) }];

  const togglePlayback = () => {
    const currentVideo = videoRef.current;
    if (!currentVideo || hasError) {
      return;
    }

    if (currentVideo.paused) {
      currentVideo.play().catch(() => setHasError(true));
    } else {
      currentVideo.pause();
    }
  };

  return (
    <figure className="detailVideoFrame">
      <div className="detailVideoStage">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setHasError(false)}
          onError={() => setHasError(true)}
        >
          {sources.map((source) => (
            <source src={source.src} type={source.type || undefined} key={source.src} />
          ))}
        </video>
        {!isPlaying && (
          <button className="detailPlayButton" type="button" onClick={togglePlayback}>
            <span>Play Film</span>
          </button>
        )}
        {hasError && (
          <a className="detailVideoFallback" href={video.src} target="_blank" rel="noreferrer">
            Open video file
          </a>
        )}
      </div>
      <figcaption>{video.label}</figcaption>
    </figure>
  );
}

function ProjectDetail({ project, projectIndex, onBack }) {
  const images = project.media.filter((item) => item.kind === 'image');
  const videos = project.media.filter((item) => item.kind === 'video');
  const hasVideo = videos.length > 0;
  const [activeImage, setActiveImage] = React.useState(0);
  const currentImage = images[activeImage];
  const hasMultipleImages = images.length > 1;

  React.useEffect(() => {
    setActiveImage(0);
  }, [project.folder]);

  const showPreviousImage = () => {
    setActiveImage((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setActiveImage((index) => (index + 1) % images.length);
  };

  return (
    <article className="projectDetail">
      <button className="detailBack" type="button" onClick={onBack}>
        Back to covers
      </button>
      <div className="detailIntro">
        <span>{String(projectIndex + 1).padStart(2, '0')} / {project.folder}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <strong>{project.stat}</strong>
      </div>
      <div className={`detailExperience ${hasVideo ? 'detailExperienceVideo' : 'detailExperienceCarousel'}`}>
        {hasVideo ? (
          <section className="detailVideoPanel" aria-label={`${project.title} 视频播放`}>
          <div className="detailPanelLabel">Video Player</div>
            {videos.map((video) => (
              <DetailVideoPlayer video={video} key={video.src} />
            ))}
          </section>
        ) : (
          <section className="detailCarousel" aria-label={`${project.title} 图片轮播`}>
            <div className="detailPanelLabel">Image Carousel</div>
            {currentImage && (
              <figure className="carouselFrame">
                <img
                  src={currentImage.src}
                  alt={`${project.title} ${currentImage.label}`}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>{String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
                  {currentImage.label}
                </figcaption>
              </figure>
            )}
            {hasMultipleImages && (
              <div className="carouselControls">
                <button type="button" onClick={showPreviousImage} aria-label="上一张图片">
                  Prev
                </button>
                <div className="carouselDots" aria-label="图片分页">
                  {images.map((image, imageIndex) => (
                    <button
                      className={imageIndex === activeImage ? 'isActive' : ''}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      aria-label={`查看第 ${imageIndex + 1} 张图片`}
                      key={image.src}
                    />
                  ))}
                </div>
                <button type="button" onClick={showNextImage} aria-label="下一张图片">
                  Next
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </article>
  );
}

function Advantages() {
  return (
    <section className="stage strengthsPanel motionSection" id="advantages">
      <LazyVideo
        className="strengthsVideo motionVideo"
        sources={[{ src: '/assets/strengths-bg-video.mp4', type: 'video/mp4' }]}
        aria-hidden="true"
      />
      <div className="sectionLabel">Core Strengths</div>
      <h2 className="motionTitle">OUR CORE CAPABILITIES</h2>
      <div className="strengthGrid">
        {advantages.map(([value, title, text]) => (
          <article className="strengthCard motionItem" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.4 4.8 9.8 8c.4.5.3 1.2-.2 1.7l-1.1 1.1c1.2 2.4 3.1 4.3 5.5 5.5l1.1-1.1c.5-.5 1.2-.6 1.7-.2l3.2 2.4c.6.4.7 1.2.3 1.8-.8 1.1-2.1 1.8-3.4 1.8C9.4 21 3 14.6 3 7.1c0-1.4.7-2.6 1.8-3.4.6-.4 1.4-.3 1.8.3Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section className="stage contactEnd motionSection" id="contact">
      <LazyVideo
        className="contactVideo motionVideo"
        sources={[{ src: '/assets/contact-bg-video.mp4', type: 'video/mp4' }]}
        aria-hidden="true"
      />
      <div className="contactHalo" />
      <div className="panelMeta">
        <span>Available for selected collaborations</span>
        <span>Visual / AI / Brand</span>
      </div>
      <h2 className="motionTitle">
        LET'S BUILD
        <span>THE NEXT VISUAL SYSTEM</span>
      </h2>
      <p className="contactCopy motionItem">
        <span>现开放品牌视觉升级、AIGC 视频内容策划与制作、Campaign 主视觉开发等合作咨询。</span>
        <span>同时支持社交媒体视觉系统搭建、线下活动视觉统筹及作品集项目梳理。</span>
        <span>可围绕项目目标、交付范围与时间排期，进行清晰高效的项目对接。</span>
      </p>
      <div className="contactLinks motionItem">
        <a href="mailto:qjy43365113@gmail.com">
          <ContactIcon type="mail" />
          qjy43365113@gmail.com
        </a>
        <a href="tel:18810732166">
          <ContactIcon type="phone" />
          18810732166
        </a>
        <a href="#top">Back to Top</a>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
