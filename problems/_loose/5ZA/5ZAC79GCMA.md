---
tag: 5ZAC79GCMA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $f : [a, b] \to (0,\infty)$; $0 < a \leq b$; $f$ derivable; $f'$ continuous then:$$\int \limits_{a}^{b}\frac{f'(x)\sqrt{f(x)}}{f^3(x) + 1}\leq \tan^{-1}\left(\frac{f(b)-f(a)}{1 + f(a)f(b)}\right)$$
