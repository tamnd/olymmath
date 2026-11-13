---
tag: 3A0ZCJKVPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $f(n)$ be equal to $n$ if there is an integer $x$ such that $x^2-n$ is divisible by $2^{12}$, and let $f(n)$ be $0$ otherwise. Determine the remainder when $$\sum^{2^{12}-1}_{n=0}f(n)$$ is divided by $2^{12}$.
