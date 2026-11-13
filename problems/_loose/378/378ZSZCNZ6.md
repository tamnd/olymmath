---
tag: 378ZSZCNZ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90559
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $S$ is a finite subset of $[0,1]$ with the following property: for all $x \in S$, there exist $a, b \in S \cup\{0,1\}$ with $a, b \neq x$ such that $x=(a+b) / 2$. Prove that all the numbers in $S$ are rational.
