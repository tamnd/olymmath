---
tag: ZK1TAWJ85B
kind: problem
type: answer
answer: \frac{p-1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime satisfying $p \equiv 1(\bmod 4)$, compute $\sum_{k=1}^{p-1}\left\{\frac{k^{2}}{p}\right\}$, where $\{x\}=x-[x],[x]$ is the greatest integer not exceeding $x$.
