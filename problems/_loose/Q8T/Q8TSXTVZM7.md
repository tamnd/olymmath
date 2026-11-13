---
tag: Q8TSXTVZM7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $f:\mathbb{R} \to \mathbb{R}$ is a function such that
$$|f(x+y)-f(x)-f(y)|\le 1\ \ \ \text{for all} \ \ x, y \in\mathbb R.$$
Prove that there is a function $g:\mathbb{R}\to\mathbb{R}$ such that $|f(x)-g(x)|\le 1$ and $g(x+y)=g(x)+g(y)$ for all $x,y \in\mathbb R.$
