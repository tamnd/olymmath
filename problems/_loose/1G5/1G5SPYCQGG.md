---
tag: 1G5SPYCQGG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be two distinct prime numbers.

Let $e$ and $d$ be integers such that

$$
e d \equiv 1 \pmod{(p-1)(q-1)}
$$

Show that for any integer $M$ we have

$$
\left(M^{e}\right)^{d} \equiv M \pmod{p q}
$$
