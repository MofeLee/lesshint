'use strict';

module.exports = {
    name: 'attributeQuotes',
    nodeTypes: ['simpleSelector'],
    message: 'Attribute selectors should use quotes.',

    lint: function attributeQuotesLinter (config, node) {
        var selector = node.first('attribute');
        var value;

        // Bail if no attribute selectors are found or if there's no value to check
        if (!selector || !selector.contains('attributeSelector')) {
            return;
        }

        // Try and find a string
        value = selector.first('string');

        if (!value) {
            value = selector.last('ident');

            return [{
                column: value.start.column,
                line: value.start.line,
                message: this.message
            }];
        }
    }
};
