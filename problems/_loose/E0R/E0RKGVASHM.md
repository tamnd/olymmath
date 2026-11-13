---
tag: E0RKGVASHM
kind: problem
type: answer
answer: "2007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi = \tfrac{1+\sqrt 5}2$ be the positive root of $x^2=x+1$. Define a function $f:\mathbb N\to\mathbb N$ by
\begin{align*}
f(0) &= 1\\
f(2x) &= \lfloor\phi f(x)\rfloor\\
f(2x+1) &= f(2x) + f(x).
\end{align*}
Find the remainder when $f(2007)$ is divided by $2008$.
