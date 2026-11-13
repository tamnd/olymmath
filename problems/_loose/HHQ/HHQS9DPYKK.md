---
tag: HHQS9DPYKK
kind: problem
type: answer
answer: f\left( \frac{1}{2} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be the polynomial with respect to $x,$ and $g_{n}(x)=n-2n^{2}\left|x-\frac{1}{2}\right|+\left|n-2n^{2}\left|x-\frac{1}{2}\right|\right|.$
Find $\lim_{n\to\infty}\int_{0}^{1}f(x)g_{n}(x)\ dx.$
