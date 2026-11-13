---
tag: 7BBM3H1QST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251099
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=113
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
Let $P(x)$ be a monic polynomial of degree $100$ with $100$ distinct noninteger real roots. Suppose that each of polynomials $P(2x^2 - 4x)$ and $P(4x - 2x^2)$ has exactly $130$ distinct real roots. Prove that there exist non constant polynomials $A(x),B(x)$ such that $A(x)B(x) = P(x)$ and $A(x) = B(x)$ has no root in $(-1.1)$
