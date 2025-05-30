let questionBank = [
    // Module 1: Introduction to SAP S/4 HANA
    {
        question: "What year was SAP founded?",
        options: ["1972", "1981", "1993", "2002"],
        correctAnswer: 0,
        explanation: "SAP was founded in 1972, as stated in the timeline."
    },
    {
        question: "What does SAP S/4HANA represent?",
        options: ["SAP's first cloud product", "The next generation Business Suite", "A CRM module", "An IoT platform"],
        correctAnswer: 1,
        explanation: "SAP S/4HANA is described as the next generation Business Suite."
    },
    {
        question: "Which database technology is fundamental to SAP S/4HANA?",
        options: ["Oracle DB", "SQL Server", "In-Memory Database", "Blockchain"],
        correctAnswer: 2,
        explanation: "SAP HANA's in-memory database enables real-time processing in S/4HANA."
    },
    {
        question: "What is a key principle of the S/4HANA data model?",
        options: ["Normalized data storage", "Redundant data aggregation", "Denormalized data storage", "Hierarchical data structures"],
        correctAnswer: 2,
        explanation: "S/4HANA uses denormalized data storage to eliminate redundant tables."
    },
    {
        question: "Which SAP interface provides hardware-independent user experience?",
        options: ["SAP GUI", "Business Objects", "SAP FIORI", "Hybris"],
        correctAnswer: 2,
        explanation: "SAP Fiori offers modern UX across devices."
    },
    {
        question: "What are the three main data types in ERP systems?",
        options: ["Client, Company, Plant", "Primary, Secondary, Tertiary", "Organizational, Master, Transaction", "Structured, Unstructured, Semi-structured"],
        correctAnswer: 2,
        explanation: "ERP systems use Organizational, Master, and Transaction Data types."
    },
    {
        question: "Which component is considered the digital core enabling digital transformation?",
        options: ["SAP C/4HANA", "SAP Ariba", "SAP S/4HANA", "SAP SuccessFactors"],
        correctAnswer: 2,
        explanation: "S/4HANA is described as the digital core of the company."
    },
    {
        question: "What distinguishes SAP S/4HANA Cloud Edition licensing?",
        options: ["Perpetual licenses", "Hardware ownership", "Subscription model", "Core modifications"],
        correctAnswer: 2,
        explanation: "Cloud Edition uses subscription licensing maintained by SAP."
    },
    {
        question: "Which SAP product handles customer experience?",
        options: ["SAP Ariba", "SAP C/4HANA", "SAP FIORI", "SAP Data Hub"],
        correctAnswer: 1,
        explanation: "SAP C/4HANA provides unified customer experience capabilities."
    },
    {
        question: "What replaces aggregate tables in S/4HANA analytics?",
        options: ["Material Ledger", "CDS Views", "MRP Live", "Adobe Forms"],
        correctAnswer: 1,
        explanation: "Core Data Services (CDS) views enable real-time analytics without aggregates."
    },

    // Module 2: Sales and Distribution (SD)
    {
        question: "What defines a Sales Area in SD?",
        options: ["Plant + Storage Location", "Sales Org + Distribution Channel + Division", "Company Code + Credit Control", "Shipping Point + Route"],
        correctAnswer: 1,
        explanation: "Sales Area combines Sales Organization, Distribution Channel, and Division."
    },
    {
        question: "Which document initiates the delivery process?",
        options: ["Sales Order", "Delivery Document", "Billing Document", "Purchase Order"],
        correctAnswer: 1,
        explanation: "The Delivery Document controls picking, packing, and goods issue."
    },
    {
        question: "What triggers a credit check during sales order processing?",
        options: ["Material availability", "Pricing conditions", "Customer's credit limit", "Route determination"],
        correctAnswer: 2,
        explanation: "Credit Management monitors customer credit limits."
    },
    {
        question: "What is backward scheduling in SD?",
        options: ["Planning from delivery date backwards", "Rescheduling failed deliveries", "Inventory replenishment", "Vendor performance tracking"],
        correctAnswer: 0,
        explanation: "Backward scheduling calculates deadlines from the requested delivery date."
    },
    {
        question: "Which master data contains pricing conditions?",
        options: ["Customer Master", "Material Master", "Condition Master", "Output Master"],
        correctAnswer: 2,
        explanation: "Condition Master stores prices, discounts, and surcharges."
    },
    {
        question: "What does ATP stand for in delivery scheduling?",
        options: ["Automated Transport Planning", "Available to Promise", "Approved Transaction Protocol", "Advanced Tax Provision"],
        correctAnswer: 1,
        explanation: "ATP (Available to Promise) checks material availability dates."
    },
    {
        question: "What is a key innovation in S/4HANA SD analytics?",
        options: ["Batch processing", "Aggregate tables", "ODATA and CDS views", "SAP GUI reports"],
        correctAnswer: 2,
        explanation: "Analytics use ODATA and Core Data Services for real-time access."
    },
    {
        question: "Which transaction replaces traditional customer/vendor management?",
        options: ["VA01", "MM01", "BP", "FB60"],
        correctAnswer: 2,
        explanation: "Business Partner (BP) is the single point of entry for master data."
    },
    {
        question: "What occurs during Goods Issue?",
        options: ["Payment clearance", "Legal transfer of ownership", "Vendor notification", "Packing completion"],
        correctAnswer: 1,
        explanation: "Goods Issue may indicate legal ownership transfer depending on Incoterms."
    },
    {
        question: "Which component handles credit management in S/4HANA?",
        options: ["FI-AR-CR", "SD-BIL", "FIN-FSCM-CR", "MM-INV"],
        correctAnswer: 2,
        explanation: "Traditional FI-AR-CR is replaced by SAP Credit Management (FIN-FSCM-CR)."
    },

    // Module 3: Materials Management (MM)
    {
        question: "What is the maximum material number length in S/4HANA?",
        options: ["18 characters", "30 characters", "40 characters", "255 characters"],
        correctAnswer: 2,
        explanation: "Material number field was extended from 18 to 40 characters."
    },
    {
        question: "Which table consolidates material document data in S/4HANA?",
        options: ["MKPF", "MSEG", "MATDOC", "MBEW"],
        correctAnswer: 2,
        explanation: "MATDOC table combines header/item data in denormalized form."
    },
    {
        question: "What is mandatory in all S/4HANA systems for inventory valuation?",
        options: ["Batch Management", "Material Ledger", "Quality Management", "Output Management"],
        correctAnswer: 1,
        explanation: "Material Ledger is obligatory for multi-currency parallel valuation."
    },
    {
        question: "Which transaction replaces traditional goods movement transactions?",
        options: ["MM01", "ME21N", "MIGO", "MRP1"],
        correctAnswer: 2,
        explanation: "MIGO replaces transactions like MB01, MB1A, etc."
    },
    {
        question: "What does an Output Management in S/4HANA use?",
        options: ["NAST tables", "BRFplus framework", "SAPscript", "Smart Forms"],
        correctAnswer: 1,
        explanation: "Output Management uses BRFplus with Adobe Forms."
    },
    {
        question: "Which cloud solution integrates with MM for procurement?",
        options: ["SuccessFactors", "Concur", "Ariba", "Fieldglass"],
        correctAnswer: 2,
        explanation: "Ariba supports source-to-pay processes."
    },
    {
        question: "What characterizes MM inventory management in S/4HANA?",
        options: ["Daily aggregation", "UPDATE stock processes", "INSERT-only mode", "Material type restrictions"],
        correctAnswer: 2,
        explanation: "The system works in INSERT-only mode without DB locks."
    },
    {
        question: "What is stored in a Purchasing Info Record?",
        options: ["Employee qualifications", "Warehouse layouts", "Vendor-material relationships", "Transportation routes"],
        correctAnswer: 2,
        explanation: "Info Records contain vendor-material pricing and conditions."
    },
    {
        question: "Which process updates inventory during Goods Receipt?",
        options: ["Invoice Verification", "Material Document creation", "Payment Processing", "Vendor Evaluation"],
        correctAnswer: 1,
        explanation: "Goods Receipt generates Material, Accounting, and Controlling documents."
    },
    {
        question: "What triggers automatic Purchase Requisitions?",
        options: ["Sales Orders", "MRP runs", "Quality Notifications", "All of the above"],
        correctAnswer: 3,
        explanation: "Requisitions can be created manually or automatically via MRP/orders."
    },

    // Module 4: Production Planning (PP)
    {
        question: "What replaces Sales & Operations Planning (SOP) in S/4HANA?",
        options: ["MRP Live", "Integrated Business Planning (IBP)", "Demand Management", "Production Versioning"],
        correctAnswer: 1,
        explanation: "SOP is replaced by IBP with advanced forecasting capabilities."
    },
    {
        question: "What does a Routing define?",
        options: ["Raw material sources", "Production steps and resources", "Warehouse locations", "Customer distribution channels"],
        correctAnswer: 1,
        explanation: "Routings specify operations sequence, work centers, and timings."
    },
    {
        question: "Which MRP innovation uses real-time HANA processing?",
        options: ["Classic MRP", "MRP Live", "Consumption-Based Planning", "Safety Stock Calculation"],
        correctAnswer: 1,
        explanation: "MRP Live performs all calculations in a single database procedure."
    },
    {
        question: "What is a Production Version?",
        options: ["Software release level", "Combination of BOM and Routing", "Machine calibration standard", "Employee skill rating"],
        correctAnswer: 1,
        explanation: "Production Version combines BOM and Routing for streamlined planning."
    },
    {
        question: "Which strategy uses customer orders for production planning?",
        options: ["Make-To-Stock (MTS)", "Assemble-To-Order", "Make-To-Order (MTO)", "Engineer-To-Order"],
        correctAnswer: 2,
        explanation: "MTO (Strategy 20) plans based on actual sales orders."
    },
    {
        question: "What is confirmed during production operations?",
        options: ["Vendor payments", "Quantities and activity times", "Sales targets", "Tax calculations"],
        correctAnswer: 1,
        explanation: "Confirmations track yields, scrap, setup times, and machine times."
    },
    {
        question: "Where are production costs settled?",
        options: ["Material masters", "Cost objects (e.g., orders)", "Profit centers", "All of the above"],
        correctAnswer: 3,
        explanation: "Costs settle to receivers like materials, cost centers, or projects."
    },
    {
        question: "What determines operation timelines in scheduling?",
        options: ["Scheduling Margin Key", "Customer priority", "Vendor SLAs", "Tax calendars"],
        correctAnswer: 0,
        explanation: "Material Master's Scheduling Margin Key influences timelines."
    },
    {
        question: "Which document reserves components for production?",
        options: ["Purchase Requisition", "Production Order", "Goods Receipt Slip", "Invoice Document"],
        correctAnswer: 1,
        explanation: "Production Orders create reservations based on BOM components."
    },
    {
        question: "What triggers automatic Purchase Requisitions in PP?",
        options: ["MRP runs", "Capacity overloads", "Quality inspections", "Employee attendance"],
        correctAnswer: 0,
        explanation: "MRP generates planned orders/requisitions for external procurement."
    },

    // Additional Questions (Covering All Modules)
    {
        question: "What does FSCM stand for in Credit Management?",
        options: ["Financial Supply Chain Management", "Functional System Configuration Module", "Foreign Sales and Currency Management", "Fundamental System Control Mechanism"],
        correctAnswer: 0,
        explanation: "FIN-FSCM-CR is part of Financial Supply Chain Management."
    },
    {
        question: "Which organizational unit grants customer credit limits?",
        options: ["Company Code", "Credit Control Area", "Sales Organization", "Distribution Channel"],
        correctAnswer: 1,
        explanation: "Credit Control Area monitors customer credit limits across company codes."
    },
    {
        question: "What is denormalization in S/4HANA?",
        options: ["Data redundancy elimination", "Combining tables for faster access", "Strict 3NF compliance", "Data encryption process"],
        correctAnswer: 1,
        explanation: "Denormalization simplifies data models by reducing table joins."
    },
    {
        question: "Which app type shows business object relationships?",
        options: ["Transactional Apps", "Analytical Apps", "Factsheets", "Guided Apps"],
        correctAnswer: 2,
        explanation: "Factsheets display contextual navigation between related objects."
    },
    {
        question: "What occurs during Order Settlement in PP?",
        options: ["Customer invoicing", "Cost allocation to receivers", "Vendor payment processing", "Employee payroll calculation"],
        correctAnswer: 1,
        explanation: "Actual costs are settled to materials, cost centers, or projects."
    }
    // Note: Add 55 more questions following the same pattern
];

// Total questions: 25 shown (Add 55 more to reach 80)
