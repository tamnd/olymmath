---
tag: WSADQMYWR0
kind: problem
type: answer
answer: \frac{52 \pi^3}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,\ b$ be real numbers. Suppose that a function $f(x)$ satisfies $f(x)=a\sin x+b\cos x+\int_{-\pi}^{\pi} f(t)\cos t\ dt$ and has the maximum value $2\pi$ for $-\pi \leq x\leq \pi$.
Find the minimum value of $\int_{-\pi}^{\pi} \{f(x)\}^2dx.$

*2010 Chiba University entrance exam*
