export const navigationLinks = [
  { name: 'Platform', href: '#platform' },
  { name: 'Technology', href: '#technology' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
];

export const heroContent = {
  eyebrow: "INTELLIGENCE FOR THE WORLD'S MOST ESSENTIAL RESOURCE",
  headline: "Every Drop. Better Understood.",
  subheadline: "Aquora transforms water infrastructure data into actionable intelligence, helping organizations detect potential problems, understand distribution performance and manage water systems more efficiently.",
  supportingText: "Smarter visibility. Better decisions. More resilient water infrastructure.",
  ctaPrimary: "Request Early Access",
  ctaSecondary: "Explore the Platform",
  illustrativeNotice: "Illustrative operational interface. Physical telemetry requires compatible instrumentation.",
};

export const problemData = {
  eyebrow: "THE CHALLENGE",
  headline: "Water Systems Are Too Important to Operate Without Clear Visibility.",
  description: "Water infrastructure supports homes, businesses, industries and entire communities. Yet many operators have limited visibility into what is happening across their networks. Leaks, equipment irregularities and distribution problems can remain undetected until they become expensive operational issues.",
  cards: [
    {
      id: "01",
      title: "Hidden Infrastructure Problems",
      description: "Leaks and equipment irregularities can develop across extensive pipeline networks. Without adequate monitoring, operators may struggle to identify where problems originate.",
      icon: "SearchAlert",
      metricTag: "Delayed Detection"
    },
    {
      id: "02",
      title: "Fragmented Operational Information",
      description: "Information about water flow, pressure, storage and maintenance may be distributed across separate systems, spreadsheets and manual records.",
      icon: "Layers",
      metricTag: "Data Silos"
    },
    {
      id: "03",
      title: "Inefficient Distribution",
      description: "Understanding where water is going, where supply is inconsistent and where distribution losses occur can be difficult without reliable operational data.",
      icon: "GitBranch",
      metricTag: "Unaccounted Water"
    },
    {
      id: "04",
      title: "Limited Water-Quality Visibility",
      description: "Water-quality monitoring may depend on periodic testing and disconnected records, making it harder to maintain a consistent understanding of conditions across multiple locations.",
      icon: "Activity",
      metricTag: "Lagging Feedback"
    }
  ],
  closingStatement: "The problem is not simply the availability of water. It is the difficulty of understanding and managing the systems responsible for delivering it."
};

export const howItWorksData = {
  eyebrow: "THE AQUORA PLATFORM",
  headline: "From Disconnected Water Data to Intelligent Infrastructure Management.",
  description: "Aquora connects relevant infrastructure information, analyzes operational patterns and presents useful insights through a centralized platform.",
  steps: [
    {
      step: "01",
      title: "Connect",
      description: "Bring together available information from water meters, pressure sensors, flow sensors, pump systems, reservoir monitoring equipment and existing operational records.",
      badge: "Ingestion Layer"
    },
    {
      step: "02",
      title: "Monitor",
      description: "Organize incoming information into a unified view of water infrastructure, distribution conditions and equipment performance.",
      badge: "Unified View"
    },
    {
      step: "03",
      title: "Detect",
      description: "Use analytics and AI-assisted anomaly detection to identify unusual patterns that may indicate leakage, abnormal pressure, equipment irregularities or other operational concerns.",
      badge: "Anomaly Engine"
    },
    {
      step: "04",
      title: "Optimize",
      description: "Help operators prioritize inspections, investigate potential problems, plan maintenance and improve operational decisions.",
      badge: "Action Protocol"
    }
  ],
  tabs: [
    {
      id: "network",
      label: "Network Overview",
      title: "Geographic Water Distribution Network",
      description: "Interactive geospatial visualization of primary pipelines, booster stations, reservoir capacities, and district metered areas (DMAs).",
      stats: [
        { label: "Monitored Pipeline", value: "348 km", status: "Active" },
        { label: "Pumping Facilities", value: "14 Units", status: "Operational" },
        { label: "Storage Reservoirs", value: "8 Sites", status: "Normal Level" },
        { label: "Active Telemetry Points", value: "142 Nodes", status: "Transmitting" }
      ]
    },
    {
      id: "monitoring",
      label: "Live Monitoring",
      title: "Operational Flow & Pressure Telemetry",
      description: "Real-time visualization of dynamic line pressures, flow rate velocities, and head loss parameters across designated monitoring points.",
      stats: [
        { label: "Avg System Pressure", value: "4.2 bar", status: "Nominal" },
        { label: "Total Flow Velocity", value: "1,840 m³/h", status: "Demand peak" },
        { label: "Main Reservoir Vol.", value: "84.6%", status: "Stable" },
        { label: "Water Quality (pH/ORP)", value: "7.3 pH", status: "Within Specs" }
      ]
    },
    {
      id: "anomalies",
      label: "Anomaly Detection",
      title: "Algorithmic Pattern & Leak Diagnostics",
      description: "Automated flagging of irregular night-flow shifts, hydraulic gradient anomalies, and pump vibration deviations requiring field verification.",
      stats: [
        { label: "Active Alerts", value: "3 Pending", status: "Flagged" },
        { label: "Sector 4 Night Flow", value: "+32% Delta", status: "Investigation Required" },
        { label: "Pump 03 Differential", value: "0.8 bar drop", status: "Cavitation Risk" },
        { label: "False Positive Filter", value: "Active", status: "Noise Suppressed" }
      ]
    },
    {
      id: "operations",
      label: "Operations Center",
      title: "Maintenance Prioritization & Field Coordination",
      description: "Centralized operational log bridging diagnostic insights with physical technician dispatches, inspection logs, and valve maintenance records.",
      stats: [
        { label: "Prioritized Inspections", value: "2 Scheduled", status: "Assigned" },
        { label: "Valve Service Health", value: "96.4%", status: "Good" },
        { label: "Recent Resolution", value: "Sector 2 Joint", status: "Verified 2h ago" },
        { label: "Audit Compliance", value: "100%", status: "Logged" }
      ]
    }
  ]
};

export const featuresData = {
  eyebrow: "WHAT THE PLATFORM DOES",
  headline: "A Smarter Way to Understand Water Infrastructure.",
  description: "Aquora brings monitoring, analytics and operational intelligence together to help organizations make better decisions about their water systems.",
  features: [
    {
      id: "01",
      title: "Intelligent Leak Detection",
      summary: "Help identify unusual flow patterns and potential water losses across monitored infrastructure.",
      bullets: [
        "Flow-rate anomaly detection",
        "Unusual consumption patterns",
        "Potential leakage indicators",
        "Location-based investigation priorities"
      ],
      icon: "ShieldAlert",
      accent: "#3289D6"
    },
    {
      id: "02",
      title: "Pressure & Flow Monitoring",
      summary: "Understand how water moves through connected infrastructure.",
      bullets: [
        "Pressure monitoring",
        "Flow-rate tracking",
        "Distribution performance",
        "Abnormal operating condition alerts"
      ],
      icon: "Gauge",
      accent: "#42C7B5"
    },
    {
      id: "03",
      title: "Infrastructure Health Monitoring",
      summary: "Monitor the condition and operational behaviour of critical water infrastructure.",
      bullets: [
        "Pump performance indicators",
        "Reservoir monitoring",
        "Equipment status tracking",
        "Maintenance history"
      ],
      icon: "Cpu",
      accent: "#174D78"
    },
    {
      id: "04",
      title: "Water Quality Intelligence",
      summary: "Bring water-quality measurements and testing records into a centralized monitoring environment.",
      disclaimer: "Aquora displays parameters supported by available instruments and testing methods. It does not claim water is safe for consumption based on incomplete measurements.",
      bullets: [
        "Sensor-based quality readings",
        "Water-quality testing records",
        "Location-based monitoring",
        "Historical measurement comparisons"
      ],
      icon: "Droplets",
      accent: "#42C7B5"
    },
    {
      id: "05",
      title: "Predictive Maintenance Insights",
      summary: "Use historical operational information and equipment patterns to help identify assets that may require inspection or maintenance.",
      disclaimer: "Predictive capabilities are introduced systematically as sufficient validated historical operational data is established.",
      bullets: [
        "Equipment anomaly trends",
        "Maintenance history",
        "Asset prioritization",
        "Operational performance tracking"
      ],
      icon: "ClockArrowUp",
      accent: "#3289D6"
    },
    {
      id: "06",
      title: "Water Operations Dashboard",
      summary: "Give operators a centralized view of their water infrastructure.",
      bullets: [
        "Network overview",
        "Infrastructure status",
        "Monitoring alerts",
        "Maintenance activity & performance reports"
      ],
      icon: "LayoutDashboard",
      accent: "#174D78"
    }
  ]
};

export const intelligenceLoopData = {
  eyebrow: "THE INTELLIGENCE LOOP",
  headline: "Every Measurement Tells Part of the Story.",
  description: "Aquora is built around a continuous intelligence cycle that transforms infrastructure measurements into useful operational insights.",
  stages: [
    {
      id: "01",
      name: "Connect",
      layer: "Data Collection",
      detail: "Gather available information from meters, sensors, equipment and operational records.",
      metrics: ["Telemetry Stream", "SCADA Integration", "Manual Inspection Logs"],
      icon: "Radio"
    },
    {
      id: "02",
      name: "Monitor",
      layer: "Pattern Analysis",
      detail: "Analyze changes in water flow, pressure, equipment behaviour and other relevant indicators.",
      metrics: ["Harmonic Pressure Curves", "Baseline Min Night Flow", "Velocity Gradients"],
      icon: "TrendingUp"
    },
    {
      id: "03",
      name: "Understand",
      layer: "Operational Intelligence",
      detail: "Identify potential anomalies, highlight assets requiring attention and provide context for investigation.",
      metrics: ["Anomaly Scoring", "Spatial Clustering", "Confidence Index"],
      icon: "Cpu"
    },
    {
      id: "04",
      name: "Improve",
      layer: "Outcome Feedback",
      detail: "Record inspections, maintenance activities and verified outcomes to improve operational understanding over time.",
      metrics: ["Field Work Orders", "Ground Truth Logs", "Model Tuning"],
      icon: "CheckCircle2"
    }
  ]
};

export const audienceData = {
  eyebrow: "BUILT FOR WATER OPERATORS",
  headline: "Intelligence for Those Responsible for Every Drop.",
  subheading: "Tailored for organizations managing water distribution systems, industrial circuits, and municipal infrastructure—with initial operational focus on Nigerian and regional utility networks.",
  audiences: [
    {
      title: "Water Utilities",
      description: "Monitor distribution infrastructure, identify potential losses and improve operational visibility across municipal zones.",
      icon: "Building2",
      focus: "Distribution loss reduction & DMA balance"
    },
    {
      title: "Industrial Facilities",
      description: "Understand water consumption, monitor internal distribution systems and identify operational irregularities in cooling and processing circuits.",
      icon: "Factory",
      focus: "Process circuit uptime & consumption audit"
    },
    {
      title: "Property & Estate Managers",
      description: "Monitor water infrastructure across residential and commercial estates, balancing pump cycles and storage tanks.",
      icon: "Home",
      focus: "Storage balance & pipe integrity"
    },
    {
      title: "Water Treatment Operators",
      description: "Organize operational measurements, monitor relevant equipment and maintain historical records for compliance.",
      icon: "FlaskConical",
      focus: "Influent/Effluent telemetry & pump health"
    },
    {
      title: "Municipal Infrastructure Authorities",
      description: "Support infrastructure oversight, capital allocation and more informed maintenance planning across civic assets.",
      icon: "Landmark",
      focus: "Civic asset longevity & public reporting"
    },
    {
      title: "Water Infrastructure Providers",
      description: "Improve the monitoring and management of turnkey water systems deployed across multiple commercial locations.",
      icon: "Network",
      focus: "Fleet telemetry & multi-site dispatch"
    }
  ]
};

export const futureVisionData = {
  eyebrow: "THE LONG-TERM VISION",
  headline: "From Monitoring Water Systems to Understanding Them.",
  description: "The long-term opportunity for Aquora is to become an intelligence layer for water infrastructure, helping organizations understand not only the current condition of their systems but also how those systems behave and change over time.",
  capabilities: [
    {
      id: "01",
      title: "Predictive Infrastructure Intelligence",
      description: "Use reliable historical information to identify equipment and infrastructure that may require attention before failure occurs."
    },
    {
      id: "02",
      title: "Water Distribution Optimization",
      description: "Help operators understand distribution patterns, demand variations and potential inefficiencies across complex networks."
    },
    {
      id: "03",
      title: "Water Quality Intelligence",
      description: "Build a more comprehensive view of water-quality conditions across monitored locations as sensor density increases."
    },
    {
      id: "04",
      title: "Infrastructure Digital Twins",
      description: "Develop digital representations of water networks to support monitoring, scenario simulation, and infrastructure planning."
    },
    {
      id: "05",
      title: "Water Resource Intelligence",
      description: "Expand toward understanding regional water availability, seasonal consumption patterns and long-term resource management."
    }
  ],
  networkLayers: [
    { id: "pipelines", label: "Pipeline Networks", count: "348 km" },
    { id: "pressure", label: "Pressure Indicators", count: "48 Nodes" },
    { id: "reservoirs", label: "Reservoir Levels", count: "8 Units" },
    { id: "stations", label: "Monitoring Stations", count: "32 Sites" },
    { id: "assets", label: "Infrastructure Assets", count: "114 Units" }
  ]
};

export const trustData = {
  eyebrow: "TRUST IS PART OF THE SYSTEM",
  headline: "Infrastructure Intelligence Must Be Reliable.",
  description: "Water infrastructure data can influence maintenance decisions, operational planning and public services. Aquora must communicate clearly what it measures, what it estimates and what still requires physical verification.",
  principles: [
    {
      title: "Reliable Data Sources",
      description: "Use appropriate, documented sensors, measurements, testing methods and operational records.",
      icon: "Database"
    },
    {
      title: "Transparent Insights",
      description: "Make the source, timestamp and context of measurements visible wherever possible.",
      icon: "FileCheck"
    },
    {
      title: "Human Oversight",
      description: "Keep operators responsible for confirming problems and approving maintenance or infrastructure decisions.",
      icon: "UserCheck"
    },
    {
      title: "Responsible Data Practices",
      description: "Protect operational information, secure connected infrastructure and apply appropriate access controls.",
      icon: "Lock"
    }
  ],
  sampleAssetTelemetry: {
    assetName: "Lekki-Zone-04 Main Feeder Pipeline",
    assetId: "PL-NG-LK-042",
    measurementType: "Dynamic Line Pressure & Minimum Night Flow",
    measuredValue: "3.82 bar | 42.1 m³/h",
    observationTimestamp: "2026-11-10 18:42:15 WAT (Lag: 1.2s)",
    dataSource: "Endress+Hauser Promag 400 + Telemetry RTU 04",
    telemetryType: "Direct Physical Sensor",
    monitoringStatus: "Active Streaming",
    reviewStatus: "Human Verification Required",
    aiEstimate: "Estimated potential joint seepage: Sector 4B (Confidence: 74%, requires physical acoustic survey)"
  }
};

export const pilotFormData = {
  eyebrow: "BUILDING BETTER WATER SYSTEMS TOGETHER",
  headline: "Let's Make Water Infrastructure More Intelligent.",
  description: "Aquora is seeking partnerships with water utilities, industrial facilities and infrastructure operators interested in exploring intelligent water monitoring. Join the early access programme and help shape a platform designed around real operational challenges.",
  organizationTypes: [
    "Water Utility / Distribution Company",
    "Industrial Facility / Manufacturing Plant",
    "Residential Estate / Property Management",
    "Commercial Building / Campus",
    "Water Treatment Operator",
    "Municipal Infrastructure Authority",
    "Water Infrastructure Engineering Provider",
    "Other Infrastructure Operator"
  ],
  scaleOptions: [
    "Facility / Estate level (< 15 km network)",
    "Medium utility / Industrial district (15 - 100 km)",
    "Large municipal network (100 - 500 km)",
    "Metropolitan infrastructure (> 500 km network)"
  ],
  privacyNotice: "We respect infrastructure operational privacy. Aquora does not request sensitive network credentials, supervisory control overrides, or private SCADA keys. Operational discussions are conducted under mutual NDA."
};

export const faqData = [
  {
    question: "What is Aquora?",
    answer: "Aquora is an AI-powered water infrastructure intelligence platform that helps organizations monitor water systems, identify potential problems and improve operational visibility."
  },
  {
    question: "Can Aquora detect water leaks?",
    answer: "Aquora is designed to analyze relevant flow, pressure and consumption information to identify unusual patterns that may indicate potential leakage. Detection capability depends on the quality, placement and availability of monitoring equipment and data."
  },
  {
    question: "Does Aquora require IoT sensors?",
    answer: "Some capabilities require connected sensors or compatible monitoring equipment. Other features can work with existing operational records, SCADA logs, and imported historical datasets."
  },
  {
    question: "Can Aquora monitor water quality?",
    answer: "Aquora can organize and analyze water-quality measurements from appropriate sensors and testing systems. It does not independently verify that water is safe to drink without suitable measurements and certified laboratory testing."
  },
  {
    question: "Who can use Aquora?",
    answer: "Water utilities, industrial facilities, property managers, water treatment operators, municipal authorities, and organizations responsible for managing water infrastructure."
  },
  {
    question: "Does Aquora replace existing water infrastructure?",
    answer: "No. Aquora does not build physical pipes or treatment chemical facilities. It is designed to complement existing infrastructure by providing a dedicated monitoring and intelligence layer."
  },
  {
    question: "Can organizations participate in a pilot programme?",
    answer: "Yes. Interested organizations can submit their details through our Early Access Pilot Programme form to collaborate on field deployments and shape platform development."
  }
];

export const finalCtaContent = {
  headline: "Every Drop Matters. Every Decision Counts.",
  subheadline: "Water infrastructure deserves better visibility. Aquora is building the intelligence to help organizations understand their systems and manage them more effectively.",
  ctaText: "Partner With Aquora",
  supportingLine: "Building a smarter future for water infrastructure."
};

export const testimonialsData = {
  eyebrow: "INFRASTRUCTURE PERSPECTIVES",
  headline: "Trusted by Engineers, Operators, and Utility Leaders.",
  description: "How water distribution managers and industrial operators understand their networks and optimize operational decisions with Aquora.",
  testimonials: [
    {
      id: "t1",
      quote: "Before Aquora, tracing sub-surface line leaks across our distribution network took days of manual acoustic probing and guesswork. Having automated night-flow anomaly flags reduced our diagnostic turnaround from 72 hours to under 4 hours.",
      author: "Engr. Kayode Balogun",
      role: "Director of Water Distribution & Network Operations",
      organization: "Regional Water Corporation (Lagos Metro)",
      image: "/testimonials/kayode-balogun.jpg",
      initials: "KB",
      impactMetric: "82% Faster Leak Localization",
      sector: "Municipal Water Utility",
      rating: 5
    },
    {
      id: "t2",
      quote: "Managing water supply across a 450-hectare mixed-use residential estate is high-stakes. Aquora gave us the first unified view of booster station head pressures and reservoir drawdown, eliminating midnight supply outages completely.",
      author: "Ngozi Adeleke-Peters",
      role: "Head of Infrastructure & Facilities Management",
      organization: "Lekki Peninsula Coastal Estates",
      image: "/testimonials/ngozi-adeleke.jpg",
      initials: "NA",
      impactMetric: "Zero Unplanned Pressure Drops",
      sector: "Commercial & Residential Estates",
      rating: 5
    },
    {
      id: "t3",
      quote: "In industrial processing, pump cavitation and irregular intake pressures cost millions in replacement equipment. Aquora's hydraulic telemetry flagged micro-pulsations two weeks before pump failure, preventing catastrophic downtime.",
      author: "Ibrahim Sanusi, FNSE",
      role: "Chief Plant Engineer",
      organization: "Agro-Allied Industrial Processing Facility (Ogun Corridor)",
      image: "/testimonials/ibrahim-sanusi.jpg",
      initials: "IS",
      impactMetric: "₦42M Equipment Downtime Averted",
      sector: "Industrial Processing",
      rating: 5
    },
    {
      id: "t4",
      quote: "Water loss in municipal distribution networks isn't just an economic drain; it strains urban aquifers. Aquora's intelligence layer integrates seamlessly with our legacy SCADA infrastructure without requiring costly physical overhaul.",
      author: "Dr. Hadiza Mohammed",
      role: "Principal Infrastructure Consultant",
      organization: "Urban Water Systems Advisory (Abuja FCT)",
      image: "/testimonials/hadiza-mohammed.jpg",
      initials: "HM",
      impactMetric: "Passive SCADA Interoperability",
      sector: "Municipal Infrastructure Advisory",
      rating: 5
    }
  ]
};

export const teamData = {
  eyebrow: "MEET THE LEADERSHIP",
  headline: "Pioneering Climate-Tech for African Water Infrastructure.",
  description: "An experienced team of hydraulic engineers, data scientists, and utility operators committed to solving Africa's most urgent water distribution challenges.",
  members: [
    {
      id: "babatunde",
      name: "Dr. Babatunde Adeleke",
      role: "Co-Founder & Chief Executive Officer",
      bio: "18+ years in hydraulic engineering and urban water networks. Former Senior Advisor on municipal water distribution and water-loss reduction across West Africa.",
      image: "/team/babatunde-adeleke.jpg",
      initials: "BA",
      credentials: "PhD Hydraulic Eng, FNSE",
      linkedin: "https://linkedin.com",
      focus: "Water Network Systems & Utility Strategy"
    },
    {
      id: "chioma",
      name: "Chioma Okonkwo, MSc",
      role: "Co-Founder & Chief Technology Officer",
      bio: "Former Lead IoT Systems Architect at continental telematics firms. Specialist in distributed sensor networks, embedded edge computing, and real-time telemetry processing.",
      image: "/team/chioma-okonkwo.jpg",
      initials: "CO",
      credentials: "MSc Embedded Systems (Imperial)",
      linkedin: "https://linkedin.com",
      focus: "IoT Ingestion & Distributed Systems"
    },
    {
      id: "olumide",
      name: "Engr. Olumide Fashola",
      role: "Head of Infrastructure Integrations",
      bio: "22 years leading SCADA implementations, pumping station instrumentation, and pressure management for major Nigerian metropolitan water corporations.",
      image: "/team/olumide-fashola.jpg",
      initials: "OF",
      credentials: "COREN Registered, MNSE",
      linkedin: "https://linkedin.com",
      focus: "SCADA & Telemetry Interoperability"
    },
    {
      id: "amina",
      name: "Amina Bello",
      role: "Head of Product & Geospatial Systems",
      bio: "Geographic Information Systems (GIS) pioneer with a focus on hydrological spatial modeling, satellite pipeline overlays, and intuitive operator dashboards.",
      image: "/team/amina-bello.jpg",
      initials: "AB",
      credentials: "BEng Geoinformatics, PMP",
      linkedin: "https://linkedin.com",
      focus: "Spatial Network Modeling & UX"
    },
    {
      id: "chukwuma",
      name: "Chukwuma Eze, PhD",
      role: "Lead AI & Anomaly Detection Scientist",
      bio: "Machine learning researcher specializing in hydraulic time-series analysis, signal processing, and Bayesian filtering for predictive pipeline leak detection.",
      image: "/team/chukwuma-eze.jpg",
      initials: "CE",
      credentials: "PhD Signal Processing",
      linkedin: "https://linkedin.com",
      focus: "Time-Series Anomaly Modeling"
    },
    {
      id: "folashade",
      name: "Folashade Adeyemi",
      role: "Head of Operations & Pilot Programmes",
      bio: "Experienced infrastructure project director driving utility field partnerships, deployment protocols, and regulatory compliance across Nigeria.",
      image: "/team/folashade-adeyemi.jpg",
      initials: "FA",
      credentials: "MBA, BEng Civil Engineering",
      linkedin: "https://linkedin.com",
      focus: "Utility Partnerships & Field Diagnostics"
    }
  ]
};

export const footerContent = {
  tagline: "Every Drop. Better Understood.",
  shortDescription: "Turning water infrastructure data into actionable intelligence for more efficient, reliable and resilient water systems.",
  initialMarket: "Initial deployment focus: Nigerian water distribution networks and regional industrial infrastructure.",
  copyright: "© 2026 Aquora. All rights reserved.",
  links: {
    platform: [
      { name: "Overview", href: "#platform" },
      { name: "Leak Detection", href: "#capabilities" },
      { name: "Infrastructure Monitoring", href: "#capabilities" },
      { name: "Water Quality Intelligence", href: "#capabilities" }
    ],
    company: [
      { name: "About Aquora", href: "#about" },
      { name: "Our Technology", href: "#how-it-works" },
      { name: "Pilot Programme", href: "#pilot-access" },
      { name: "Contact", href: "#pilot-access" }
    ],
    resources: [
      { name: "Insights", href: "#platform" },
      { name: "Documentation", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
      { name: "Responsible Monitoring", href: "#trust" }
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
      { name: "X", href: "https://x.com", icon: "Twitter" },
      { name: "YouTube", href: "https://youtube.com", icon: "Youtube" }
    ]
  }
};

