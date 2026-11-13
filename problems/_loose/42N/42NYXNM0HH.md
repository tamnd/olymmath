---
tag: 42NYXNM0HH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will prove that if $a, b, c$ are the sides of a triangle and $s$ is the semiperimeter, then

$$
\frac{a b}{s-c}+\frac{b c}{s-a}+\frac{c a}{s-b} \geqq 4 s
$$
