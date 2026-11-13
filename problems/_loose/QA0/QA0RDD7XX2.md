---
tag: QA0RDD7XX2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,\infty)\to\mathbb R$ be a differentiable function with $|f(x)|\le M$ and $f(x)f'(x)\ge\cos x$ for $x\in[0,\infty)$, where $M>0$. Prove that $f(x)$ does not have a limit as $x\to\infty$.
