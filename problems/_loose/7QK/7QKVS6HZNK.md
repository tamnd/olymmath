---
tag: 7QKVS6HZNK
kind: problem
type: answer
answer: f(0)\timesf(1)=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ be real numbers and $f$ the function from $\mathbb{R}$ to $\mathbb{R}$ that associates $x$ with $x^{2} + a x + b$. Suppose there exists a real number $t$ such that $f(t) = f(f(f(t))) = 0$.

Show that $f(0) \times f(1) = 0$.
