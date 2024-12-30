**Overview**

The **EffortGlyph Admin Dashboard** is a centralized platform for administrators to manage employee/intern profiles, track performance metrics, and oversee the minting and distribution of proof-of-work NFTs. It provides real-time insights into organizational performance and enables seamless interaction with the blockchain infrastructure.



**Core Features**

1. **Employee/Intern Management**:

• Add, edit, or delete employee and intern profiles.

• View detailed performance metrics and work history.

2. **Work Data Synchronization**:

• Periodic and on-demand syncing with the Clockify API.

• Manage work hours, project contributions, and attendance records.

3. **NFT Management**:

• Configure and customize NFT metadata.

• Initiate batch or individual NFT minting.

• Monitor minting status and blockchain transactions.

4. **Gasless Transfer Configuration**:

• Manage relay services (e.g., Biconomy) for gasless NFT transfers.

• View logs of gasless transaction requests and statuses.

5. **Reference Letter Integration**:

• Generate and upload reference letters for employees/interns.

• Embed reference letter URLs in NFT metadata.

6. **Progress Tracking**:

• Monitor the number of NFTs minted and distributed.

• Track employee achievements and milestones.

7. **Analytics and Reports**:

• Visualize organization-wide work metrics and NFT issuance.

• Export reports for internal review.

  

**Key Features and Workflow**

  

**1. Employee/Intern Management**

• **Dashboard View**:

• Overview of all employees and interns.

• Filter and search by name, department, or status.

• **Profile Management**:

• View detailed profiles with:

• Total hours logged.

• Projects completed.

• Achievements unlocked.

• Edit or update profiles as needed.

  

**2. Work Data Synchronization**

• **Automatic Sync**:

• Periodic updates using cron jobs.

• Configurable intervals (e.g., daily, weekly).

• **Manual Sync**:

• Trigger data synchronization on-demand.

• **Error Handling**:

• Logs for failed sync attempts.

• Notifications for resolution.

  

**3. NFT Management**

• **Metadata Configuration**:

• Define NFT traits such as:

• Hours worked.

• Projects completed.

• Reference letter URLs.

• Preview metadata before minting.

• **Minting Process**:

• Batch minting:

• Generate NFTs for all eligible employees at once.

• Individual minting:

• Create NFTs for specific employees or interns.

• **Minting Status**:

• View pending, successful, and failed minting transactions.

• Retry failed transactions with a single click.

  

**4. Gasless Transfers**

• **Relay Service Configuration**:

• Set up and manage relay services for gasless transfers.

• Monitor relay account balances.

• **Transaction Logs**:

• View details of gasless transfers, including timestamps and statuses.

  

**5. Reference Letters**

• **Letter Creation**:

• Upload reference letters as PDFs.

• Generate dynamic URLs for decentralized storage (e.g., IPFS).

• **Metadata Integration**:

• Embed reference letter links directly into NFT metadata.

  

**6. Progress and Analytics**

• **Employee Metrics**:

• Track work hours and achievements at the individual level.

• Identify top performers based on metrics.

• **NFT Issuance**:

• Monitor the number of NFTs minted and distributed.

• View breakdowns by departments or projects.

• **Exportable Reports**:

• Download CSV or PDF reports of all metrics and transactions.

  

**User Interface**

  

**Dashboard Sections**

1. **Overview**:

• Key stats (total NFTs minted, employees onboarded, hours logged).

• Quick access to common actions (e.g., mint NFTs, sync data).

2. **Employee Management**:

• Table view with search and filter functionality.

• Individual profile pages.

3. **NFT Minting**:

• Minting queue with status indicators.

• Configurable NFT metadata templates.

4. **Analytics**:

• Charts and graphs visualizing organization-wide metrics.

• Custom date ranges for analysis.

5. **Settings**:

• API integration settings for Clockify, Supabase, and Moralis.

• Relay service configuration.

  

**Technical Architecture**

  

**Backend:**

• **Node.js**:

• API endpoints for managing employees, syncing data, and minting NFTs.

• Integration with Moralis for blockchain interactions.

• **Supabase**:

• Stores employee data, work metrics, and NFT metadata.

• **Clockify API**:

• Fetches work hours and attendance data.

  

**Frontend:**

• **React + Tailwind CSS**:

• Responsive, modern UI for administrators.

• Dynamic components for data visualization and interactions.

  

**Blockchain:**

• **Moralis API**:

• Handles NFT minting and metadata storage.

• **Polygon (Layer 2)**:

• Cost-efficient blockchain for NFT operations.

• **IPFS**:

• Decentralized storage for reference letters and metadata.

  

**User Roles and Permissions**

1. **Admin**:

• Full access to all features.

• Manage employees, mint NFTs, and configure settings.

2. **Manager**:

• View-only access to specific departments.

• Cannot configure blockchain or relay settings.

  

**Future Enhancements**

1. **Notifications**:

• Alerts for failed syncs or minting issues.

2. **Custom Reports**:

• Allow admins to define metrics for report generation.

3. **Multi-Org Support**:

• Extend functionality for multiple organizations under one dashboard.

4. **AI Insights**:

• Use AI to recommend recognition patterns based on performance data.

  

This documentation outlines the key features and workflows for the **EffortGlyph Admin Dashboard**, ensuring smooth management of proof-of-work NFTs and enhancing organizational transparency and recognition. Let me know if you’d like additional refinements or visual diagrams!