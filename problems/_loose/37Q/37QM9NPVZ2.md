---
tag: 37QM9NPVZ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$.

(a) If $P$ is a polynomial of degree $n$ where $P(x) \in \mathbb{Z}$ for every $x \in \mathbb{Z}$, prove that for every $a,b \in \mathbb{Z}$ where $P(a) \neq P(b)$,
$$\text{lcm}(1, 2, \ldots, n) \ge \left| \dfrac{a-b}{P(a) - P(b)} \right|$$

(b) Find one $P$ (for each $n$) such that the equality case above is achieved for some $a,b \in \mathbb{Z}$.
