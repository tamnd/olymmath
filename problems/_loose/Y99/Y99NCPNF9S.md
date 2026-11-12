---
tag: Y99NCPNF9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344240
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Let $n$ be a fixed positive integer. Ben is playing a computer game. The computer picks a tree $T$ such that no vertex of $T$ has degree $2$ and such that $T$ has exactly $n$ leaves, labeled $v_1,\ldots, v_n$ . The computer then puts an integer weight on each edge of $T$ , and shows Ben neither the tree $T$ nor the weights. Ben can ask queries by specifying two integers $1\leq i < j \leq n$ , and the computer will return the sum of the weights on the path from $v_i$ to $v_j$ . At any point, Ben can guess whether the tree's weights are all zero. He wins the game if he is correct, and loses if he is incorrect.

(a) Show that if Ben asks all $\binom n2$ possible queries, then he can guarantee victory.
(b) Does Ben have a strategy to guarantee victory in less than $\binom n2$ queries?

*Brandon Wang*
