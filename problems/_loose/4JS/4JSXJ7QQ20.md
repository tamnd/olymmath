---
tag: 4JSXJ7QQ20
kind: problem
type: answer
answer: f^{\}(0)=1orf^{\}(0)=\lambda
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbf{R} \rightarrow \mathbf{R}$ be a differentiable monotonic function, $f(0)=0$, and satisfy the inequality
$$
f[f(x)] \geqslant(\lambda+1) f(x)-\lambda x,
$$

Find $f^{\prime}(0)$.
