# Initial Scroll Plugin

A JavaScript plugin that scrolls to the element with the ID specified in the URL hash on page load.

## Installation

To use this plugin, simply include the `initialScrollPlugin.js` file in your HTML file:

```html
<script src="initialScrollPlugin.js"></script>
```

## Usage

To use the plugin, call the `initialScrollPlugin()` function with an optional `offset` parameter:

```javascript
initialScrollPlugin({offset: 50})();
```

The `offset` parameter specifies the number of pixels to offset the scroll position by. By default, the offset is 0.

## Example

Here's an example of how to use the plugin:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Initial Scroll Plugin Example</title>
  </head>
  <body>
    <h1 id="heading">Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <script src="initialScrollPlugin.js"></script>
    <script>
      initialScrollPlugin()();
    </script>
  </body>
</html>
```

In this example, the plugin will scroll to the element with the ID `heading` on page load.

## License

This plugin is released under the MIT License.
