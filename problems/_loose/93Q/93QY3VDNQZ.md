---
tag: 93QY3VDNQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89009
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $p_{1}$ and $q_{1}$ be integers such that the equation $x^{2} + p_{1} x + q_{1} = 0$ has two integer solutions. For each $n \in \mathbb{N}$, we define the numbers $p_{n+1}$ and $q_{n+1}$ by the formulas

$$
p_{n+1} = p_{n} + 1, q_{n+1} = q_{n} + \frac{1}{2} p_{n}
$$

Prove that there are infinitely many natural numbers $n$ for which the equation $x^{2} + p_{n} x + q_{n} = 0$ has two integer solutions.
