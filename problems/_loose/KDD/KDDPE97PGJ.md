---
tag: KDDPE97PGJ
kind: problem
type: answer
answer: "1998"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two reverse-order four-digit numbers $M$ and $N$ with $q^{p}-1$ identical positive divisors, which can be factored into prime factors as $p q^{q} r$ and $q^{p+q} r$ respectively, where $p$, $q$, and $r$ are prime numbers. Find the value of $M$.
(Note: For example, 7284 and 4827 are reverse-order numbers. )
