import FancyParagraph from './FancyParagraph'
import FancyParagraphComponent from './FancyParagraphComponent'
import FancyParagraphConverter from './FancyParagraphConverter'

export default {
  name: 'fancy-paragraph',
  configure: function(config) {
    config.addNode(FancyParagraph)
    config.addComponent(FancyParagraph.type, FancyParagraphComponent)
    config.addConverter('html', FancyParagraphConverter)
    config.addTextType({
      name: 'fancy-paragraph',
      data: {type: 'fancy-paragraph'}
    })
    config.addLabel('fancy-paragraph', {
      en: 'Fancy Paragraph',
      de: 'Fancy Paragraph'
    })
    config.addLabel('fancy-paragraph.content', {
      en: 'Fancy Paragraph',
      de: 'Fancy Paragraph'
    })
  },
  FancyParagraph: FancyParagraph,
  FancyParagraphComponent: FancyParagraphComponent,
  FancyParagraphConverter: FancyParagraphConverter
}
