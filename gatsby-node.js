const path = require('path')
const fs = require('fs-extra')

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
      projectList:allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      blogList:allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }    
  `);

  data.projectList.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  });
  data.blogList.nodes.forEach(node => {
    actions.createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blogpost-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  });


};

exports.onPostBuild = () => {
  console.log('Copying locales...');
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  )
};
