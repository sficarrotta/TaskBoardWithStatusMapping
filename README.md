TaskKanban
=========================

## Overview
This app has a board for tasks.  It assumes the existence of a custom drop down field 
with a display name of "Task Status" and values of "New", "In Dev", "In QA", "Completed". 
The mapping to Task states looks like this:

    "New" : "Defined",
    "In Dev" : "In-Progress",
    "In QA" : "In-Progress",
    "Completed" : "Completed"
    
## How to Modify

To use a different field name, changed the value of "mappedFromField". To change the 
drop down values and/or mappings change the fieldNameMap appropriately.

The task cards show FormattedID, WorkProduct, Estimate, and ToDo. Change the cardConfig 
Fields to change which

This app respects project scope and looks for the existence of a release or iteration 
time box on the page. If either of those exist it will respect the setting.

Screenshot
----------

![Rally Tree Grid Screenshot](https://github.com/sficarrotta/task_kanban/tree/master/deploy/TaskStatusMapped.png)

## License

AppTemplate is released under the MIT license.  See the file [LICENSE](https://raw.github.com/RallyApps/AppTemplate/master/LICENSE) for the full text.
