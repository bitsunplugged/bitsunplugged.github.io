"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[259],{3259:function(t,l,e){e.r(l),e.d(l,{Node:function(){return h},TreeLogger:function(){return s},default:function(){return d}});var i=e(9439),n=e(5671),r=e(3144),o=e(8121),u=e.n(o),h=function(){function t(){(0,n.Z)(this,t),this.data=null,this.leftChild=null,this.rightChild=null,this.parent=null,this.direction=null,this.count=1,this.color=t.RED,this.nodePath=""}return(0,r.Z)(t,[{key:"recolor",value:function(){this.color===t.RED?this.color=t.BLACK:this.color=t.RED}},{key:"isRoot",get:function(){return null==this.parent}},{key:"grandParent",get:function(){return this.isRoot?null:this.parent.parent}},{key:"uncle",get:function(){var t=this.grandParent;return this.isRoot||null==t?null:t.leftChild===this.parent?t.rightChild:t.leftChild}}],[{key:"ROOT",get:function(){return"ROOT"}},{key:"LEFT",get:function(){return"LEFT"}},{key:"RIGHT",get:function(){return"RIGHT"}},{key:"INCREMENT",get:function(){return"INCREMENT"}},{key:"DECREMENT",get:function(){return"DECREMENT"}},{key:"RED",get:function(){return"RED"}},{key:"BLACK",get:function(){return"BLACK"}}]),t}(),d=function(){function t(){(0,n.Z)(this,t),this.root=null,this.nodeMap={},this.logger=new s}return(0,r.Z)(t,[{key:"getNode",value:function(t){if(null==t||"null"===t)return null;var l=this.nodeMap[t];return"undefined"===typeof l?null:l}},{key:"compile",value:function(){var t={};return this.compileNode(this.root,t,0),t}},{key:"compileNode",value:function(t,l,e){var i=e.toString();void 0===l[i]&&(l[i]=[]),null!=t&&(l[i].push(t.id),this.compileNode(t.leftChild,l,e+1),this.compileNode(t.rightChild,l,e+1))}},{key:"fix",value:function(t){for(;this.fixNodes(t,this.root););this.updateNodePaths(this.root,"")}},{key:"fixNodes",value:function(t,l){var e=this.fixNode(t,l),i=null!=l.leftChild&&this.fixNodes(t,l.leftChild),n=null!=l.rightChild&&this.fixNodes(t,l.rightChild);return e||i||n}},{key:"fixNode",value:function(t,l){if(null==l||l.color!==h.RED)return!1;var e=l.parent,i=l.grandParent,n=l.uncle;if(l.isRoot&&l.color===h.RED)return this.logger.log(t,s.ERROR,l.id,null,null,1),l.recolor(),this.logger.log(t,s.RECOLOR,l.id,null,null,l.color),!0;if(e.color===h.BLACK)return!1;if(null!=n&&n.color===h.RED)return this.logger.log(t,s.ERROR,l.id,null,null,2),e.recolor(),this.logger.log(t,s.RECOLOR,e.id,null,null,e.color),i.recolor(),this.logger.log(t,s.RECOLOR,i.id,null,null,i.color),n.recolor(),this.logger.log(t,s.RECOLOR,n.id,null,null,n.color),!0;if(null==n||n.color===h.BLACK){if(e.color===h.RED&&e.direction!==l.direction)return this.logger.log(t,s.ERROR,l.id,null,null,3),l.direction===h.LEFT?(this.logger.log(t,s.ROTATE,e.id,null,h.RIGHT,null),this.rotateRight(e)):(this.logger.log(t,s.ROTATE,e.id,null,h.LEFT,null),this.rotateLeft(e)),!0;if(e.color===h.RED&&e.direction===l.direction)return this.logger.log(t,s.ERROR,l.id,null,null,4),l.direction===h.LEFT?(this.logger.log(t,s.ROTATE,i.id,null,h.RIGHT,null),this.rotateRight(i)):(this.logger.log(t,s.ROTATE,i.id,null,h.LEFT,null),this.rotateLeft(i)),i.recolor(),this.logger.log(t,s.RECOLOR,i.id,null,null,i.color),e.recolor(),this.logger.log(t,s.RECOLOR,e.id,null,null,e.color),!0}return!1}},{key:"updateNodePaths",value:function(t,l){if(null!=t){var e="";if(t.isRoot)e="";else e=l+(t.direction==h.LEFT?"L":"R");t.nodePath=e,this.updateNodePaths(t.leftChild,e),this.updateNodePaths(t.rightChild,e)}}},{key:"rotateLeft",value:function(t){var l=t.rightChild,e=t.parent,i=t.direction,n=l.leftChild;t.isRoot&&(this.root=l),t.parent=l,t.direction=h.LEFT,t.rightChild=n,null!=n&&(n.parent=t),l.parent=e,l.direction=i,l.leftChild=t,null!=e&&(i==h.LEFT?e.leftChild=l:e.rightChild=l),this.updateNodePaths(this.root,"")}},{key:"rotateRight",value:function(t){var l=t.leftChild,e=t.parent,i=t.direction,n=l.rightChild;t.isRoot&&(this.root=l),t.parent=l,t.direction=h.RIGHT,t.leftChild=n,null!=n&&(n.parent=t),l.parent=e,l.direction=i,l.rightChild=t,null!=e&&(i==h.LEFT?e.leftChild=l:e.rightChild=l),this.updateNodePaths(this.root,"")}},{key:"print",value:function(){this.printSubtree(this.root)}},{key:"printSubtree",value:function(t){null!=t&&(this.printSubtree(t.leftChild),this.printSubtree(t.rightChild))}},{key:"lookup",value:function(t,l){this.logger.createEvent(t),null==this.bstLookup(t,this.root,l)&&this.logger.log(t,s.NOT_FOUND,null,null,null,l)}},{key:"bstLookup",value:function(t,l,e){if(null==l)return null;if(this.logger.log(t,s.LOOK,l.id,null,null,null),l.data===e)return this.logger.log(t,s.FOUND,l.id,null,null,e),l.id;if(e<l.data){var i=this.bstLookup(t,l.leftChild,e);if(null!=i)return i}else{var n=this.bstLookup(t,l.rightChild,e);if(null!=n)return n}return null}},{key:"insert",value:function(t,l){this.logger.createEvent(t);this.bstInsert(t,this.root,l);this.fix(t)}},{key:"bstInsert",value:function(t,l,e){if(null==l){var i=this.insertAt(l,h.ROOT,e);return this.logger.log(t,s.INSERT,i,null,h.ROOT,e),i}if(this.logger.log(t,s.LOOK,l.id,null,null,null),l.data===e){this.logger.log(t,s.COMPARE,l.id,null,null,null);i=this.insertAt(l,h.INCREMENT,e);return this.logger.log(t,s.INSERT,i,l.id,h.INCREMENT,e),l.count+=1,i}if(l.data>e){if(null==l.leftChild){i=this.insertAt(l,h.LEFT,e);return this.logger.log(t,s.INSERT,i,l.id,h.LEFT,e),i}return this.bstInsert(t,l.leftChild,e)}if(null==l.rightChild){i=this.insertAt(l,h.RIGHT,e);return this.logger.log(t,s.INSERT,i,l.id,h.RIGHT,e),i}return this.bstInsert(t,l.rightChild,e)}},{key:"insertAt",value:function(t,l,e){if(l===h.INCREMENT)return t.count+=1,null;var i=new h;i.data=e,i.parent=t;var n="id"+e.toString();i.id=n,i.direction=l,this.nodeMap[n]=i;null==t||t.id;return l===h.ROOT?this.root=i:l===h.LEFT?(i.nodePath=t.nodePath+"L",t.leftChild=i):l===h.RIGHT&&(i.nodePath=t.nodePath+"R",t.rightChild=i),n}},{key:"delLookUP",value:function(t,l,e,i){if(null==l)return null;if(this.logger.log(t,s.LOOK,l.id,null,null,null),l.data===e){var n=l.id;return null!=i?this.logger.log(t,s.DELETE,l.id,i.id,h.DECREMENT,e):this.logger.log(t,s.DELETE,l.id,null,h.DECREMENT,e),this.deleteAt(l,i),n}if(e<l.data){var r=this.delLookUP(t,l.leftChild,e,l);if(null!=r)return r}else{var o=this.delLookUP(t,l.rightChild,e,l);if(null!=o)return o}return null}},{key:"deleteAt",value:function(t,l){t.count-=1,this.nodeMap[t.id]=t;var e=t.id;if(t.count>0)return t.id;if(null==t.rightChild)null==t.parent?this.root=t.leftChild:t==t.parent.leftChild?t.parent.leftChild=t.leftChild:t.parent.rightChild=t.leftChild;else if(null==t.leftChild)null==t.parent?this.root=t.rightChild:t==t.parent.leftChild?t.parent.leftChild=t.rightChild:t.parent.rightChild=t.rightChild;else{for(var i=t.rightChild;null!=i.leftChild;)i=i.left;i.parent==t?null!=i.rightChild&&(i.rightChild.parent=t):null!=i.rightChild&&(i==i.parent.leftChild?i.parent.leftChild=i.rightChild:i.parent.rightChild=i.rightChild),t.color=i.color,e=i.id,t.data=i.data,this.nodeMap[t.id]=t}this.nodeMap[e]=null}},{key:"delete",value:function(t,l){this.logger.createEvent(t),null==this.delLookUP(t,this.root,l,null)&&this.logger.log(t,s.NOT_FOUND,null,null,null,l)}},{key:"getSnapshotFromDiff",value:function(t){var l=this.snapshot(),e=t.split(":"),n=(0,i.Z)(e,5),r=n[0],o=n[1],u=n[2],d=n[3],g=n[4],a=l.getNode(o),f=l.getNode(u);switch(r){case s.LOOK:break;case s.INSERT:l.insertAt(f,d,g);break;case s.DELETE:l.deleteAt(a,f);break;case s.ROTATE:d==h.LEFT?l.rotateLeft(a):l.rotateRight(a);break;case s.ERROR:break;case s.RECOLOR:a.recolor()}return l}},{key:"snapshot",value:function(){return u()(this)}},{key:"getPathMap",value:function(){var t={};return this.getPathMapRecursive(this.root,t),t}},{key:"getPathMapRecursive",value:function(t,l){if(null==t)return l;var e=t.leftChild,i=t.rightChild;null!=e&&(l[t.id+e.id]={from:t.id,to:e.id},this.getPathMapRecursive(t.leftChild,l));null!=i&&(l[t.id+i.id]={from:t.id,to:i.id},this.getPathMapRecursive(t.rightChild,l))}}]),t}(),s=function(){function t(){(0,n.Z)(this,t),this.logs={}}return(0,r.Z)(t,[{key:"createEvent",value:function(t){this.logs[t]=[]}},{key:"printJob",value:function(t){console.log(this.logs[t])}},{key:"log",value:function(t,l,e,i,n,r){var o=this.logs[t],u=null==e?"null":String(e),h=null==i?"null":String(i),d=null==n?"null":String(n),s=null==r?"null":String(r);o.push(l+":"+u+":"+h+":"+d+":"+s)}},{key:"getLogs",value:function(t){return this.logs[t]}}],[{key:"LOOK",get:function(){return"LOOK"}},{key:"NOT_FOUND",get:function(){return"NOT_FOUND"}},{key:"FOUND",get:function(){return"FOUND"}},{key:"COMPARE",get:function(){return"COMPARE"}},{key:"INSERT",get:function(){return"INSERT"}},{key:"DELETE",get:function(){return"DELETE"}},{key:"ROTATE",get:function(){return"ROTATE"}},{key:"ERROR",get:function(){return"ERROR"}},{key:"RECOLOR",get:function(){return"RECOLOR"}}]),t}()}}]);
//# sourceMappingURL=259.99145be1.chunk.js.map