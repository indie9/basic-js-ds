const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  rootNode;
  constructor() {
    this.rootNode = null; // корень bst
  }
  
  root() {
   return this.rootNode;
  }


  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
        this.rootNode = newNode;
    } else {
         
        this.addNode(this.rootNode, newNode); // helper method below
    }
  }
  addNode(node, newNode) {
    
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.addNode(node.right, newNode);
        }
    }
  } 


  has( data ) {
    
    if (this.rootNode === null) {
        return false
    } else {
       return this.hasNode(this.rootNode, data); // helper method below
    }
  }
  hasNode(node, data) {
    if ( data == node.data){
      return true;
    }
    if (data < node.data) {
        if (node.left === null) {
            return false
        } else {
          return this.hasNode(node.left, data);
        }
    } else {
        if (node.right === null) {
            return false
        } else {
          return this.hasNode(node.right, data);
        }
    }
  }
  
  find( data ) {
    
    if (this.rootNode === null) {
        return this.rootNode;
    } else {
      return this.findNode(this.rootNode, data); // helper method below
    }
  }
  findNode(node, data) {
    if ( data === node.data){
      return node;
    }
    if (data < node.data) {
        if (node.left === null) {
            return null;
        } else {
          return this.findNode(node.left, data);
        }
    } else {
        if (node.right === null) {
            return null;
        } else {
          return  this.findNode(node.right, data);
        }
    }
  }

  
  min(){
    if(this.rootNode === null){null}
    return this.minNode(this.rootNode);
  }
  minNode(node) {
    
    if (node.left === null){
        return node.data;
    } else {
      return this.minNode(node.left)
    }
  }

  max(){
    if(this.rootNode === null){null}
    return this.maxNode(this.rootNode);
  }
  maxNode(node) {
    
    if (node.right === null){
        return node.data;
    } else {
      return this.maxNode(node.right)
    }
  }
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}


}


class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}
const BST = new BinarySearchTree();
BST.add(11); // establishes root node 
BST.add(7);
BST.add(9);
BST.add(3);
BST.add(15);
BST.add(4);
BST.add(2);
BST.add(8);
BST.add(5);
console.log(BST.find(7));
BST.remove(3);
console.log(BST.find(7));





module.exports = {
  BinarySearchTree
};