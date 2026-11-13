---
tag: P45D8GAH1H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
find all positive integer pairs $(m,n)$,satisfies:
(1)$gcd(m,n)=1$,and $m\le\ 2007$
(2)for any $k=1,2,...2007$,we have $[\frac{nk}{m}]=[\sqrt{2}k]$
