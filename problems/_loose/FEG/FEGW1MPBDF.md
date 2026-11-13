---
tag: FEGW1MPBDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Euclid's proof of the infinitude of the set of prime numbers leads to the idea of defining Euclid numbers recursively:

$e_{1}=2, e_{n}=e_{1} e_{2} \ldots e_{n-1}+1(n \geq 2)$. Are all numbers $e_{n}$ prime?
