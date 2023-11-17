module.exports = {
  rules: {
    "no-bad-imports": {
      create: function (context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "file/bad-import") {
              context.report({
                node,
                message: "Do not use bad imports",
              });
            }
          },
        };
      },
    },
  },
};
