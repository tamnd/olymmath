---
tag: W9N2FPPYWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set containing $n$ elements, and let $A_{1}, A_{2}, \cdots, A_{m}$ be $m$ subsets of $A$ that are pairwise not contained in each other. Prove:
(1) $\sum_{i=1}^{m} \frac{1}{C_{n}^{\left|A_{i}\right|}} \leqslant 1$;
(2) $\sum_{i=1}^{m} C_{n}^{\left|A_{i}\right|} \geqslant m^{2}$,
where $\left|A_{i}\right|$ denotes the number of elements in $A_{i}$, and $C_{n}^{\left|A_{i}\right|}$ denotes the number of combinations of $\left|A_{i}\right|$ elements taken from $n$ elements.
