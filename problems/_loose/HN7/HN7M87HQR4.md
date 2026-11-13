---
tag: HN7M87HQR4
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{N} \to \mathbb{N}$ satisfying the following conditions:

- For every $n \in \mathbb{N}$, $f^{(n)}(n) = n$. (Here $f^{(1)} = f$ and $f^{(k)} = f^{(k-1)} \circ f$.)

- For every $m, n \in \mathbb{N}$, $\lvert f(mn) - f(m) f(n) \rvert < 2017$.
