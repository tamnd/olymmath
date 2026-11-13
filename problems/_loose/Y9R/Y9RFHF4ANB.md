---
tag: Y9RFHF4ANB
kind: problem
type: answer
answer: "2189"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite set $S \subset \mathbb{R}^3$, define $f(S)$ to be the mininum integer $k$ such that there exist $k$ planes that divide $\mathbb{R}^3$ into a set of regions, where no region contains more than one point in $S$. Suppose that
$$M(n) = \max\{f(S) : |S| = n\} \text{ and } m(n) = \min\{f(S) : |S| = n\}.$$
Evaluate $M(200) \cdot m(200)$.
