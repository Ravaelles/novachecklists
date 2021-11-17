# Laravel Nova Checklist Field

[![Latest Version on Packagist](https://img.shields.io/packagist/v/Ravaelles/novachecklists.svg)](https://packagist.org/packages/Ravaelles/novachecklists)
[![License](https://img.shields.io/packagist/l/Ravaelles/novachecklists.svg)](https://packagist.org/packages/Ravaelles/novachecklists)
[![Total Downloads](https://img.shields.io/packagist/dt/Ravaelles/novachecklists.svg)](https://packagist.org/packages/Ravaelles/novachecklists)

Ravaelles is a webdevelopment team based in Oslo, Norway. You'll find more information about us [on our website](https://Ravaelles.no).

This package is made to allow you to easily create checklists in Laravel Nova. All you need is a text/json column on you model to store the items.

## Installation

You can install the package via composer:


```bash
composer require Ravaelles/novachecklists
```

## Usage


```php
use Ravaelles\NovaChecklist\Checklist;

Checklist::make('Tasks')
    ->placeholder('Add another task')   // Defaults to "Add item"
    ->withPlaceholderCount()            // Not active by default
    ->logUsers()                        // Not active by default, accepts user-model column. Uses "name" when column isn't provided.
    ->showTimestamps()                  // Not active by default
    ->showItemStatusOnIndex()           // Not active by default
    ->showCompletionOnIndex(),          // Not active by default
```

To use this package you'll need a text or JSON column on you model to save the items/tasks, as they are persisted as json on your model.

### Form-page
The `->placeholder()` method allows you to specify your placeholder-text for the "add new item field".

The `->withPlaceholderCount()` method lets you show the item number when adding new item. If there is already 5 items, then it will say "Add item 6".

The `->logUsers()` method allows you to save which user created or completed the task/item. You specify which column on the User model you want to save on task, it default to use the "name" column.


![Checklist-form-page](https://raw.githubusercontent.com/e2-consult/novachecklists/master/form-add.png)

You can edit an existing item by clicking on it.

![Checklist-form-page](https://raw.githubusercontent.com/e2-consult/novachecklists/master/form-edit.png)

### Detail-page

The `->showTimestamps()` method lets you show how long ago a task was completed.

![Checklist-detail-page](https://raw.githubusercontent.com/e2-consult/novachecklists/master/detail.png)

### Index-page
By default this package will only show the task count on the index page.

The `->showItemStatusOnIndex()` will change the index to show how many tasks are completed of the total amount of tasks/items.

The `->showCompletionOnIndex()` method will let you show how many percent of the tasks are completed.

![Checklist-detail-page](https://raw.githubusercontent.com/e2-consult/novachecklists/master/index.png)

```php
use Ravaelles\NovaChecklist\Checklist;

Checklist::make('Tasks')
    ->placeholder('Add task ')
    ->withPlaceholderCount()
    ->logUsers()
    ->showTimestamps()
    ->showItemStatusOnIndex()
    ->showCompletionOnIndex(),
```

## License

The MIT License (MIT).
