---
tag: 2R44YKRBCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221956
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $A$ be a point lies outside circle $(O)$ and tangent lines $AB$, $AC$ of $(O)$. Consider points $D, E, M$ on $(O)$ such that $MD = ME$. The line $DE$ cuts $MB$, $MC$ at $R, S$. Take $X \in OB$, $Y \in OC$ such that $RX, SY \perp DE$. Prove that $XY \perp AM$.
