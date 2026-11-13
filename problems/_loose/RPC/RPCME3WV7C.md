---
tag: RPCME3WV7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90168
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=53
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C$ be a triangle with incenter $I$. The incircle of $A B C$ is tangent to sides $B C, C A, A B$ at $D, E, F$. Let $H$ denote the orthocenter of triangle $B I C$, and let $P$ denote the midpoint of the altitude from $D$ to $E F$. Prove that $H P$ bisects $E F$.
