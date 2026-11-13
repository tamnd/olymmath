---
tag: D32WJHX31D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $(a_n)_{n=0}^{\infty}$ by $a_0 = 1,$ $a_1 = 8,$ and $a_n = 2a_{n-1} + a_{n-2}$ for $n \geq 2.$ The infinite sum
$$ \sum_{n=1}^{\infty} \int_{0}^{2021\pi/14} \sin(a_{n-1}x)\sin(a_nx) dx $$
can be expressed as a common fraction $p/q.$ Compute $p + q.$
