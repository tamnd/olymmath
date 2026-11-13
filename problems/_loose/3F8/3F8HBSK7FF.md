---
tag: 3F8HBSK7FF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b\in \mathbb{R}$. Evaluate:

$$\lim_{n\to \infty}\left(\sqrt{a^2n^2+bn}-an\right)$$

Consider the sequence $(x_n)_{n\ge 1}$, defined by $x_n=\sqrt{n}-\lfloor \sqrt{n}\rfloor$. Denote by $A$ the set of the points $x\in \mathbb{R}$, for which there is a subsequence of $(x_n)_{n\ge 1}$ tending to $x$.

a) Prove that $\mathbb{Q}\cap [0,1]\subset A$.

b) Find $A$.
