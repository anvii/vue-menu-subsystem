# API

The Menu Subsystem consists of four Vue components

## GMenuItem

### Props
- label - Text label for menu item
- disabled - Disabled item
- keep-menu - Don't close menu when menu item is pressed
- trigger - Open submenu by `hover` or by `click` events

### Slots
- default - Placeholder for content next to label
- icon - Placeholder an icon at left side of menu item

## GMenu

### Slots
- default - placeholder for menu items

## GMenuBar

GMenuBar is horizontally-oriented GMenu.

### Slots
- default - placeholder for menu items

## GContextMenu

### Props

- autohide - Close when mouse leaves the menu

### Slots
- default - placeholder for menu items

