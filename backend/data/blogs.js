const blogs = [
	{
		topic: "Interview Prep",
		topicDescription: "Interview Prep for Software Developers",
		id: "1",
		articles: [
			{
				title: "Binary Tree Traversals",
				articleId: "1",
				description: "Understand and code the fundemental tree traversals",
				text: "Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.\nDepth First Traversals: (a) Inorder (Left, Root, Right) : 4 2 5 1 3 (b) Preorder (Root, Left, Right) : 1 2 4 5 3 (c) Postorder (Left, Right, Root) : 4 5 2 3 1 Breadth-First or Level Order Traversal: 1 2 3 4 5 Please see this post for Breadth-First Traversal.",
			},
		],
	},
];

module.exports = blogs;
