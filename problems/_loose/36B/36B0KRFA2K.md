---
tag: 36B0KRFA2K
kind: problem
type: answer
answer: \sqrt{(\frac{1}{\sqrt[n]{}}-\sqrt[n]{})^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\alpha_{i} \in\left(0, \frac{\pi}{2}\right)(i=1,2,3, \cdots, n, n \geqslant 2)$, and $\prod_{i=1}^{n} \sin \alpha_{i}=a$ (a constant), find the maximum value of $\prod_{i=1}^{n} \cos \alpha_{i}$.
