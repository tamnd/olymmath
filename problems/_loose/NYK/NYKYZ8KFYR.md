---
tag: NYKYZ8KFYR
kind: problem
type: answer
answer: (p, q, r) = (5, -1, -1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a,b)=(a_n,a_{n+1}),\forall n\in\mathbb{N}$ all be positive interger solutions that satisfies
$$1\leq a\leq b$$ and $$\dfrac{a^2+b^2+a+b+1}{ab}\in\mathbb{N}$$
And the value of $a_n$ is **only** determined by the following recurrence relation:$ a_{n+2} = pa_{n+1} + qa_n + r$
Find $(p,q,r)$.
