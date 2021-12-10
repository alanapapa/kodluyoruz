# Merge Sort

- [16,21,11,8,12,22] -> Merge Sort

1. Write the stages of the above array according to the sort type.

```

                  [16,21,11,8,12,22] 
                       /       \
               [16,21,11]   [8,12,22]  
                 /    /        \    \
               [16] [21,11]  [8,12] [22]
                /   /  \     /   \    \
            [16] [21] [11]  [8]  [12] [22]
              \   \    /     \    /     /
             [16] [11,21]    [8,12]   [22]
               \     /          \      /
             [11,16,21]        [8,12,22]
                   \              /
                  [8,11,12,16,21,22]

```
                 
***      

2. Write the Big-O notation.
   
   O(n log n)
   
***