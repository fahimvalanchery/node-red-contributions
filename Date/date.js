module.exports = function(RED) {
  function UpperCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    function date(msg) {
      var date = new Date(msg.payload);
      msg.payload = date.toString();
      node.send(msg);
    }

    node.on("input", function(msg) {
      date(msg);
    });
  }
  RED.nodes.registerType("date", UpperCaseNode);
};
