---
tag: W5RJ6GRYXS
kind: problem
type: answer
answer: "249"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154627
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 20th Philippine Mathematical Olympiad
---
In triangle $A B C, A B=6, B C=10$, and $C A=14$. If $D, E$, and $F$ are the midpoints of sides $B C$, $C A$, and $A B$, respectively, find $A D^{2}+B E^{2}+C F^{2}$.
