const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  
  const { data } = await graphql(`
    query GetLatestProjectSlugs {
      allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
        nodes {
          id
          frontmatter {
            slug 
          }
        }
      }
    }    
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  });

};