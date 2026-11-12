---
tag: 28BNGCZX1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two continuous functions $ f, g: [0; 1] \rightarrow [0; 1] $, where the function $ f $ is monotonically increasing. Prove the inequality

$$
\int_{0}^{1} f(g(x)) dx \leqslant \int_{0}^{1} f(x) dx + \int_{0}^{1} g(x) dx
$$
