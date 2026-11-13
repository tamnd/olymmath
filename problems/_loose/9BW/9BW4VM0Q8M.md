---
tag: 9BW4VM0Q8M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d \geq 3$ and let $A_1 \dots A_{d + 1}$ be a simplex in $\mathbb{R}^d$. (A simplex is the convex hull of $d + 1$ points not lying in a common hyperplane.) For every $i = 1, \dots , d + 1$ let $O_i$ be the circumcentre of the face $A_1 \dots A_{i - 1}A_{i+1}\dots A_{d+1}$, i.e. $O_i$ lies in the hyperplane $A_1 \dots A_{i - 1}A_{i+1}\dots A_{d+1}$ and it has the same distance from all points $A_1, \dots , A_{i-1}, A_{i+1}, \dots , A_{d+1}$. For each $i$ draw a line through $A_i$ perpendicular to the hyperplane $O_1 \dots O_{i-1}O_{i+1} \dots O_{d+1}$. Prove that either these lines are parallel or they have a common point.
