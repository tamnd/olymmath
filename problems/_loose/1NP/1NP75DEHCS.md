---
tag: 1NP75DEHCS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A large pond contains infinitely many lily pads labelled $1$, $2$, $3$,$ ... $, placed in a line, where for each $k$, lily pad $k + 1$ is one unit to the right of lily pad $k$. A frog starts at lily pad $100$. Each minute, if the frog is at lily pad $n$, it hops to lily pad $n + 1$ with probability $\frac{n-1}{n}$ , and hops all the way back to lily pad $1$ with probability $\frac{1}{n}$. Let $N$ be the position of the frog after $1000$ minutes. What is the expected value of $N$?
