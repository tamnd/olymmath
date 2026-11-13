---
tag: 2M7B0BZV8T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189490
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A group of mathematicians is attending a conference. We say that a mathematician is $k$-content if he is in the room with at least $k$ people he admires or if he is admired by at least $k$ other people in the room. It is known that when all participants are in the same room then they are all at least $3 k+1$-content. Prove that you can assign everyone into one of the 2 rooms in a way that everyone is at least $k$-content in his room and neither room is empty. Admiration is not necessarily mutual and no one admires himself.

(Matija Bucić)
