---
tag: 1B12MGND8E
kind: problem
type: answer
answer: \frac{4}{\pi} (f(1) - f(0)) = (1 + d^2) f'(d)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{R} \rightarrow \mathbb{R}$ be differentiable on $\mathbb{R}$. Prove that there exists $x \in [0, 1]$ such that
$$\frac{4}{\pi} ( f(1) - f(0) ) = (1+x^2) f'(x) \ .$$
