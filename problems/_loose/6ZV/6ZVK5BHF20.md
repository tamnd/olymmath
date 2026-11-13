---
tag: 6ZVK5BHF20
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number such that $p\equiv 1\pmod{4}$. Determine $\sum_{k=1}^{\frac{p-1}{2}}\left \lbrace \frac{k^2}{p} \right \rbrace$, where $\{x\}=x-[x]$.
