---
tag: D75CHKVDAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every $n \in N $, let $d(n)$ denote the sum of digits of $n$. It is easy to see that the sequence $d(n), d(d(n))$, $d(d(d(n))), ... $ will eventually become a constant integer between $1$ and $9$ (both inclusive). This number is called the digital root of $n$ . Denote it by $b(n)$. Then for how many natural numbers $k<1000 , \lim_{n \to \infty} b(k^n)$ exists.
