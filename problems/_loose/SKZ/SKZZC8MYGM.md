---
tag: SKZZC8MYGM
kind: problem
type: answer
answer: the set of all real numbers
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
We say that a non-empty set $A$ consisting of real numbers is complete if for any real $a$ and $b$ such that $a+b \in A$, the number $ab$ also lies in $A$ (the numbers $a$ and $b$ are not required to be distinct or to belong to $A$). Find all complete sets.
