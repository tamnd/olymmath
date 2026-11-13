---
tag: W53KC1W6TW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number and suppose that $2^h \not \equiv 1 \text{ (mod } p\text{)}$ for all integer $1 \leq h \leq p-2$. Let $a$ be an even number such that $\frac{p}{2} < a < p$. Define the sequence $a_0, a_1, a_2, \ldots$ as $$a_0 = a, a_{n+1} = p -b_n, n = 0,1,2, \ldots,$$ where $b_n$ is the greatest odd divisor of $a_n$. Show that the sequence is periodic and determine its period.
