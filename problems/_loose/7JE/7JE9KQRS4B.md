---
tag: 7JE9KQRS4B
kind: problem
type: answer
answer: "180"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be a set composed of a finite number of positive integers
$$
\text { such that, } \begin{aligned}
M & =\bigcup_{i=1}^{20} A_{i}=\bigcup_{i=1}^{20} B_{i}, \text { where, } \\
A_{i} & \neq \varnothing, B_{i} \neq \varnothing(i=1,2, \cdots, 20),
\end{aligned}
$$

and satisfies:
(1) For any $1 \leqslant i<j \leqslant 20$,
$$
A_{i} \cap A_{j}=\varnothing, B_{i} \cap B_{j}=\varnothing \text {; }
$$
(2) For any $1 \leqslant i \leqslant 20,1 \leqslant j \leqslant 20$, if $A_{i} \cap B_{j}=\varnothing$, then $\left|A_{i} \cup B_{j}\right| \geqslant 18$.

Find the minimum number of elements in the set $M$ ($|X|$ denotes the number of elements in the set $X$).
