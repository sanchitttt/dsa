#include <bits/stdc++.h>
using namespace std;

/**
 * Definition for a binary tree node.
 */
struct TreeNode {
    int data;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int val) {
        data = val;
        left = right = nullptr;
    }
};

class Solution {
public:
    unordered_map<TreeNode*, TreeNode*> parentMap;

    void parentHelper(TreeNode* root) {
        if (!root) return;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();

            if (node->left) {
                parentMap[node->left] = node;
                q.push(node->left);
            }
            if (node->right) {
                parentMap[node->right] = node;
                q.push(node->right);
            }
        }
    }

    vector<int> findAtDistanceK(TreeNode* root, TreeNode* target, int k) {
        if (!root) return {};

        queue<TreeNode*> q;
        set<TreeNode*> visited;

        q.push(target);
        visited.insert(target);

        int dist = 0;

        while (!q.empty()) {
            int size = q.size();

            if (dist == k) {
                vector<int> ans;
                while (!q.empty()) {
                    ans.push_back(q.front()->data);
                    q.pop();
                }
                return ans;
            }

            for (int i = 0; i < size; i++) {
                TreeNode* node = q.front();
                q.pop();

                if (node->left && !visited.count(node->left)) {
                    q.push(node->left);
                    visited.insert(node->left);
                }

                if (node->right && !visited.count(node->right)) {
                    q.push(node->right);
                    visited.insert(node->right);
                }

                if (parentMap[node] && !visited.count(parentMap[node])) {
                    q.push(parentMap[node]);
                    visited.insert(parentMap[node]);
                }
            }
            dist++;
        }

        return {};
    }

    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        parentHelper(root);
        return findAtDistanceK(root, target, k);
    }
};


// 🔥 Helper: build sample tree
TreeNode* buildSampleTree() {
    /*
            3
           / \
          5   1
         / \ / \
        6  2 0  8
          / \
         7   4
    */

    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(5);
    root->right = new TreeNode(1);

    root->left->left = new TreeNode(6);
    root->left->right = new TreeNode(2);

    root->right->left = new TreeNode(0);
    root->right->right = new TreeNode(8);

    root->left->right->left = new TreeNode(7);
    root->left->right->right = new TreeNode(4);

    return root;
}


// 🔥 MAIN FUNCTION
int main() {
    Solution sol;

    TreeNode* root = buildSampleTree();

    TreeNode* target = root->left; // node with value 5
    int k = 2;

    vector<int> result = sol.distanceK(root, target, k);

    cout << "Nodes at distance " << k << ": ";
    for (int x : result) {
        cout << x << " ";
    }
    cout << endl;

    return 0;
}