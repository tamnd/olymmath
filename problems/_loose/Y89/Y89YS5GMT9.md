---
tag: Y89YS5GMT9
kind: problem
type: answer
answer: \frac{1}{24}n(n^{2}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of 0s and 1s $x_{1}$, $x_{2}, \cdots, x_{n}$, $A$ is the number of triples $\left(x_{i}, x_{j}, x_{k}\right)$ equal to $(0,1,0)$ or $(1,0,1)$, where $1 \leqslant i<j<k \leqslant x_{j}$ $\neq x_{i}$, and the number of $j$ such that $x_{j} \neq x_{i}$.
Prove: $\mathrm{A}=\mathrm{C}_{n}^{3}-\mathrm{C}_{d_{1}}^{2}-\mathrm{C}_{d_{2}}^{2}-\cdots-\mathrm{C}_{d_{n}}^{2}$;
Given an odd $n$, find the maximum value of $A$.
