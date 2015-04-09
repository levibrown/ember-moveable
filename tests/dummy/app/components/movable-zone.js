import movableZone from 'ember-movable/components/movable-zone';

export default movableZone.extend({
  onUpdate(e) {
    alert(`Object: ${e}`);
  }
});
