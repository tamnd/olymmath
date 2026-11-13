---
tag: PN76B8VXZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $p$, $q$, $l$ strictly positive real numbers, consider the following problem: for $y \geq 0$ fixed, determine the values $x \geq 0$ such that $x^p - lx^q \leq y$. Denote by $S(y)$ the set of solutions of this problem. Prove that if one has $p < q$, $\epsilon \in (0, l^\frac{1}{p-q})$, $0 \leq x \leq \epsilon$ and $x \in S(y)$, then $$x\leq ky^{\delta},\ \text{where}\ k=\epsilon\left(\epsilon^p-l\epsilon^q\right)^{-\frac{1}{p}}\ \text{and}\ \delta=\frac{1}{p}$$
