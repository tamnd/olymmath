---
tag: DE6M0Q6WA5
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two vector fields $\mathbf{F},\mathbf{G}$ are defined on a three dimensional region $W=\{(x,y,z)\in\mathbb{R}^3 : x^2+y^2\leq 1, |z|\leq 1\}$.
$$\mathbf{F}(x,y,z) = (\sin xy, \sin yz, 0), \mathbf{G} (x,y,z) = (e^{x^2+y^2+z^2}, \cos xz, 0)$$
Evaluate the following integral.
$$\iiint_{W} (\mathbf{G}\cdot \text{curl}(\mathbf{F}) - \mathbf{F}\cdot \text{curl}(\mathbf{G})) dV$$
