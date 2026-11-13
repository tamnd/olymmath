---
tag: Y46TNAVQCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ people attend a party $(n \geqslant 6)$. It is known that
(1) each person is acquainted with at least $\left[\frac{n}{2}\right]$ people;
(2) for any $\left[\frac{n}{2}\right]$ people, either there are 2 people among them who know each other, or there are 2 people among the remaining who know each other.
Prove that there must be 3 people among these $n$ people who are mutually acquainted.
