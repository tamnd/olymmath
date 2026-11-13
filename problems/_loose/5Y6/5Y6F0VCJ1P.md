---
tag: 5Y6F0VCJ1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\mathbb{N}\to\mathbb{N}$ be a bijection of the positive integers. Prove that at least one of the following limits is true: $$\lim_{N\to\infty}\sum_{n=1}^{N}\frac{1}{n+f(n)}=\infty; \lim_{N\to\infty}\sum_{n=1}^N\left(\frac{1}{n}-\frac{1}{f(n)}\right)=\infty.$$*Proposed by Dylan Toh*
