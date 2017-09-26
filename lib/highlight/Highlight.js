import { PropertyAnnotation, Fragmenter } from 'substance'

class Highlight extends PropertyAnnotation {}

Highlight.type = "highlight"

// a hint that makes in case of overlapping annotations that this
// annotation gets fragmented more often
Highlight.fragmentation = Fragmenter.ANY

export default Highlight
