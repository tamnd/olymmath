---
tag: JWYY0BDD74
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C$ be an acute triangle with circumcenter $O$ and incenter $I$. Points $E, M$ lie on $A C$ and $F, N$ on $A B$ so that $B E \perp A C, C F \perp A B, \angle A B M=\angle C B M$ and $\angle A C N=\angle B C N$. Prove that $I$ lies on $E F$ if and only if $O$ lies on $M N$.
