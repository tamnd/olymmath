---
tag: JJHYAN2V4R
kind: problem
type: answer
answer: "33"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call an odd prime $p$ *adjective* if there exists an infinite sequence $a_0,a_1,a_2,\ldots$ of positive integers such that $$a_0\equiv1+\frac{1}{a_1}\equiv1+\frac{1}{1+\frac{1}{a_2}}\equiv1+\frac{1}{1+\frac{1}{1+\frac{1}{a_3}}}\equiv\ldots\pmod p.$$ What is the sum of the first three odd primes that are *not* adjective?

Note: For two common fractions $\frac{a}{b}$ and $\frac{c}{d}$, we say that $\frac{a}{b}\equiv\frac{c}{d}\pmod p$ if $p$ divides $ad-bc$ and $p$ does not divide $bd$.

*2019 CCA Math Bonanza Individual Round #14*
