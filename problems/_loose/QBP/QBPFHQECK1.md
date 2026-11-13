---
tag: QBPFHQECK1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:(0,\infty)\to\mathbb{R}$ be a continuous function such that for all $x\in(0,\infty)$, $$f(2x)=f(x)$$
Show that the function $g$ defined by the equation $$g(x)=\int_{x}^{2x} f(t)\frac{dt}{t}~~\text{for}~x>0$$ is a constant function.
