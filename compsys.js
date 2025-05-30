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
    },
    // Note: Add 55 more questions following the same pattern
        // Module 1: SAP S/4HANA Fundamentals (Additional)
    {
        question: "What was the first SAP product to use Windows NT?",
        options: ["SAP R/2", "SAP R/3", "Business Suite 7", "SAP HANA"],
        correctAnswer: 1,
        explanation: "SAP partnered with Microsoft in 1993/94 to connect R/3 with Windows NT."
    },
    {
        question: "Which feature enables real-time analytics on current transactional data?",
        options: ["OLAP + OLTP separation", "Column Store processing", "OLAP + OLTP integration", "Blockchain validation"],
        correctAnswer: 2,
        explanation: "S/4HANA combines OLAP and OLTP for real-time analytics on live data."
    },
    {
        question: "What is the primary purpose of SAP Data Hub?",
        options: ["User interface design", "Data orchestration across sources", "Payment processing", "Production scheduling"],
        correctAnswer: 1,
        explanation: "Data Hub provides orchestration across heterogeneous data sources."
    },
    {
        question: "Which deployment option provides automatic quarterly innovation upgrades?",
        options: ["On-Premise", "Hybrid", "Private Cloud", "Cloud Edition"],
        correctAnswer: 3,
        explanation: "Cloud Edition includes automatic quarterly innovation updates."
    },
    {
        question: "What does the 'Run Simple' philosophy emphasize?",
        options: ["Reduced customization", "Streamlined processes", "Lower IT costs", "All of the above"],
        correctAnswer: 3,
        explanation: "'Run Simple' focuses on efficiency, simplicity and innovation."
    },
    {
        question: "Which table is eliminated in S/4HANA's simplified data model?",
        options: ["Aggregate tables", "MATDOC", "VBAK", "BKPF"],
        correctAnswer: 0,
        explanation: "Aggregate tables are removed due to denormalized MATDOC table."
    },
    {
        question: "What is the core function of SAP Cloud Platform?",
        options: ["Database storage", "App development and extension", "HR management", "Tax calculation"],
        correctAnswer: 1,
        explanation: "It's a digital platform for new app development and extensions."
    },
    {
        question: "Which component provides personalized shopping experiences?",
        options: ["SAP Commerce Cloud", "SAP Service Cloud", "SAP Marketing Cloud", "SAP Sales Cloud"],
        correctAnswer: 0,
        explanation: "Commerce Cloud enables personalized cross-touchpoint experiences."
    },
    {
        question: "What does transactional data represent?",
        options: ["Long-term reference information", "System record of business events", "Organizational hierarchy", "Financial statements"],
        correctAnswer: 1,
        explanation: "Transaction data records business events like sales orders."
    },

    // Module 2: Sales and Distribution (Additional)
    {
        question: "What determines the shipping point in sales order processing?",
        options: ["Customer country", "Material weight", "Loading group + plant", "Incoterms"],
        correctAnswer: 2,
        explanation: "Shipping point is determined by loading group and delivering plant."
    },
    {
        question: "When is the billing document created?",
        options: ["During goods receipt", "Upon sales order entry", "After delivery confirmation", "During payment processing"],
        correctAnswer: 2,
        explanation: "Billing documents reference sales orders or deliveries."
    },
    {
        question: "What is the purpose of schedule lines?",
        options: ["Track partial deliveries", "Calculate taxes", "Store customer addresses", "Manage credit limits"],
        correctAnswer: 0,
        explanation: "Schedule lines handle delivery quantities and dates."
    },
    {
        question: "Which output medium is used for invoices?",
        options: ["EDI", "Fax", "All of the above", "Printed copy only"],
        correctAnswer: 2,
        explanation: "Output supports multiple media including EDI, email, and print."
    },
    {
        question: "What does 'GR Blocked Stock' indicate?",
        options: ["Quality inspection needed", "Payment received", "Customer return", "Vendor dispute"],
        correctAnswer: 0,
        explanation: "Goods Receipt Blocked Stock requires quality inspection."
    },
    {
        question: "Which document records the business transaction?",
        options: ["Master Data", "Organizational Data", "Transaction Data", "Condition Record"],
        correctAnswer: 2,
        explanation: "Transaction data is the system record of business events."
    },
    {
        question: "What is updated during Goods Issue?",
        options: ["Customer credit limit", "General Ledger accounts", "Material price", "Vendor evaluation"],
        correctAnswer: 1,
        explanation: "Goods Issue updates G/L accounts for inventory and COGS."
    },
    {
        question: "Which process includes picking, packing and posting?",
        options: ["Billing", "Shipping", "Pricing", "Credit check"],
        correctAnswer: 1,
        explanation: "Shipping process manages physical fulfillment steps."
    },
    {
        question: "What replaces traditional customer transactions like VD01?",
        options: ["VA01", "BP", "FB60", "MM01"],
        correctAnswer: 1,
        explanation: "Business Partner (BP) consolidates customer/vendor management."
    },

    // Module 3: Materials Management (Additional)
    {
        question: "What is created automatically during Goods Receipt?",
        options: ["Purchase Order", "Material Document", "Invoice", "Payment advice"],
        correctAnswer: 1,
        explanation: "Goods Receipt generates material, accounting and controlling documents."
    },
    {
        question: "Which field was extended from 18 to 40 characters?",
        options: ["Vendor number", "Plant code", "Material number", "Storage location"],
        correctAnswer: 2,
        explanation: "Material number length increased for flexibility."
    },
    {
        question: "What does MIGO replace?",
        options: ["ME21N", "MB01/MB1A", "MM01", "MRP1"],
        correctAnswer: 1,
        explanation: "MIGO consolidates goods movement transactions."
    },
    {
        question: "Which process verifies incoming invoices against POs?",
        options: ["Goods Receipt", "Invoice Verification", "Vendor Evaluation", "Payment Run"],
        correctAnswer: 1,
        explanation: "Invoice Verification checks prices, quantities and arithmetic."
    },
    {
        question: "What is the purpose of a source list?",
        options: ["Track finished goods", "Define approved vendors", "Calculate taxes", "Manage HR positions"],
        correctAnswer: 1,
        explanation: "Source lists specify allowed procurement sources per material."
    },
    {
        question: "Which agreement type includes delivery schedules?",
        options: ["Value Contract", "Quantity Contract", "Scheduling Agreement", "Blanket PO"],
        correctAnswer: 2,
        explanation: "Scheduling Agreements spread quantities over delivery dates."
    },
    {
        question: "What is evaluated in vendor performance scoring?",
        options: ["Price, Quality, Delivery", "Location, Size, Revenue", "IT systems, Certifications", "Employee count, Facilities"],
        correctAnswer: 0,
        explanation: "Vendor evaluation uses price, quality and delivery criteria."
    },
    {
        question: "Which movement type represents returns to vendors?",
        options: ["101", "122", "231", "561"],
        correctAnswer: 1,
        explanation: "Movement type 122 handles return deliveries."
    },
    {
        question: "What triggers automatic Purchase Requisitions?",
        options: ["MRP runs", "Sales orders", "Both A and B", "Manual entry only"],
        correctAnswer: 2,
        explanation: "Requisitions can be created manually or automatically."
    },

    // Module 4: Production Planning (Additional)
    {
        question: "What is exploded during MRP?",
        options: ["Work centers", "Bill of Materials", "Cost centers", "Profit centers"],
        correctAnswer: 1,
        explanation: "BOM explosion calculates component requirements."
    },
    {
        question: "Which confirmation data is essential for planning?",
        options: ["Employee names", "Canteen usage", "Operation times", "Break durations"],
        correctAnswer: 2,
        explanation: "Activity times (setup, machine) enable realistic planning."
    },
    {
        question: "What does MTS stand for?",
        options: ["Material Tracking System", "Make-To-Stock", "Machine Time Standard", "Maintenance Task Schedule"],
        correctAnswer: 1,
        explanation: "Make-To-Stock uses independent requirements planning."
    },
    {
        question: "Where is standard time data stored?",
        options: ["Material Master", "Work Center", "Routing", "Both B and C"],
        correctAnswer: 3,
        explanation: "Routings and work centers store time formulas."
    },
    {
        question: "What is settled during order settlement?",
        options: ["Customer invoices", "Actual production costs", "Vendor payments", "Tax liabilities"],
        correctAnswer: 1,
        explanation: "Actual costs are settled to cost objects."
    },
    {
        question: "Which strategy uses planning material?",
        options: ["Strategy 10", "Strategy 20", "Strategy 50", "Strategy 60"],
        correctAnswer: 3,
        explanation: "Strategy 60 (Planning w/ Planning Material) uses configurable products."
    },
    {
        question: "What triggers capacity planning?",
        options: ["Production orders", "HR hiring", "Sales forecasts", "All of the above"],
        correctAnswer: 0,
        explanation: "Production orders generate capacity requirements."
    },
    {
        question: "Which UI replaces Engineering Workbench?",
        options: ["SAP GUI", "Fiori/Web UI", "Adobe Forms", "BRFplus"],
        correctAnswer: 1,
        explanation: "Fiori/Web UIs maintain BOMs/routings in S/4HANA."
    },
    {
        question: "What is updated during production Goods Receipt?",
        options: ["Stock quantity", "Standard price", "Vendor account", "Customer credit"],
        correctAnswer: 0,
        explanation: "Finished goods inventory increases upon Goods Receipt."
    },

    // Cross-Module Integration
    {
        question: "Which integration connects SD-FI-MM?",
        options: ["Order-to-Cash", "Procure-to-Pay", "Both A and B", "Plan-to-Produce"],
        correctAnswer: 2,
        explanation: "O2C and P2P integrate sales, materials and finance."
    },
    {
        question: "What triggers material reservations in PP?",
        options: ["Sales orders", "Production orders", "Purchase orders", "Goods receipts"],
        correctAnswer: 1,
        explanation: "Production orders reserve BOM components."
    },
    {
        question: "Which master data is shared across SD-MM-PP?",
        options: ["Customer Master", "Material Master", "Vendor Master", "Condition Records"],
        correctAnswer: 1,
        explanation: "Material Master is used in sales, procurement and production."
    },
    {
        question: "What updates during Goods Movement?",
        options: ["Inventory accounts", "Material documents", "Both A and B", "Customer credit"],
        correctAnswer: 2,
        explanation: "Goods movements create material docs and update FI."
    },
    {
        question: "Which solution integrates with S/4HANA for HR?",
        options: ["Ariba", "SuccessFactors", "Hybris", "Concur"],
        correctAnswer: 1,
        explanation: "SuccessFactors handles human capital management."
    },
    {
        question: "What is the primary SAP Fiori app category for analytics?",
        options: ["Transactional", "Factsheet", "Analytical", "Guided"],
        correctAnswer: 2,
        explanation: "Analytical apps provide visual business data overviews."
    },
    {
        question: "Which table stores universal document data?",
        options: ["VBAK", "MATDOC", "BKPF", "CDHDR"],
        correctAnswer: 1,
        explanation: "MATDOC consolidates document data across functions."
    },
    {
        question: "What enables real-time inventory management?",
        options: ["No aggregates", "HANA processing", "Both A and B", "Batch jobs"],
        correctAnswer: 2,
        explanation: "In-memory processing without aggregates enables real-time."
    },
    {
        question: "Which process uses condition master data?",
        options: ["SD Pricing", "MM Purchasing", "Both A and B", "PP Scheduling"],
        correctAnswer: 2,
        explanation: "Condition records store prices for sales and procurement."
    },
    {
        question: "What is a key benefit of the Business Partner approach?",
        options: ["Reduced data redundancy", "Longer material numbers", "More release cycles", "Hardware dependence"],
        correctAnswer: 0,
        explanation: "BP consolidates customer/vendor master data management."
    }
];


// Total questions: 25 shown (Add 55 more to reach 80)
