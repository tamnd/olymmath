---
tag: KREW5K4W8R
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let point $O$ be an internal point of a convex $n$-sided polygon $A_{1} A_{2} \cdots A_{n}$. Connect $O A_{1}, O A_{2}, \cdots, O A_{n}$. Label the natural numbers from 1 to $n$ in some order on the $n$ sides of the $n$-sided polygon, and do the same for the line segments $O A_{1}, O A_{2}, \cdots, O A_{n}$.
(1) Give a labeling method for $n=9$ such that the sum of the integers labeled on the 3 sides of each triangle $\triangle A_{i} O A_{i+1}$ (i $\left.=1,2, \cdots, 9, A_{10}=A_{1}\right)$ is equal.
(2) Prove that for $n=10$, there does not exist a labeling method that satisfies the requirement in (1).
