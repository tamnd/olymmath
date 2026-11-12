---
tag: V40WWD3Z8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h386869
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2001
    source: hf-ai-mo-aops
    label: 2001 Romania Team Selection Test
---
Consider a convex polyhedron $P$ with vertices $V_1,\ldots ,V_p$ . The distinct vertices $V_i$ and $V_j$ are called *neighbours* if they belong to the same face of the polyhedron. To each vertex $V_k$ we assign a number $v_k(0)$ , and construct inductively the sequence $v_k(n)\ (n\ge 0)$ as follows: $v_k(n+1)$ is the average of the $v_j(n)$ for all neighbours $V_j$ of $V_k$ . If all numbers $v_k(n)$ are integers, prove that there exists the positive integer $N$ such that all $v_k(n)$ are equal for $n\ge N$ .
