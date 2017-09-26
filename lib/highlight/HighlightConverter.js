/*
 * HTML converter for Strong.
 */
export default {

  type: "highlight",
  tagName: 'span',

  matchElement: function(el) {
    return el.is('span[data-type="highlight"]')
  },

  /**
    Extract comment string from the data-comment attribute
  */
  import: function(el, node) {
    node.content = el.attr('data-highlight')
  }
}
