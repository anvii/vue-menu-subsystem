# Vue menu subsystem

This is a small vue3-based library designed to create various menus on web sites. It includes horizontally and vertically oriented menus, sub-menus and context menu. The library is very simple and customizable.

It was originally developed for desktop application. Support for mobile devices currently is not planned.

## Code example

```js
<g-menu>
  <g-menu-item label="New" />
  <g-menu-item label="Open" />
  <g-menu-item label="Open recent">
    <g-menu>
      <g-menu-item label="Project 1" />
      <g-menu-item label="Project 2" />
      <g-menu-item label="Project 3" />
    </g-menu>
  </g-menu-item>
  <g-menu-item label="Save" />
  <hr />
  <g-menu-item label="Close (disabled)" disabled />
</g-menu>
```

## Demo

https://anvii.github.io/menu/
