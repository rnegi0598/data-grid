## App Deployment link [Data-Grid-App](https://data-grid-delta.vercel.app/)
## Features

1. Navigation Across Multiple Tables     
    Users can navigate between different tables, such as Users, Posts, and Comments.    
    Navigation controls allow users to switch between tables seamlessly. 

2.  Search/Filter    
    Users can perform global search/filter across the entire table.  
    Search results are displayed, highlighting the matched values.  
    Users can also filter within a specific category, narrowing down the search results.

3. Pagination  
    Users can navigate through multiple pages of data.  
    Pagination controls allow users to easily move to the next or previous page.  
    The current page number and total number of pages are displayed to provide context.

4. Sortable Columns  
    All columns in the table data are sortable.  
    Users can click on a column header to sort the data in ascending or descending order.  
    Only one column can be sorted at a time, multiple column sorting is not supported.

5. Responsiveness  
    The app is designed to be responsive and compatible with various devices and screen sizes.  
    The layout and components adapt to different viewport sizes, ensuring a consistent user experience.

6. Data Caching with RTK Query   
    Data fetched from APIs is cached using RTK Query.  
    Cached data improves performance and reduces unnecessary network requests.  
    Users can enjoy faster data retrieval and a smoother user experience.

## Project Structure

```
├── src
│   ├── assets
│   │   └── arrowDown.svg
│   │   └── arrowUp.svg
│   │   └── noResults.png
│   ├── components
│   │   └── loading
│   │   |   └── Loading.jsx
│   │   |   └── loading.scss
│   │   ├── datagrid
│   │   |   └── DataGrid.jsx
│   │   |   └── datagrid.scss
│   │   |   └── usersTable.jsx
│   │   |   └── PostsTable.jsx
│   │   |   └── CommentsTable.jsx
│   │   ├── navbar
│   │   |   └── Navbar.jsx
│   │   |   └── navbar.scss
│   │   ├── noMatchFound
│   │   |   └── NoMatchFound.jsx
│   │   |   └── noMatchFound.scss
│   │   └── pagination
│   │   |   └── Pagination.jsx
│   │   |   └── pagination.scss
│   │   └── searchbar
│   │   |   └── SearchBar.jsx
│   │   |   └── searchbar.scss
│   │   └── table
│   │   |   └── Table.jsx
│   │   |   └── table.scss
│   │   |   └── TableData.jsx
│   │   |   └── tableData.scss
│   │   |   └── TableHeader.jsx
│   │   |   └── tableHeader.scss
│   │   |   └── TableHeaderItem.jsx
│   ├── services
│   │   └── jsonplaceholder.js
│   ├── App.jsx
│   ├── App.scss
│   ├── index.jsx
│   ├── index.css
│   └── store.js
├── public
│   ├── index.html
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
