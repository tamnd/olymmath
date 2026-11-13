---
tag: TENR069A5E
kind: problem
type: answer
answer: \frac{+1}{b+1}\leq\operatorname{gcd}(,b)+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b \in \mathbb{N}, a>b$. Suppose that $a-b \mid a^{2}+b$.

Show that $\frac{a+1}{b+1} \leq \operatorname{gcd}(a, b)+1$.
