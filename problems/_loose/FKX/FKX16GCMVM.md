---
tag: FKX16GCMVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1967 Czech and Slovak Olympiad III A
    url: https://artofproblemsolving.com/community/c6h3349467
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo/1967
    source: hf-ai-mo-aops
    label: 1967 Czech and Slovak Olympiad III A
---
Consider a table of cyclic permutations ( $n\ge2$ )
$$
\begin{matrix}
1, & 2, & \ldots, & n-1, & n
2, & 3, & \ldots, & n, & 1,
\vdots & \vdots & \ddots & \vdots & \vdots
n, & 1, & \ldots, & n-2, & n-1.
\end{matrix}
$$
Then multiply each number of the first row by that number of the $k$ -th row that is in the same column. Sum all these products and denote $s_k$ the result (e.g. $s_2=1\cdot2+2\cdot3+\cdots+(n-1)\cdot n+n\cdot1$ ).
a) Find a recursive relation for $s_k$ in terms of $s_{k-1}$ and determine the explicit formula for $s_k$ .
b) Determine both an index $k$ and the value of $s_k$ such that the sum $s_k$ is minimal.
