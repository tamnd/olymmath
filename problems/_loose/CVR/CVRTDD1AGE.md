---
tag: CVRTDD1AGE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90145
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be the number of 4 -tuples $(x, y, z, t)$ of positive integers smaller than $2006^{2006}$ such that

$$
x^{3}+y^{2}=z^{3}+t^{2}+1,
$$

and let $B$ the number of 4-tuples $(x, y, z, t)$ of positive integers smaller than $2006^{2006}$ such that

$$
x^{3}+y^{2}=z^{3}+t^{2} \text {. }
$$

Prove that $B>A$.
