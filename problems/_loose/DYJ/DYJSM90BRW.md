---
tag: DYJSM90BRW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221939
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=172
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
Let $ABC$ be a non isosceles triangle with incenter $I$ . The circumcircle of the triangle $ABC$ has radius $R$. Let $AL$ be the external angle bisector of $\angle BAC $with $L \in BC$. Let $K$ be the point on perpendicular bisector of $BC$ such that $IL \perp IK$.Prove that $OK=3R$.
