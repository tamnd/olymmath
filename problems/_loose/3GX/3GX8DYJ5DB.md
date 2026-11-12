---
tag: 3GX8DYJ5DB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ISL
    url: https://artofproblemsolving.com/community/c6h3610454
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2024
    source: hf-ai-mo-aops
    label: 2024 ISL
---
Let $a_0, a_1, a_2, \ldots$ be an infinite strictly increasing sequence of positive integers such that for each $n \geqslant 1$ we have $$ a_n \in \left\{ \frac{a_{n-1} + a_{n+1}}{2},\ \sqrt{a_{n-1} \cdot a_{n+1}} \right\}. $$ Let $b_1, b_2, \ldots$ be an infinite sequence of letters defined as $$ b_n =
\begin{cases}
A & \text{if } a_n = \frac{1}{2}(a_{n-1} + a_{n+1})
G & \text{otherwise}.
\end{cases} $$ Prove that there exist positive integers $n_0$ and $d$ such that for all $n \geqslant n_0$ we have $b_{n+d} = b_n$ .

*Proposed by Josef Tkadlec, Czech Republic*
