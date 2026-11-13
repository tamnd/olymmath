---
tag: EV42X8W6ZY
kind: problem
type: answer
answer: f(x) = a^x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a \in (0, 1)$. Find all functions $f : \mathbb{R} \to (0, \infty)$ so that $f(x) \le a^x$ and $f(x + y + z) \le f(x)f(y)f(z)$, for every $x, y, z \in \mathbb{R}$.
