Test Coverage

This repository includes a set of unit tests to validate the functionality of the API endpoints. Below are the details of the tests performed:
Activity Tests

    Test Case: Create a New Activity
        Description: This test verifies the API's ability to create a new activity. It sends a payload containing details such as activityName, packageType, activityCategory, emissionFactor, and unit.
        Expected Outcome:
            The response status should be 201.
            The response should indicate success with a success: true flag and a message: "Activity Created Successfully".
        Test Result: ✅ Passed

    Test Case: Get All Activities
        Description: This test ensures that the API correctly fetches a list of all activities.
        Expected Outcome:
            The response status should be 200.
            The data field should return an array of activities.
            The success field in the response should be true.
        Test Result: ✅ Passed

Part Tests

    Test Case: Create a New Part
        Description: This test verifies that the API endpoint can create a new part. A payload containing details such as partName, partType, scope, emissionFactor, and unit is sent to the API.
        Expected Outcome:
            The response status should be 201.
            The response should contain a success: true flag and a message: "Part Created Successfully".
        Test Result: ✅ Passed

    Test Case: Get All Parts
        Description: This test checks whether the API returns a list of all parts in the system.
        Expected Outcome:
            The response status should be 200.
            The response data should contain an array of parts.
            The success field in the response should be true.
        Test Result: ✅ Passed

Summary

    Test Suites: 2 executed, all passed.
    Individual Tests: 4 executed, all passed.
    Total Time Taken: Approximately 9 seconds.

The tests confirm that the backend API is functioning as expected for creating and retrieving activities and parts.

__________________________________________________________________________________________________________________________________

Trees API Tests

This section covers the unit tests for the Trees API, which validate the functionality of the file upload and tree retrieval endpoints. Below are the details of the tests performed:
Test Case: File Upload and Data Processing

Description:
This test ensures that the API can correctly upload a file containing tree data (in .xlsx format) and process it. The test checks if the file exists, creates a POST request to upload the file to the /trees/add endpoint, and verifies the response.

Expected Outcome:

    The response status should be 201 (Created), indicating the file was successfully uploaded and processed.
    The response body should include a success message: "File uploaded and processed successfully".

Test Result: ✅ Passed

    Console Logs:
        Form headers: This log displays the headers used for the file upload request, including the content-type header set to multipart/form-data with a boundary.
        Response status: The status code of the response was 201, which indicates that a resource was successfully created (in this case, the file was processed and stored).
        Response data: The response body includes the success flag set to true, a statusCode of 200, and the expected message: "File uploaded and processed successfully".

Test Case: Retrieve Trees

Description:
This test ensures that the /trees/GetTrees endpoint returns a list of trees stored in the database.

Expected Outcome:

    The response status should be 200 (OK), indicating a successful retrieval.
    The response body should contain a data field with a list of trees.

Test Result: ✅ Passed
Summary

    Test Suites: 3 executed, all passed.
    Individual Tests: 6 executed, all passed.
    Total Time Taken: Approximately 6.3 seconds.

The tests confirm that the backend API is functioning as expected for:

    Uploading and processing files for tree data.
    Successfully retrieving the list of trees.

___________________________________________________________________________________________________________________________________