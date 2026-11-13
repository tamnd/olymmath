---
tag: K9PW4C8TSP
kind: problem
type: answer
answer: a_{n}=10^{2-(\frac{1}{2})^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the positive term sequence $\left\{a_{n}\right\}$, $a_{1}=10, a_{n+1}=10 \sqrt{a_{n}}$, find the general formula for this sequence.
