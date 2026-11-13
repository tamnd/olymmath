---
tag: GF8E7N24XC
kind: problem
type: answer
answer: b = c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,\ldots$ be a bounded sequence of reals. Is it true that the fact
$$\lim_{N\to\infty}\frac1N\sum_{n=1}^Na_n=b\enspace\text{ and }\enspace\lim_{N\to\infty}\frac1{\log N}\sum_{n=1}^N\frac{a_n}n=c$$implies $b=c$?
