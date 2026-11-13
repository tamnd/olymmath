---
tag: W349XAVW7D
kind: problem
type: answer
answer: n = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)=x+1$ and $Q(x)=x^2+1.$ Consider all sequences $\langle(x_k,y_k)\rangle_{k\in\mathbb{N}}$ such that $(x_1,y_1)=(1,3)$ and $(x_{k+1},y_{k+1})$ is either $(P(x_k), Q(y_k))$ or $(Q(x_k),P(y_k))$ for each $k. $ We say that a positive integer $n$ is nice if $x_n=y_n$ holds in at least one of these sequences. Find all nice numbers.
