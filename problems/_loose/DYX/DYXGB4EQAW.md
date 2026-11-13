---
tag: DYXGB4EQAW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Prove that:

$\sum_{k=0}^p (-1)^k \dbinom{p}{k} \dbinom{p+k}{k} \equiv -1 (\mod p^3)$

(proposed by B. Batbayasgalan, inspired by Putnam olympiad problem)

Note: I believe they meant to say $p>2$ as well.
