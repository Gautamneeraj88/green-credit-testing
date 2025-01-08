import apiClient from "../utils/apiClient";
import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";

describe("Trees API", () => {
  it("should upload file and process data", async () => {
    const filePath = path.join(__dirname, "./test-data/trees_data.xlsx");

    // Check if file exists before trying to upload
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found at ${filePath}`);
    }

    const file = fs.createReadStream(filePath);

    const formData = new FormData();
    formData.append("uploadCsv", file);

    try {
      // Log the headers to verify they're set properly
      console.log("Form headers: ", formData.getHeaders());

      const response = await apiClient.post("/trees/add", formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      console.log("Response status: ", response.status);
      console.log("Response data: ", response.data);

      // Update to expect 201 status code, not 200
      expect(response.status).toBe(201);
      expect(response.data.message).toBe(
        "File uploaded and processed successfully"
      );
    } catch (error) {
      // Log the error details
      console.error("Error during file upload: ", error);

      throw new Error("File upload failed");
    }
  });

  it("should retrieve trees", async () => {
    try {
      const response = await apiClient.get("/trees/GetTrees");
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("data");
    } catch (error) {
      throw new Error("Failed to retrieve trees");
    }
  });
});
