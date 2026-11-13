---
tag: 91QQMP5CCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161895
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
In an isosceles triangle $ABC (AB = AC)$, the angle $BAC$ is $40^\circ$. Points $S$ and $T$ on sides $AB$ and $BC$ respectively are such that $\angle BAT = \angle BCS = 10^\circ$. Segments $AT$ and $CS$ intersect at point $P$. Prove that $BT = 2PT$.
