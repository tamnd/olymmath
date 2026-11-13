---
tag: RW2V0AVSEY
kind: problem
type: answer
answer: "96"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154458
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 21st PMO Area Stage
---
In $\triangle A B C$, the length of $A B$ is 12 and its incircle $O$ has radius 4. Let $D$ be the point of tangency of circle $O$ with $A B$. If $A D: A B=1: 3$, find the area of $\triangle A B C$.
