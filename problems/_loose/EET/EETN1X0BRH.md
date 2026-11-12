---
tag: EETN1X0BRH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1981
    source: hf-numinamath-1-5
    label: XXXII - I - Problem 7
---
Let $ (x_n) $ be a sequence of natural numbers satisfying the conditions
a) $ x_1 < x_2 < x_3 < \ldots $,
b) there exists $ j \in \mathbb{N} $, $ j > 1 $, such that $ x_j = j $,
c) $ x_{kl} = x_kx_l $, for coprime $ k,l \in \mathbb{N} $.
Prove that $ x_n = n $ for every $ n $.
