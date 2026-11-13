---
tag: 2Z6AMZA2DF
kind: problem
type: answer
answer: (3,3,3),(2,2,4),(3,3,12),(3,2,1),(3,2,25)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(p, q, r)$ satisfying the following conditions:
(1) $p, q, r \in \mathbf{N}^{*}, p \geqslant q \geqslant r$;
(2) At least two of $p, q, r$ are prime numbers;
(3) $\frac{(p+q+r)^{2}}{p q r}$ is a positive integer.
