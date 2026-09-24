export default defineAppConfig({
  ui: {
    colors: {
      primary: 'signal',
      neutral: 'stone',
    },
    // One icon family on the page: Nuxt UI defaults to Lucide (not installed here), the site uses Phosphor
    icons: {
      light: 'i-ph-sun',
      dark: 'i-ph-moon',
      menu: 'i-ph-list',
      close: 'i-ph-x',
      loading: 'i-ph-circle-notch',
      check: 'i-ph-check',
      success: 'i-ph-check-circle',
      chevronDown: 'i-ph-caret-down',
      chevronRight: 'i-ph-caret-right',
      external: 'i-ph-arrow-up-right',
    },
    button: {
      slots: {
        // Press feedback: scale 0.96, transitions limited to the properties that change
        base: 'flex items-center justify-center font-medium cursor-pointer transition-[color,background-color,scale] duration-150 ease-out active:scale-[0.96]',
      },
    },
    card: {
      slots: {
        root: 'rounded-sm',
      },
    },
  },

  /**
   * Launch content — edit this block to rebrand the whole template.
   * Every scene reads from here, no component needs to be touched.
   */
  launch: {
    product: {
      name: 'Lunet One',
      // Short word used for the giant hero typography
      shortName: 'Lunet',
      edition: 'Series One',
      tagline: 'Time, in a new light.',
      description: 'A round titanium smartwatch with a ring of light around the display and ten days of battery per charge.',
      price: 'From $349',
      cta: 'Reserve yours',
      // Technical notes printed in the hero frame corners
      meta: ['Series One', 'Grade 5 titanium', '42 mm · 9.2 mm', 'Ships 03.12.2026'],
      // ISO date used by the countdown — hidden once the date has passed
      launchDate: '2026-12-03T17:00:00Z',
      // Shown in the footer — keep it when showcasing a fictional or third-party product
      disclaimer: 'Lunet is a fictional product, designed to showcase this open-source template.',
    },

    design: {
      title: 'Engineered in layers.',
      description: 'Six layers in a 9.2 mm case. Scroll to take it apart.',
      // Ordered from top (glass) to bottom (sensor) — ids match the ProductWatch layers
      layers: [
        { id: 'glass', label: 'Sapphire dome', detail: 'Domed crystal, 1.1 mm thin' },
        { id: 'halo', label: 'Halo ring', detail: '120 micro-LEDs for glanceable alerts' },
        { id: 'display', label: 'MicroLED display', detail: '1.5″, 3,000 nits, always-on' },
        { id: 'chip', label: 'L1 silicon', detail: 'Dual-core, 3 nm, on-device AI' },
        { id: 'battery', label: 'Graphene cell', detail: 'Up to 10 days per charge' },
        { id: 'sensor', label: 'Health array', detail: 'ECG, SpO₂ and skin temperature' },
      ],
    },

    halo: {
      eyebrow: 'The Halo',
      title: 'Know before you look.',
      description: '120 LEDs around the display show who\'s calling, what just arrived or how hard you\'re pushing. When nothing needs you, the ring stays dark.',
      // Each state recolors the halo while its caption is shown
      states: [
        { color: '#22c55e', icon: 'i-ph-phone-call', title: 'Incoming call', detail: 'A slow green pulse. Raise your wrist to answer.' },
        { color: '#38bdf8', icon: 'i-ph-chat-circle-dots', title: 'New message', detail: 'Blue for messages from your favorite contacts.' },
        { color: '#f97316', icon: 'i-ph-timer', title: 'Workout pace', detail: 'Orange above your target pace, white when you\'re on it.' },
        { color: '#e4e4e7', icon: 'i-ph-moon-stars', title: 'Wind down', detail: 'The ring dims at bedtime and switches off overnight.' },
      ],
    },

    features: {
      title: 'Six things it does without your phone.',
      items: [
        { icon: 'i-ph-heartbeat', title: 'Health, continuously', description: 'Heart rhythm, blood oxygen and sleep stages tracked around the clock.' },
        { icon: 'i-ph-person-simple-run', title: 'Training that adapts', description: '120 workout modes with real-time coaching and recovery scores.' },
        { icon: 'i-ph-map-trifold', title: 'Dual-band GPS', description: 'L1 + L5 satellite bands keep your track accurate between tall buildings and under trees.' },
        { icon: 'i-ph-wallet', title: 'Tap to pay', description: 'Pay, ride transit and unlock doors with the phone left at home.' },
        { icon: 'i-ph-drop', title: 'Dive ready', description: 'Water resistant to 100 m with an automatic depth gauge.' },
        { icon: 'i-ph-sparkle', title: 'On-device AI', description: 'Message summaries and quick replies run on the watch, not in the cloud.' },
      ],
    },

    specs: {
      title: 'Specifications',
      items: [
        { value: 10, suffix: ' days', label: 'Battery life' },
        { value: 3000, suffix: ' nits', label: 'Peak brightness' },
        { value: 36, suffix: ' g', label: 'Total weight' },
        { value: 100, suffix: ' m', label: 'Water resistance' },
      ],
    },

    colors: {
      title: 'Four finishes',
      items: [
        { name: 'Obsidian', case: '#3f3f46', strap: '#18181b', accent: '#ff7440' },
        { name: 'Lunar', case: '#d4d4d8', strap: '#52525b', accent: '#93c5fd' },
        { name: 'Sand', case: '#d6c7a8', strap: '#8a7454', accent: '#fb923c' },
        { name: 'Moss', case: '#4d5a45', strap: '#1f2a1c', accent: '#a3e635' },
      ],
    },

    statement: {
      title: 'It glows when it matters.',
      body: 'The rest of the time the ring stays dark, which is how the battery lasts ten days between charges.',
    },

    waitlist: {
      eyebrow: 'Launching December 3',
      title: 'Reserve Lunet One',
      description: 'Ships December 3. You pay when it ships and can cancel any time before then.',
    },
  },
})
