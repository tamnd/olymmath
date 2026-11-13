---
tag: 82DH1BRKWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=39
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
Let $a$ and $b$ be real numbers such that $a + b \ne 0$. Solve the equation
$$\frac{1}{(x + a)^2 - b^2} +\frac{1}{(x +b)^2 - a^2}=\frac{1}{x^2 -(a + b)^2}+\frac{1}{x^2-(a -b)^2}$$
