---
tag: 8ZQWAPH4XT
kind: problem
type: answer
answer: \sum_{k=1}^{n-1}C_{n-1}^{k}\cdotk^{n-k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a mapping $f$ from an $n$-element set $X$ to itself $(n \geqslant 2)$. If $a$ is a fixed element in $X$, and for each $x \in X$, we have $f(f(x))=a$. Find the number of such mappings $f$.
