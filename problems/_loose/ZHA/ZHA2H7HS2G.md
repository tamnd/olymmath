---
tag: ZHA2H7HS2G
kind: problem
type: answer
answer: \lim_{x \to \infty} f(x) = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f : [0, +\infty) \to \mathbb R$ be a differentiable function. Suppose that $ \left|f(x)\right| \le 5$ and $ f(x)f'(x) \ge \sin x$ for all $ x \ge 0$. Prove that there exists $ \lim_{x\to+\infty}f(x)$.
