---
tag: ZJ7K2RM24Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204406
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an isosceles triangle with $AB = AC$. Suppose $P,Q,R$ are points on segments $AC, AB, BC$ respectively such that $AP = QB$, $\angle PBC = 90^\circ - \angle BAC$ and $RP = RQ$. Let $O_1, O_2$ be the circumcenters of $\triangle APQ$ and $\triangle CRP$. Prove that $BR = O_1O_2$.

*Proposed by Atul Shatavart Nadig*
