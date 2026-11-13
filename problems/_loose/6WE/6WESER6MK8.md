---
tag: 6WESER6MK8
kind: problem
type: answer
answer: \frac{1}{2}(e-1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f:[0,+\infty) \rightarrow \mathbb{R}$, defined by $f(x)=\left\{\begin{array}{cl}x, & \text { if } 0 \leq x \leq 1 \\ x-1, & \text { if } x>1\end{array}\right.$. Calculate $\int_{0}^{1} \frac{f\left(e^{t}\right)}{f\left(e^{-t}\right)} \mathrm{d} t$.
