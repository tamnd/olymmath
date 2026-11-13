---
tag: 8EAEZVKY7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179603
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2019
    source: hf-mathnet
    label: Romania 2019 ROMANIAN MATHEMATICAL OLYMPIAD
---
Consider $D$ as the midpoint of the base $[BC]$ of isosceles triangle $ABC$ where $m(\angle BAC) < 90^{\circ}$. On the perpendicular to line $BC$ at $B$, point $E$ is taken such that $\angle EAB \equiv \angle BAC$, and on the parallel through $C$ to line $AB$, point $F$ is taken such that $F$ and $D$ are on opposite sides of line $AC$ and $\angle FAC \equiv \angle CAD$. Prove that $AE = CF$ and $BF = EF$.
