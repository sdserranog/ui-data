# UI DATA PROCESSOR
## Description
The UI Data Processor is a user-friendly interface designed to streamline the process of filtering JSON data. Users can effortlessly upload a JSON file, apply a series of filters to refine the data, and download the filtered results at any stage of the process.

## Filters
A filter is a specialized function that processes input data to produce a desired output. Here's what you need to know:

- **Input:** Data sourced directly or derived from a previous filter's output.
- **Output:** The outcome after the filter's application on the input data.

For optimal clarity, scalability and efficiency, each filter should have a singular focus. If multiple operations are required, consider using multiple filters.

### Creation
To create a filter, you'll need:
- **Name**: Displayed label in the UI.
- **Conditions**: A combination of conditions using logical operators (And, Or).
- **Operation**: The action applied to data when conditions are met. Some operations may require additional parameters.

  Available operations include: 
  - **Remove:** Deletes entries that satisfy the conditions.
  - **Replace:** Modifies the value of fields that meet the conditions.
  - **Filter:** Extracts entries that fulfill the conditions.
  - **Add:** Introduces a new field to entries that match the conditions.
  - **Rename:** Alters the name of fields that meet the conditions.
  - **Concat:** Merges fields that satisfy the conditions.

  > **_TIP:_** To introduce operations not present in the UI, craft a new class adhering to the `Operation` interface and integrate it into the `OperationFactory` class.


### Condition
Conditions are functions that evaluate input data and return a boolean result. They consist of:

  - **Field:** This is the key in the input data that will be used to compare with the value.
  - **Comparator:** This is the comparator that will be used to compare the field with the value. The available comparators are:
    - Equals
    - Not Equals
    - Greater Than
    - Greater Than or Equals
    - Less Than
    - Less Than or Equals
    - Empty
    - Not Empty
    - Contains
    - Not Contains
  - **Value:** This is the value that will be used to compare with the field.


### Create a new filter
Users can seamlessly introduce a new filter by selecting the "Add Filter" button, either adjacent to the data source or between existing filters.
  
