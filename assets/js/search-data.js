// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-it-39-s-a-small-world-for-microbes-after-all",
        
          title: "It&#39;s a Small World for Microbes After All",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/it-s-a-small-world-for-microbes-after-all/";
          
        },
      },{id: "post-returning-to-research-lessons-from-the-field",
        
          title: "Returning to Research: Lessons from the Field",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/return/";
          
        },
      },{id: "post-global-microbial-genetics-ep-2-decision-boundaries-varying-quantization-and-activation",
        
          title: "Global Microbial Genetics Ep. 2 Decision Boundaries Varying Quantization and Activation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/second-alife/";
          
        },
      },{id: "post-global-microbial-genetics-ep-1-decision-boundaries-varying-loss-and-hidden-activation",
        
          title: "Global Microbial Genetics Ep 1. Decision Boundaries Varying Loss and Hidden Activation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/first-alife/";
          
        },
      },{id: "post-a-ramble-on-quantized-neural-networks",
        
          title: "A Ramble on Quantized Neural Networks",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/quantized-ramble/";
          
        },
      },{id: "post-two-moons-binary-weight-neural-networks-and-evolution",
        
          title: "Two Moons, Binary Weight Neural Networks, and Evolution",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/two-moons-ga/";
          
        },
      },{id: "post-2026-introduction-to-the-new-year",
        
          title: "2026 — introduction to the New Year",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-plan-and-research-agenda/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
