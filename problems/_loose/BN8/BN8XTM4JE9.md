---
tag: BN8XTM4JE9
kind: problem
type: answer
answer: \frac{n(n+1)\sqrt{2n+1}}{2\sqrt{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}^{*}$. Show that $\sum_{k=1}^{n} k \sqrt{n+1-k} \leq \frac{n(n+1) \sqrt{2 n+1}}{2 \sqrt{3}}$.
