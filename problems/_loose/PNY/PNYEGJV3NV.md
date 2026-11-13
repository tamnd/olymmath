---
tag: PNYEGJV3NV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230507
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong 1997-2023 IMO HK TST
---
Given triangle $ABC$ with $\angle A = a$. Let $AL$ be the bisector of the triangle $ABC$. Let the incircle of $\vartriangle ABC$ touch the sides $AB$ and $BC$ at points $P$ and $Q$ respectively. Let $X$ be the intersection point of the lines $AQ$ and $LP$. Prove that the lines $BX$ and $AL$ are perpendicular.

(V. Karamzin)
