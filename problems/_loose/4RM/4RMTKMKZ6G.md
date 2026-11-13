---
tag: 4RMTKMKZ6G
kind: problem
type: answer
answer: (2,-2,-2)(\frac{1}{3},3,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real numbers $x, y, z$ satisfying:

$$
\left\{\begin{aligned}
(x+1) y z & =12 \\
(y+1) z x & =4 \\
(z+1) x y & =4
\end{aligned}\right.
$$

Proposition 1.27 (Vieta's Formulas). Let $P(x)=a x^{2}+b x+c$ be a real polynomial of degree 2 (with $a \neq 0$) having $z_{1}$ and $z_{2}$ as real roots. Then $z_{1} z_{2}=\frac{c}{a}$ and $z_{1}+z_{2}=-\frac{b}{a}$.
