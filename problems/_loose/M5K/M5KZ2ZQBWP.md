---
tag: M5KZ2ZQBWP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177741
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(P, Q)$ of polynomials with real coefficients such that

$$
\frac{P(x)}{Q(x)}-\frac{P(x+1)}{Q(x+1)}=\frac{1}{x(x+2)}
$$

for infinitely many $x \in \mathbb{R}$.

Nikolai Nikolov, Oleg Mushkarov
