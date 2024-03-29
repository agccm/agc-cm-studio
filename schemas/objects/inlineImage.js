export default {
    name: 'inlineImage',
    type: 'image',
    options: {hotspot: true},
    fields: [
      {
        type: 'text',
        name: 'alt',
        title: 'Alternative text',
        description: `Some of your visitors cannot see images, 
          be they blind, color-blind, low-sighted; 
          alternative text is of great help for those 
          people that can rely on it to have a good idea of 
          what\'s on your page.`,
        options: {
          isHighlighted: true
        }
      },
      {
        type: 'link',
        name: 'link',
        title: 'Link',
        description: `Make the image as link to specifield URL`,
        options: {
          isHighlighted: true
        }
      }
    ]
  }