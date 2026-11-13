---
tag: P280MQZ5ZY
kind: problem
type: answer
answer: 2-\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given planar vectors $\vec{a}, \vec{b}, \vec{c}$ satisfy: $|\vec{a}|=|\vec{b}|, \vec{c}=\lambda \vec{a}+\mu \vec{b},|\vec{c}|=1+\vec{a} \cdot \vec{b}=$ $(\vec{a}+\vec{b}) \cdot \vec{c}=1$, try to find the minimum possible value of $\frac{|\vec{a}-\vec{c}|}{|1+\mu|}$.
