---
tag: 1Q1SBVB65N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263954
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{a_n\}$ is defined by $a_0 = 1, a_1 = 2,$ and for $n \geq 2,$

$$a_n = a_{n-1}^2 + (a_0a_1 \dots a_{n-2})^2.$$

Let $k$ be a positive integer, and let $p$ be a prime factor of $a_k.$ Show that $p > 4(k-1).$
