---
tag: AVYPFMM41X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250795
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $ABC$ be a triangle inscribed in the circle $(O)$ and $P$ is a point inside the triangle $ABC$. Let $D$ be a point on $(O)$ such that $AD \perp AP$. The line $CD$ cuts the perpendicular bisector of $BC$ at $M$. The line $AD$ cuts the line passing through $B$ and is perpendicular to $BP$ at $Q$. Let $N$ be the reflection of $Q$ through $M$. Prove that $CN \perp CP$.
