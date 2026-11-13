---
tag: 7T9NPJEGTH
kind: problem
type: answer
answer: f^{-1}(y) = \frac{1 - y^2}{1 + y^2} + i \frac{2y}{1 + y^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_0=\{z\in\mathbb C:|z|=1,z\ne-1\}$ and $f(z)=\frac{\operatorname{Im}z}{1+\operatorname{Re}z}$. Prove that $f$ is a bijection between $S_0$ and $\mathbb R$. Find $f^{-1}$.
