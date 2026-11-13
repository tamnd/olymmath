---
tag: S8NQ3X55HE
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f(x)=\left\{\begin{array}{ll}x+\frac{1}{2} & \left(0 \leqslant x \leqslant \frac{1}{2}\right) \\ 2(1-x) & \left(\frac{1}{2}<x \leqslant 1\right)\end{array}\right.$, define $f_{1}(x)=f(x), f_{n}(x)=f\left(f_{n-1}(x)\right)$, $n \in \mathbf{N}$, prove: the set $\left\{x \mid f_{15}(x)=x, x \in[0,1]\right\}$ contains at least 9 elements.
