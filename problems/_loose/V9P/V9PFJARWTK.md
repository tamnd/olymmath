---
tag: V9PFJARWTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264489
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the following system of equations

$a_1 + a_2 + a_3 = 1$
$a_2 + a_3 + a_4 = 2$
$a_3 + a_4 + a_5 = 3$
$...$
$a_{12} + a_{13} + a_{14} = 12$
$a_{13} + a_{14} + a_1 = 13$
$a_{14 }+ a_1 + a_2 = 14$

find the value of $a_{14}$.
