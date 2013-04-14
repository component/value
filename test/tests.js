
var assert = require('component-assert');
var dom = require('component-dom');
var value = require('value');

describe('text inputs', function(){
  it('should be supported', function(){
    var el = dom('<input type="text">');
    value(el.get(0), 'Hello');
    assert('Hello' == el.attr('value'));
    assert('Hello' == value(el.get(0)));
  })
})

describe('textareas', function(){
  it('should be supported', function(){
    var el = dom('<textarea>');
    value(el.get(0), 'Hello');
    assert('Hello' == el.get(0).value);
    assert('Hello' == value(el.get(0)));
  })
})

describe('checkboxes', function(){
  it('should check when true', function(){
    var el = dom('<input type="checkbox">');

    value(el.get(0), true);;
    assert('checked' == el.attr('checked'));
    assert(true === value(el.get(0)));
  })

  it('should uncheck when false', function(){
    var el = dom('<input type="checkbox" checked="checked">');

    value(el.get(0), false);
    assert(null == el.attr('checked'));
    assert(false === value(el.get(0)));
  })

  describe('with a value', function(){
    it('should return the value', function(){
      var el = dom('<input type="checkbox" value="accepted">');

      value(el.get(0), true);;
      assert('accepted' === value(el.get(0)));
    })
  })
})
