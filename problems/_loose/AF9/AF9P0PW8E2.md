---
tag: AF9P0PW8E2
kind: problem
type: answer
answer: (n^{2}-1)^{-\frac{n}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n(n \geqslant 2)$ real numbers $\theta_{1}, \theta_{2}, \cdots, \theta_{n}\left(\theta_{i} \in\left(0, \frac{\pi}{2}\right], 1 \leqslant i \leqslant n\right)$ satisfying $\sum_{i=1}^{n} \sin \theta_{i} \leqslant 1$. Try to find the maximum value of $\prod_{i=1}^{n} \tan \theta_{i}$.
