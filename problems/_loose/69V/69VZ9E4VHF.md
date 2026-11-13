---
tag: 69VZ9E4VHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250674
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let sequences of real numbers $(x_n)$ and $(y_n)$ satisfy $x_1 = y_1 = 1$ and $x_{n+1} =\frac{x_n + 2}{x_n + 1}$ and $y_{n+1} = \frac{y_n^2 + 2}{2y_n}$ for $n = 1,2, ...$ Prove that $y_{n+1} = x_{2^n}$ holds for $n =0, 1,2, ... $
