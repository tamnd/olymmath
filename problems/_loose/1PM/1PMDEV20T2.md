---
tag: 1PMDEV20T2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a, b, c \in \mathbf{R}^{+}$, prove:
$$
\sqrt[3]{\frac{a^{2}}{(b+c)^{2}}}+\sqrt[3]{\frac{b^{2}}{(c+a)^{2}}}+\sqrt[3]{\frac{c^{2}}{(a+b)^{2}}} \geqslant \frac{3}{\sqrt[3]{4}}
$$
