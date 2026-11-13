---
tag: CRRSZ1BKRC
kind: problem
type: answer
answer: \frac{x-1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f(x)=\frac{1+x}{2-x}$, define $f_{1}(x)=f(x), f_{n+1}(x)=f\left[f_{n}(x)\right]$, then the analytical expression of $f_{16}(x)$ is
A. $\frac{x+1}{x}$
B. $\frac{x}{x+1}$
C. $\frac{x}{x-1}$
D. $\frac{x-1}{x}$
