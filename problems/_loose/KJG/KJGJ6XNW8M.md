---
tag: KJGJ6XNW8M
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c$ be a complex number. Suppose there exist distinct complex numbers $r$, $s$, and $t$ such that for every complex number $z$, we have
$$
(z - r)(z - s)(z - t) = (z - cr)(z - cs)(z - ct).
$$
Compute the number of distinct possible values of $c$.
