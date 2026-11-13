---
tag: 2EVC0K76JZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213829
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $ABC$ be a triangle with $\angle B \le \angle C$, $I$ its incenter and $D$ the intersection point of line $AI$ with side $BC$. Let $M$ and $N$ be points on sides $BA$ and $CA$, respectively, such that $BM = BD$ and $CN = CD$. The circumcircle of triangle $CMN$ intersects again line $BC$ at $P$. Prove that quadrilateral $DIMP$ is cyclic.
