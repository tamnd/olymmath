---
tag: YPETD43K00
kind: problem
type: answer
answer: A=-1,B=-2,C=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190651
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the numbers $A, B$, and $C$ such that for every natural number $n \in \mathbb{N}$, the following equality holds:

$$
\frac{1}{2}+\frac{2}{2^{2}}+\frac{3}{2^{3}}+\ldots+\frac{n}{2^{n}}=\frac{A n+B}{2^{n}}+C
$$
