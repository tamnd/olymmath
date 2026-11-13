---
tag: CSN36EV4N1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\forall n\in \mathbb{Z_{+}}-\{1,2\}$ find the maximal length of a sequence with elements from a set $\{1,2,\ldots,n\}$, such that any two consecutive elements of this sequence are different and after removing all elements except for the four we do not receive a sequence in form $x,y,x,y$ ($x\neq y$).
