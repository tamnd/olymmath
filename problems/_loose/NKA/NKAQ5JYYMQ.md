---
tag: NKAQ5JYYMQ
kind: problem
type: answer
answer: (,b,)=(1,\frac{-3+i\sqrt{3}}{6},\frac{-3-i\sqrt{3}}{6})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $w=\frac{1}{2}(-1+i \sqrt{3})$. Determine the largest number $n \in \mathbb{N}_{0}$ for which there exist complex numbers $a, b, c$ such that for every $k \in\{0,1, \ldots, n\}$ the following holds

$$
a+b w^{k}+c w^{2 k}=k
$$

For the determined $n$, find all triples $(a, b, c)$ that satisfy the above equalities.
