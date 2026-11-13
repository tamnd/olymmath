---
tag: 37HVVB0SEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89791
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=329
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
Prove that for every $x \in\left[\frac{1}{111}, \frac{110}{111}\right]$ we can choose numbers $a_{i} \in\{-1,1\}, i=1,2, \ldots, 101$ such that

$$
\left|x_{101}-x\right| \leqslant \frac{1}{402}
$$

where

$$
x_{0}=1, x_{k}=\left(x_{k-1}+1\right)^{a_{k}}, \text { for } k=1,2, \ldots, 101
$$
