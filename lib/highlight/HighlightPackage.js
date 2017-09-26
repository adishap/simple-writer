import Highlight from './Highlight'
import HighlightConverter from './HighlightConverter'
import {AnnotationCommand} from 'substance'
import HighlightComponent from './HighlightComponent'
import {AnnotationTool} from 'substance'
import {platform} from 'substance'

export default {
  name: 'highlight',
  configure: function(config, {toolGroup, disableCollapsedCursor}) {
    config.addNode(Highlight)
    config.addConverter('html', HighlightConverter)
    config.addComponent('highlight', HighlightComponent)

    config.addCommand('highlight', AnnotationCommand, {
      nodeType: 'highlight',
      disableCollapsedCursor
    })
    config.addTool('highlight', AnnotationTool, {
      toolGroup: toolGroup || 'annotations'
    })
    config.addIcon('highlight', { 'fontawesome': 'fa-star' })
    config.addLabel('highlight', {
      en: 'highlight',
      de: 'Fett'
    })
    if (platform.isMac) {
      config.addKeyboardShortcut('cmd+h', { command: 'highlight' })
    } else {
      config.addKeyboardShortcut('ctrl+h', { command: 'highlight' })
    }
  },
  Highlight: Highlight,
  HighlightConverter: HighlightConverter
}
