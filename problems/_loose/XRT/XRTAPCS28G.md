---
tag: XRTAPCS28G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_n(x)=\sum_{k=1}^n (-1)^{k+1} \left(\frac{x^{2k-1}}{2k-1}+\frac{x^{2k}}{2k}\right).$

Find $\lim_{n\to\infty} f_n(1).$
