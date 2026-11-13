---
tag: T73GKFZKMX
kind: problem
type: answer
answer: "188"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_0 = 0, F_{1} = 1$, and for $n \ge 1, F_{n+1} = F_n + F_{n-1}$. Define $a_n = \left(\frac{1 + \sqrt{5}}{2}\right)^n \cdot F_n$ . Then there are rational numbers $A$ and $B$ such that $\frac{a_{30} + a_{29}}{a_{26} + a_{25}} = A + B \sqrt{5}$. Find $A + B$.
