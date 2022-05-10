const path = require('path')
const fs = require('fs-extra')

const i18n = require('i18next')
const i18nOptions = require('./i18n.json');

console.log(`Current language array: ${i18nOptions.supportedLngs} and the namespaces ${i18nOptions.ns}`);
i18n.init(i18nOptions);
for (let ln of i18nOptions.supportedLngs) {
  for (let ns of i18nOptions.ns) {
    console.log(`Trying to import the language ressource ${ln} - ${ns}`);
    if (fs.existsSync(`./src/locales/${ln}/${ns}.json`)) {
      const currentResource = JSON.parse(fs.readFileSync(`./src/locales/${ln}/${ns}.json`, 'utf-8'));
      i18n.addResourceBundle(ln, ns, currentResource);
    }
  }
}

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
