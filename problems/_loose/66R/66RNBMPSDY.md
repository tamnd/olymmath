---
tag: 66RNBMPSDY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227010
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all positive integers $n,$ let $r_n$ be defined as $$r_n=\sum_{i=0}^n(-1)^i\binom{n}{i}\frac{1}{(i+1)!}.$$Prove that $\sum_{r=1}^\infty r_i=0.$
