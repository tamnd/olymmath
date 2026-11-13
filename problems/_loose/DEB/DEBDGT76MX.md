---
tag: DEBDGT76MX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a polynomial with real roots *n-local* if the greatest difference between any pair of its roots is $n$. Let $f(x)=x^2+ax+b$ be a 1-*local* polynomial with distinct roots such that $a$ and $b$ are non-zero integers. If $f(f(x))$ is a 23-*local* polynomial, find the sum of the roots of $f(x)$.

*Proposed by Anthony Yang*
