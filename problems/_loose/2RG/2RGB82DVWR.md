---
tag: 2RGB82DVWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146713
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be the number of ordered pairs $(x, y)$ of integers such that
$$
x^{2}+x y+y^{2} \leq 2007 \text {. }
$$

Remember, integers may be positive, negative, or zero!
(a) Prove that $N$ is odd.
(b) Prove that $N$ is not divisible by 3 .
