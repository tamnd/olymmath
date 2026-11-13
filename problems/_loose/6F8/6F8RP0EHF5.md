---
tag: 6F8RP0EHF5
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{c_{n}\}$ is determined by the following equation. $$c_{n}=(n+1)\int_{0}^{1}x^{n}\cos \pi x\ dx\ (n=1,\ 2,\ \cdots).$$ Let $\lambda$ be the limit value $\lim_{n\to\infty}c_{n}.$ Find $\lim_{n\to\infty}\frac{c_{n+1}-\lambda}{c_{n}-\lambda}.$
