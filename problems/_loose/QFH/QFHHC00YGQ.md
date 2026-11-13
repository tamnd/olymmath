---
tag: QFHHC00YGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime, $n$ be a positive integer, and let $\mathbb{Z}_{p^n}$ denote the set of congruence classes modulo $p^n.$ Determine the number of functions $f: \mathbb{Z}_{p^n} \to \mathbb{Z}_{p^n}$ satisfying the condition
$$ f(a)+f(b) \equiv f(a+b+pab) \pmod{p^n} $$
for all $a,b \in \mathbb{Z}_{p^n}.$
