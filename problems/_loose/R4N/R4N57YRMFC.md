---
tag: R4N57YRMFC
kind: problem
type: answer
answer: 2^{2n-2}n(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For two sets $A, B$, define
$$
\begin{aligned}
A \Delta B= & \{x \mid x \in A, \text { and } x \notin B\} \cup \\
& \{x \mid x \in B, \text { and } x \notin A\} .
\end{aligned}
$$

Let $n > 1$ be an integer, and $A_{1}, A_{2}, \cdots, A_{2 n}$ be all the subsets of
$$
S=\{1,2, \cdots, n\}
$$

$M$ is a $2^{n} \times 2^{n}$ matrix. For any $i, j \in\left\{1,2, \cdots, 2^{n}\right\}$, the sum of all elements in the set $A_{i} \Delta A_{j}$ (with the convention that the sum of elements in the empty set is 0) is filled in the position of the $i$-th row and $j$-th column of the matrix $M$. Find the sum of all numbers in the matrix $M$.
