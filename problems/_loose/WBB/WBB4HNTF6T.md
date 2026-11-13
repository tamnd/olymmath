---
tag: WBB4HNTF6T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250956
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=26
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
Let $a_0$ be a positive integer and $a_{n + 1} =\sqrt{a_n^2 + 1}$, for all $n \ge 0$.

1) Prove that for all $a_0$ the sequence contains infinitely many integers and infinitely many irrational numbers.

2) Is there an $a_0$ for which $a_{2010}$ is an integer?
