---
tag: MZ78W0DPYW
kind: problem
type: answer
answer: x \geq \frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a quadruple of nonnegative real numbers $(a,b,c,d)$ is *balanced *if $$a+b+c+d=a^2+b^2+c^2+d^2.$$
Find all positive real numbers $x$ such that $$(x-a)(x-b)(x-c)(x-d)\geq 0$$ for every balanced quadruple $(a,b,c,d)$. \\ \\
(Ivan Novak)
