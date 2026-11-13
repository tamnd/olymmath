---
tag: WZ3CEHT9H8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given for some natural number $n \geqslant 2$, the polynomials $u_{i}(x)=a_{i} x+b_{i}$ (where $a_{i}$, $b_{i}$ are real numbers, $i=1,2,3$) satisfy the relation
$$
u_{1}^{n}(x)+u_{2}^{n}(x)=u_{3}^{n}(x) .
$$

Prove that these polynomials can be expressed as
$$
u_{i}(x)=c_{i}(A \cdot x+B) .
$$

Here $i=1,2,3$, and $A, B, c_{1}, c_{2}, c_{3}$ are real numbers.
