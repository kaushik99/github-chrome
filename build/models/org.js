// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Org = (function(_super) {
    __extends(Org, _super);

    function Org() {
      _ref = Org.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Org.prototype.url = function() {
      return "https://api.github.com/orgs";
    };

    return Org;

  })(Backbone.Model);

}).call(this);
