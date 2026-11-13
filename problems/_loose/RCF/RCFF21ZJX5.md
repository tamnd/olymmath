---
tag: RCFF21ZJX5
kind: problem
type: answer
answer: 67 \cdot 41 \cdot 13 = 35651
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A triple integer $(a, b, c)$ is called *brilliant * when it satisfies:
(i) $a> b> c$ are prime numbers
(ii) $a = b + 2c$
(iii) $a + b + c$ is a perfect square number
Find the minimum value of $abc$ if triple $(a, b, c)$ is *brilliant*.
