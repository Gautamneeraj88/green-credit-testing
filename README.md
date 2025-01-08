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