---
tag: N97M0DF3MK
kind: problem
type: answer
answer: n^2-n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be integers such that $m > n \geq 3$. Morgane has arranged $m$ tokens in a circle and is about to paint them using $n$ distinct colors. She wants to ensure that among any $n+1$ consecutive tokens, there is always at least one token of each of the $n$ colors. If she can achieve this, we say that the integer $m$ is $n$-colorable.

Prove that for any integer $n \geq 3$, there is a finite non-zero number of integers $m$ that are not $n$-colorable, and find the largest integer $m$ that is not $n$-colorable.
