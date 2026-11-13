---
tag: R9K90ECHKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $H = \{-2019,-2018, ...,-1, 0, 1, 2, ..., 2020\}$. Describe all functions $f : H \to H$ for which
a) $x = f(x) - f(f(x))$ holds for every $x \in H$.
b) $x = f(x) + f(f(x)) - f(f(f(x)))$ holds for every $x \in H$.
c) $x = f(x) + 2f(f(x)) - 3f(f(f(x)))$ holds for every $x \in H$.
