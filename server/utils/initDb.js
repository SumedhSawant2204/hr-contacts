const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "company_db", // Adjust database name if different
};

// Sample companies data
const sampleCompanies = [
  { name: "Apple Inc.", academic_year: "2023-2024" },
  { name: "Microsoft Corporation", academic_year: "2023-2024" },
  { name: "Amazon.com, Inc.", academic_year: "2023-2024" },
  { name: "Google LLC", academic_year: "2023-2024" },
  { name: "Facebook, Inc.", academic_year: "2023-2024" },
  { name: "Tesla, Inc.", academic_year: "2023-2024" },
  { name: "Samsung Electronics Co., Ltd.", academic_year: "2023-2024" },
  { name: "Sony Corporation", academic_year: "2023-2024" },
  { name: "Toyota Motor Corporation", academic_year: "2023-2024" },
  { name: "Nike, Inc.", academic_year: "2023-2024" },
];

// Create connection
const connection = mysql.createConnection(dbConfig);

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    return;
  }
  console.log("Connected to database as id", connection.threadId);

  // Create database if not exists
  createDatabaseIfNotExists();
});

// Function to create database if not exists
function createDatabaseIfNotExists() {
  connection.query("CREATE DATABASE IF NOT EXISTS company_db", (err) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log("Database company_db created or successfully checked.");
    useDatabase();
  });
}

// Function to use company_db database
function useDatabase() {
  connection.query("USE company_db", (err) => {
    if (err) {
      console.error("Error selecting database:", err);
      return;
    }
    console.log("Using database company_db.");
    createTables();
  });
}

// Function to create tables if not exist
function createTables() {
  connection.query(
    `
    CREATE TABLE IF NOT EXISTS hr (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      contact VARCHAR(15) NOT NULL,
      post VARCHAR(100) NOT NULL,
      alternate_contact VARCHAR(15),
      company_id INT NOT NULL,
      FOREIGN KEY (company_id) REFERENCES companies(id)
    )
  `,
    (err) => {
      if (err) {
        console.error("Error creating hr table:", err);
        return;
      }
      console.log("Table hr created or already exists.");

      connection.query(
        `
      CREATE TABLE IF NOT EXISTS companies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        academic_year VARCHAR(10) NOT NULL
      )
    `,
        (err) => {
          if (err) {
            console.error("Error creating companies table:", err);
            return;
          }
          console.log("Table companies created or already exists.");

          // Insert sample companies
          insertSampleCompanies();
        }
      );
    }
  );
}

function insertSampleCompanies() {
  const sql = "INSERT INTO companies (name, academic_year) VALUES ?";
  const values = sampleCompanies.map((company) => [
    company.name,
    company.academic_year,
  ]);

  connection.query(sql, [values], (err, results) => {
    if (err) {
      console.error("Error inserting sample companies:", err);
    } else {
      console.log("Inserted", results.affectedRows, "companies.");
    }

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err);
      } else {
        console.log("Connection closed.");
      }
    });
  });
}
