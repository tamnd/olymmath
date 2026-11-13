---
tag: E19MTZ6TX8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a step a function that maps an ordered pair of natural numbers $(x, y)$, where exactly one coordinate is even, to the pair $\left(\frac{x}{2}, y+\frac{x}{2}\right)$ if $2 \mid x$, or to the pair $\left(x+\frac{y}{2}, \frac{y}{2}\right)$ if $2 \mid y$. Prove that for every odd natural number $n, n>1$, there exists an even natural number $b, b<n$, such that by applying a finite number of steps successively to the ordered pair $(n, b)$, the ordered pair $(b, n)$ is obtained.

(Bojan Bašić)
