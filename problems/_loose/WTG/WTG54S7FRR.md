---
tag: WTG54S7FRR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250622
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2015
    source: hf-mathnet
    label: Saudi Arabia SAMC 2015
---
Find the number of $6$-tuples $(a_1,a_2, a_3,a_4, a_5,a_6)$ of distinct positive integers satisfying the following two conditions:
(a) $a_1 + a_2 + a_3 + a_4 + a_5 + a_6 = 30$
(b) We can write $a_1,a_2, a_3,a_4, a_5,a_6$ on sides of a hexagon such that after a finite number of time choosing a vertex of the hexagon and adding $1$ to the two numbers written on two sides adjacent to the vertex, we obtain
a hexagon with equal numbers on its sides.

Lê Anh Vinh
