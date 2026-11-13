---
tag: F577KWXX1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: If for any $x, y$, there is $f(y)-f(x) \leqslant(y-x)^{2}$, then for any positive integer $n$, and any $a, b$, we have
$$
|f(b)-f(a)| \leqslant \frac{1}{n}(b-a)^{2} .
$$
