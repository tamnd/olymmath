---
tag: ERNVAY16PZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n=\int_0^{\frac{\pi}{2}} \sin 2t\ (1-\sin t)^{\frac{n-1}{2}}dt\ (n=1,2,\cdots)$

Evaluate

$$\sum_{n=1}^{\infty} (n+1)(a_n-a_{n+1})$$
