"use strict";(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[544],{9357:function(e,t,a){var n=a(7294),r=a(5414),l=a(1082);function s(e){let{description:t,lang:a,meta:s,title:i}=e;const{site:c}=(0,l.useStaticQuery)("63159454"),m=t||c.siteMetadata.description;return n.createElement(r.Z,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(s)})}s.defaultProps={lang:"en",meta:[],description:""},t.Z=s},5769:function(e,t,a){a.r(t);var n=a(1721),r=a(7294),l=a(1082),s=a(396),i=a(5433),c=a(9357);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,{currentPage:n,numPages:m}=this.props.pageContext,o=1===n,p=n===m,g=n-1==1?"/":"../"+(n-1),u="../"+(n+1);return r.createElement(i.Z,null,r.createElement(c.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),r.createElement("div",{className:"content-box clearfix"},a.map((e=>{let{node:t}=e;return r.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&r.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail"},r.createElement(s.G,{image:t.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",key:t.frontmatter.img.childImageSharp.gatsbyImageData.src,alt:""})),r.createElement("div",{className:"post-content"},r.createElement("h2",{className:"post-title"},r.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)),r.createElement("p",null,t.excerpt),r.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),r.createElement("div",{className:"container"},r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("ul",null,!o&&r.createElement("p",null,r.createElement(l.Link,{to:g,rel:"prev",className:"newer-posts"},"← Previous Page")),r.createElement("p",null,r.createElement("span",{className:"page-number"},"Page ",n," of ",m)),!p&&r.createElement("p",null,r.createElement(l.Link,{to:u,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(r.Component);t.default=m}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-17ad9c3e190b0c89174d.js.map