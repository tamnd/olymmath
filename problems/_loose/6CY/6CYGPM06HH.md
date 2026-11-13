---
tag: 6CYGPM06HH
kind: problem
type: answer
answer: (x,y,z)\in{(e,,\frac{1}{}),e\in{-1,1},\in\mathbb{R}^{*}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $(x, y, z)$ such that:

$$
\left\{\begin{array}{c}
x+y+z=\frac{1}{x}+\frac{1}{y}+{ }^{\prime} \frac{1}{z} \\
x^{2}+y^{2}+z^{2}=\frac{1}{x^{2}}+\frac{1}{y^{2}}+\frac{1}{z^{2}}
\end{array}\right.
$$

Lemma 2. Let $P$ be a polynomial with integer coefficients, $a, b$ two distinct integers, then $a-b \mid P(a)-P(b)$
