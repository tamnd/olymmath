---
tag: TCG5MCJ7PB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Assume that a real polynomial $P(x)$ has no real roots. Prove that the polynomial
$$Q(x)=P(x)+\frac{P''(x)}{2!}+\frac{P^{(4)}(x)}{4!}+\ldots$$
also has no real roots.
