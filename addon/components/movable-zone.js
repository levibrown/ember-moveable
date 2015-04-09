import Ember from 'ember';
import layout from '../templates/components/movable-zone';

export default Ember.Component.extend({
  layout: layout,

  didInsertElement() {
    this.get('moveInit'); 
  },

  moveInit: Ember.computed(function(){
    Sortable.create(this.get('movableElement'), this.get('options'))
  }),

  movableElement: Ember.computed(function(){
    let zoneId = this.get('zone-id') || "zone"
    return this.$(`#${zoneId}`)[0]
  }),

  options: Ember.computed(function(){
    return {
      group:             this.get('group')             || "default", // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
      sort:              this.get('sort')              || true,      // sorting inside list
      disabled:          this.get('disabled')          || false,     // Disables the sortable if set to true.
      animation:         this.get('animation')         || 300,       // ms, animation speed moving items when sorting, `0` — without animation
      handle:            this.get('handle')            || null,      // Drag handle selector within list items
      filter:            this.get('filter')            || ".ignore", // Selectors that do not lead to dragging (String or Function)
      draggable:         this.get('draggable')         || ".item",   // Specifies which items inside the element should be sortable
      ghostClass:        this.get('ghostClass')        || "ghost",   // Class name for the drop placeholder
      scroll:            this.get('scroll')            || true,      // or HTMLElement
      scrollSensitivity: this.get('scrollSensitivity') || 30,        // px, how near the mouse must be to an edge to start scrolling.
      scrollSpeed:       this.get('scrollSpeed')       || 10,        // px
      store:             this.get('store')             || null,      // set property in a extend
      setData:           this.get('setData')           || null,      // set property in a extend
      onStart:           this.get('onStart')           || null,      // set property in a extend
      onEnd:             this.get('onEnd')             || null,      // set property in a extend
      onAdd:             this.get('onAdd')             || null,      // set property in a extend
      onUpdate:          this.get('onUpdate')          || null,      // set property in a extend
      onSort:            this.get('onSort')            || null,      // set property in a extend
      onRemove:          this.get('onRemove')          || null,      // set property in a extend
      onFilter:          this.get('onFilter')          || null       // set property in a extend
    }
  })

});
