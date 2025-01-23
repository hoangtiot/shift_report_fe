<div align='center'>

<p>The Shift Report project is a Java Spring Boot application designed to manage financial transactions and debts during business shifts. It uses MySQL for data storage, calculates total shift cash, and provides shift summaries.</p>

<h4> <span> · </span> <a href="#documentation"> Documentation </a> <span> · </span> <a href="#report-bug"> Report Bug </a> <span> · </span> <a href="#request-feature"> Request Feature </a> </h4>

</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
- [Roadmap](#compass-roadmap)
- [Contact](#handshake-contact)

## :star2: About the Project

### :dart: Features

- Transaction Management: Record income and expenses during a shift.
- Debt Management: Track debts incurred during the shift.
- Cash Calculation: Calculate total cash for each shift, including incomes, expenses, and debts.
- Shift Summary: Generate shift summaries for record-keeping.

## :compass: Roadmap

- [x] Init and models
- [x] Record transactions
- [x] Calculate total
- [ ] Send notifications
- [ ] Enhance UI/UX for frontend

### :gear: Installation

Clone the repository:
\`\`\`bash
git clone [repository URL will be here]
\`\`\`
Navigate to the \`report_be\` directory:
\`\`\`bash
cd report_be
\`\`\`
Install MySQL locally or use a cloud service. Create a database named \`shift_report_db\`. Update MySQL connection settings in \`src/main/resources/application.properties\`.
Build the backend application:
\`\`\`bash
mvnw install
\`\`\`
Run the Spring Boot application:
\`\`\`bash
mvnw spring-boot:run
\`\`\`

## :handshake: Contact

hoangtiot - [LinkedIn](https://www.linkedin.com/in/hoangdh1262/) - dohuyhoang1120@gmail.com

Project Link: [repository URL will be here]

## UI/UX Improvements for Readability (Roo Code Assist Changes)

In this project, UI/UX improvements were implemented to enhance the readability of the application. The following changes were made:

- **Increased Base Font Size:** The base font sizes for body text and headings were increased in \`src/assets/theme/base/typography.js\` to improve text legibility.

  - \`fontSizeMD\` increased from 16px to 18px.
  - \`fontSizeXL\` increased from 20px to 22px.

- **Increased Heading Sizes:** Heading sizes (h4, h5, h6) were slightly increased by 2px each in \`src/assets/theme/base/typography.js\` for better visual hierarchy.

  - h4: increased from 24px to 26px.
  - h5: increased from 20px to 22px.
  - h6: increased from 16px to 18px.

- **Adjusted Line Heights:** Line heights for body text and headings were adjusted in \`src/assets/theme/base/typography.js\` to improve spacing and readability.

  - \`body1\` line height increased from 1.625 to 1.7.
  - \`body2\` line height increased from 1.6 to 1.65.
  - Heading line heights (h1-h6) were set to a consistent value of 1.4.

- **Global Style Adjustments:** Global styles were modified in \`src/assets/theme/base/globals.js\` to enhance text contrast and link readability.
  - Default body text color was darkened for better contrast.
  - Default link color was ensured to be dark for better visibility.

These changes aim to provide a more comfortable and readable user interface for the Shift Report application.
