"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={title:""},l="Project Structure",u={unversionedId:"sdlc/project-structure",id:"sdlc/project-structure",title:"",description:"The Project Structure of a project is the file and directory structure of the project which revolves around the entity files. It contains the required maven poms and maven plugins to run the build for that project.",source:"@site/../docs/sdlc/project-structure.md",sourceDirName:"sdlc",slug:"/sdlc/project-structure",permalink:"/docs/sdlc/project-structure",draft:!1,tags:[],version:"current",frontMatter:{title:""}},s={},d=[{value:"Update Project Structure",id:"update-project-structure",level:2},{value:"Project Structure 11",id:"project-structure-11",level:2},{value:"Entity Tests and Validation",id:"entity-tests-and-validation",level:3},{value:"File Generation Plugin",id:"file-generation-plugin",level:2},{value:"Service Execution Plugin",id:"service-execution-plugin",level:2},{value:"Model Generation Plugin",id:"model-generation-plugin",level:2},{value:"Version Entity Plugin",id:"version-entity-plugin",level:2}],p={toc:d};function g(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Structure")," of a project is the file and directory structure of the project which revolves around the entity files. It contains the required maven poms and maven plugins to run the build for that project."),(0,a.kt)("p",null,"This project structure adds new features and bug fixes through these files. Therefore to stay up to date with the latest features and bug fixes, it is recommended to stay relatively up to date."),(0,a.kt)("h2",{id:"update-project-structure"},"Update Project Structure"),(0,a.kt)("p",null,"You can update to the latest project structure through the configuration editor.\nBelow we are updating from project structure 0.0 to 11.1."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Structure 0",src:r(7304).Z,width:"2126",height:"1246"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Structure 11",src:r(7435).Z,width:"2474",height:"948"})),(0,a.kt)("h2",{id:"project-structure-11"},"Project Structure 11"),(0,a.kt)("p",null,"Project Structure 11 introduced a variety of new features that run as part of your project pipeline."),(0,a.kt)("h3",{id:"entity-tests-and-validation"},"Entity Tests and Validation"),(0,a.kt)("p",null,"Validates all elements in your project.\nRuns all service and mapping tests defined in your project."),(0,a.kt)("h2",{id:"file-generation-plugin"},"File Generation Plugin"),(0,a.kt)("p",null,"Generates files defined in your file generations through the generation specification."),(0,a.kt)("h2",{id:"service-execution-plugin"},"Service Execution Plugin"),(0,a.kt)("p",null,"Generates an executable jar creating executable classes for ",(0,a.kt)("strong",{parentName:"p"},"each")," service defined in your project. This jar can be consumed by adding it as a dependency to your java project."),(0,a.kt)("p",null,"You can view the generated jar in your build pipeline after every commit."),(0,a.kt)("p",null,"From the build panel, you can view all your builds. Clicking on one will take you to the associated pipeline in gitlab. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Executable Service  - Builds",src:r(8983).Z,width:"1634",height:"1322"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Executable Service  - Pipeline",src:r(6075).Z,width:"2074",height:"1240"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Executable Service  - Build",src:r(7187).Z,width:"1444",height:"1166"})),(0,a.kt)("p",null,"Generated Service Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\npackage org.finos.legend.servicestest.test.domain;\n\nimport org.finos.legend.engine.language.pure.dsl.service.execution.AbstractServicePlanExecutor;\nimport org.finos.legend.engine.plan.execution.result.Result;\nimport org.finos.legend.engine.shared.core.url.StreamProvider;\n\npublic class MyTestService extends AbstractServicePlanExecutor\n{\n    public MyTestService()\n    {\n        super("domain::MyTestService", "plans/org/finos/servicestest/test/domain/MyTestService.json", false);\n    }\n\n    public Result execute(String state)\n    {\n        return execute(state, null);\n    }\n\n    public Result execute(String state, StreamProvider streamProvider)\n    {\n        return newSingleParameterExecutionBuilder("state", state).withStreamProvider(streamProvider).execute();\n    }\n}\n\n')),(0,a.kt)("h2",{id:"model-generation-plugin"},"Model Generation Plugin"),(0,a.kt)("p",null,"Generates additional entities defined by your model generation elements. These entities are included in the entities jar generated as part of the build."),(0,a.kt)("h2",{id:"version-entity-plugin"},"Version Entity Plugin"),(0,a.kt)("p",null,"Generates a versioned entities jar for all the entities in your project."))}g.isMDXComponent=!0},7187:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/legend-artifacts-cd332ba885da24e2c4775ac68a69eec4.png"},8983:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/legend-builds-daae2594747db2585f93af9dbf5352a3.png"},6075:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/legend-pipeline-fe43203852d74df2cf160693642200cd.png"},7304:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/project-structure-0-e89daaff7c17f4c8b02dde1456c05e4b.png"},7435:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/project-structure-11-a0aa9c5d66ab10c5b8e0620961d3436b.png"}}]);