---
tag: GM0WDCFW71
kind: problem
type: answer
answer: 1or2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four (50 points) Find all positive integers $a$, such that there exist integer-coefficient polynomials $P(x)$ and
$$
Q(x)=a_{1} x+a_{2} x^{2}+\cdots+a_{2016} x^{2016},
$$

where, $a_{i} \in\{-1,1\}, i=1,2, \cdots, 2016$, satisfying
$$
\left(x^{2}+a x+1\right) P(x)=Q(x) \text {. }
$$
