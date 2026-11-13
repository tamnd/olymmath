---
tag: TPW17HS44X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90332
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine, with proof, whether there is a function $f(x, y)$ of two positive integers, taking positive integer values, such that

- For each fixed $x, f(x, y)$ is a polynomial function of $y$;
- For each fixed $y, f(x, y)$ is a polynomial function of $x$;
- However, $f(x, y)$ does not equal any polynomial function of $x$ and $y$.
