
**Overview**

  

The **EffortGlyph Employee/Intern Dashboard** is a user-friendly interface designed to provide employees and interns with a seamless experience for viewing their work metrics, achievements, and proof-of-work NFTs. It prioritizes ease of use, clear navigation, and an engaging design to encourage interaction and appreciation of their efforts.

  

**Core Features**

1. **Profile Overview**:

• Summary of work hours, projects, and achievements.

• Access to individual NFT details.

2. **NFT Redemption**:

• Easy claiming of NFTs directly into wallets like MetaMask.

• Gasless transactions for the first NFT transfer.

3. **Work Metrics**:

• Visual representation of work hours, tasks completed, and milestones.

• Timeline of contributions and progress.

4. **Reference Letters**:

• View and download personalized reference letters.

• Direct link embedded in the NFT metadata.

5. **Achievements & Recognition**:

• Highlight key accomplishments.

• Interactive badges for milestones.

6. **Wallet Integration**:

• Securely connect and manage Web3 wallets.

• View NFTs in the connected wallet.

  

**UI Design**

  

**1. Layout**

• **Dashboard Structure**:

• **Header**:

• Logo and branding.

• Profile icon for settings and logout.

• **Sidebar Navigation**:

• Menu items: Dashboard, NFTs, Work Metrics, Achievements, Reference Letters.

• **Main Content Area**:

• Dynamic sections displaying selected content (e.g., NFT details, metrics).

• **Mobile Responsiveness**:

• Collapsible sidebar for smaller screens.

• Optimized touch interactions.

  

**2. Colors and Typography**

• **Color Palette**:

• Primary: Vibrant Blue (#4A90E2) for highlights.

• Secondary: Soft Gray (#F4F4F4) for backgrounds.

• Accent: Golden Yellow (#FFD700) for achievements.

• **Typography**:

• Header Font: Modern Sans Serif for titles.

• Body Font: Clean Serif for readability.

  

**UX Design**

  

**1. Onboarding Experience**

• **Steps**:

1. Login using organizational credentials or email.

2. Guided setup to connect MetaMask wallet.

3. Introduction to dashboard features with tooltips.

  

**2. Dashboard Navigation**

• **Quick Access**:

• A prominent “Claim NFT” button for easy interaction.

• Visual cards summarizing hours logged, achievements, and NFTs.

• **Intuitive Menu**:

• Clear labels and icons for each section.

• Highlight active menu items for user context.

  

**Key Sections**

  

**1. Profile Overview**

• **UI**:

• User avatar with editable profile details.

• Snapshot of total hours worked, tasks completed, and milestones.

• **UX**:

• Engaging visuals (e.g., progress bars, pie charts).

• Interactive tooltips explaining key metrics.

  

**2. NFTs**

• **UI**:

• Grid or list view of all minted NFTs.

• NFT cards with:

• Image of the NFT.

• Metadata: Total hours, project contributions, reference letter link.

• **UX**:

• “Claim NFT” button on each card for unclaimed NFTs.

• Clear confirmation modal for gasless transactions.

  

**3. Work Metrics**

• **UI**:

• Dynamic charts (bar, line, or pie) showing:

• Monthly hours worked.

• Task breakdown by project.

• Attendance trends.

• **UX**:

• Interactive filters for time range (weekly, monthly, yearly).

• Hover effects showing detailed data points.

  

**4. Achievements & Recognition**

• **UI**:

• Badge gallery displaying unlocked milestones.

• Animated icons for recent achievements.

• **UX**:

• Achievement pop-ups with congratulatory messages.

• Link achievements to NFTs for context.

  

**5. Reference Letters**

• **UI**:

• List view of available reference letters.

• Download button for each letter.

• **UX**:

• Show notification when a new reference letter is uploaded.

• Clear indication if a letter is embedded in an NFT.

  

**6. Wallet Integration**

• **UI**:

• “Connect Wallet” button in the profile settings.

• Status indicator (Connected/Not Connected).

• **UX**:

• Guided flow for wallet connection (e.g., MetaMask integration).

• Error messages for failed transactions or wallet issues.

  

**Interactive Features**

1. **Gasless NFT Redemption**:

• Users click “Claim NFT” → Confirmation modal appears.

• Backend handles gasless transfer via relay service.

• Success notification with a link to view the NFT in MetaMask.

2. **Progress Visualization**:

• Animated progress bars for logged hours and milestones.

• Real-time updates as new data syncs.

3. **Reference Letter Interaction**:

• Direct links to letters hosted on IPFS.

• Embedded previews within the dashboard.

  

**Technical Dependencies**

1. **Frontend**:

• React with Tailwind CSS for responsive design.

• D3.js or Chart.js for dynamic charts.

2. **Blockchain Interaction**:

• Web3.js or ethers.js for wallet and NFT integration.

3. **Backend APIs**:

• Supabase for work metrics and profile data.

• Moralis for NFT minting and metadata handling.

  

**Future Enhancements**

1. **Gamification**:

• Add streak tracking and rewards for consistent work.

• Leaderboards showcasing top contributors.

2. **Dynamic Notifications**:

• Real-time alerts for new milestones or NFT mints.

3. **Personalization**:

• Allow users to customize the dashboard theme or layout.

  
