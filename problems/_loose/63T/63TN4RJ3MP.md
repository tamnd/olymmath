---
tag: 63TN4RJ3MP
kind: problem
type: answer
answer: D_{n}=n!(1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\cdots+(-1)^{n}\frac{1}{n!})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Derangement Problem: Find the number of permutations $\left\{x_{1}, x_{2}, \cdots, x_{n}\right\}$ that satisfy $\forall i$, $x_{i} \neq i,(i=1,2, \cdots, n)$, denoted as $D_{n}$.
