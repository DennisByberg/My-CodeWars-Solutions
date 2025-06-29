# My CodeWars Solutions

This repository contains my solutions to various CodeWars problems implemented in multiple programming languages.

## Languages Supported

- TypeScript
- JavaScript
- C#

## Project Structure

```
Solutions/
  Problem_Name/
    TypeScript/
      solution.ts
      solution.test.ts
    JavaScript/
      solution.js
      solution.test.js
    CSharp/
      Solution.cs
      SolutionTests.cs
```

## Running Tests

**Important:** All commands must be run from the root directory (`/My-CodeWars-Solutions/`)

#### JavaScript/TypeScript Tests

```bash
npm test
```

#### C# Tests

```bash
dotnet test

dotnet test --filter "FullyQualifiedName~Solutions.{FOLDER_NAME}.CS"

```

## Setup

### Prerequisites

- Node.js (for JavaScript/TypeScript)
- .NET 9.0 SDK (for C#)

### Installation

1. Clone the repository
2. **Navigate to the project root:**
   ```bash
   cd My-CodeWars-Solutions
   ```
3. Install JavaScript/TypeScript dependencies:
   ```bash
   npm install
   ```
4. Restore C# packages:
   ```bash
   dotnet restore
   ```
