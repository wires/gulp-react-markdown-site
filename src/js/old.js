// <div id="left">
//   <!-- Nested node template -->
//   <script type="text/ng-template" id="nodes_renderer.html">
// 
//     <a ui-tree-handle ng-click="nav(node)">{{node.label}}</a>
// 
//     <ul class="subtree" ui-tree-nodes="" ng-model="node.nodes">
//       <li ng-repeat="node in node.nodes" ui-tree-node ng-include="'nodes_renderer.html'">
//       </li>
//     </ul>
// 
//   </script>
//   <nav ui-tree data-drag-enabled="false">
//     <ul ui-tree-nodes="" ng-model="index.nodes" id="tree-root">
//       <li ng-repeat="node in index.nodes" ui-tree-node ng-include="'nodes_renderer.html'"></li>
//     </ul>
//   </nav>
// </div>
// 
// <div id="content" ng-include="selected">
//   &nbsp;
// </div>
// 
// <div id="meta">
//     <div id="project" ng-show="meta.project">
//         {{meta.project}}
//     </div>
// 
//     <div id="tech">
//         <div ng-repeat="t in meta.tech">{{t}}</span>
//     </div>
// 
//     <pre ng-show="meta">{{meta|json}}</pre>
// </div>