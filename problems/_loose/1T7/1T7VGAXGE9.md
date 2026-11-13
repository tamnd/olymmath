---
tag: 1T7VGAXGE9
kind: problem
type: answer
answer: \frac{1}{3}(2^{p+1}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$P$ is a natural number. Consider $E=\left\{1,2, \cdots, 2^{p}\right\}$ and its subsets $A$ with the following property: if $x \in A$, then $2 x \bar{\in} A$. Find the maximum number of elements in $A$.

The maximum number of elements in $A$ is $\boxed{2^{p-1}}$.
