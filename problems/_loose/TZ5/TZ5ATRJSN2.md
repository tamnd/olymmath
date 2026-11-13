---
tag: TZ5ATRJSN2
kind: problem
type: answer
answer: \frac{1}{10}(6^{2021} - 3^{2021} - 2^{2021} - 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $\Omega(n)$ denote the number of prime factors of $n$, counting multiplicity. Let $f_1(n)$ and $f_3(n)$ denote the sum of positive divisors $d|n$ where $\Omega(d)\equiv 1\pmod 4$ and $\Omega(d)\equiv 3\pmod 4$, respectively. For example, $f_1(72) = 72 + 2 + 3 = 77$ and $f_3(72) = 8+12+18 = 38$. Determine $f_3(6^{2020}) - f_1(6^{2020})$.
