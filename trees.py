from collections import deque 

#full bt --> every node has 2 children or no children 
#complete bt --> every level, not possibly the last, is completely fil., all nodes in the la. lev. are as far left as possible 
#perfect bt --> all the non leaf nodes have 2 children
#balanced bt --> tree whose left and right subtrees heights differ by not more than 1 

#For trees: 
#Stacks/queues are often better than recursive because they involve a data structure - Amazon Engineer 

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#tree example 
root = TreeNode(3)
node2 = TreeNode(9)
node3 = TreeNode(20)
node4 = TreeNode(15)
node5 = TreeNode(7)
root.left = node2 
root.right = node3 
node3.left = node4
node3.right = node5 

# 102 O(N) time complexity --> because it has to go through every node to do a full traveral 
# regardless of the type of traversal that it is 

def levelOrder(root):
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            curr_queue_len = len(queue)
            level = [] #these are the sub lists that are added over time 
            for _ in range(curr_queue_len):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if level: 
                result.append(level)
        return result 
            

print(levelOrder(root))

#637 - average levels of bt O(N) time, O(W) space. BFS (queue)
def averageLevels(root):
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            curr_queue_len = len(queue)
            level_sum = 0 
            for _ in range(curr_queue_len):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level_sum / curr_queue_len)
        return result 

print(averageLevels(root))

#111  - we could use BFS to terminate the bt once it finds a leaf node. keep track of depth. 
def minDepth(root): 
    if not root:
        return 0
    queue = deque([root])
    depth = 0 
    while queue:
        depth += 1  
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

            if not node.left and not node.right: 
                return depth    
    return depth

def level_order_traversal_base(root): 
    if not root: 
        return 0 
    queue = deque([root])
    while queue: 
        for _ in range(len(queue)): 
            node = queue.popleft()
            if node.left: 
                queue.append(node.left)
            if node.right: 
                queue.append(node.right)