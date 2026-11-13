---
tag: EKNG8XGDFX
kind: problem
type: answer
answer: d = 1 \text{ or } d = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd positive integer with $n > 1$ and let $a_1, a_2,... , a_n$ be positive integers such that gcd $(a_1, a_2,... , a_n) = 1$. Let $d$ = gcd $(a_1^n + a_1\cdot a_2 \cdot \cdot \cdot a_n, a_2^n + a_1\cdot a_2 \cdot \cdot \cdot a_n, ... , a_n^n + a_1\cdot a_2 \cdot \cdot \cdot a_n)$. Show that the possible values of $d$ are $d = 1, d = 2$
