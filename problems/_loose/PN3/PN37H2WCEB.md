---
tag: PN37H2WCEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that the following (apparently fractional) expression

$$
n x^{n+1}\left(1-\frac{1}{x}\right)-x^{n}\left(1-\frac{1}{x^{n}}\right)
$$

is always divisible by $(x-1)^{2}$, if $n$ is a natural number, and $x \neq 1$.
