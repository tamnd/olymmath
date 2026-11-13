---
tag: MVRN5AHBCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be positive real numbers such that $a b c=1$. Show that

$$
\frac{a}{a b+1}+\frac{b}{b c+1}+\frac{c}{c a+1} \geqslant \frac{3}{2}
$$

Many Olympiad inequalities involve variables $a_{1}, \ldots, a_{n}$ subject to a condition of the form $a_{1} \ldots a_{n}=1$. A very useful method for tackling such inequalities is to eliminate this constraint while homogenizing by performing a change of variables of the form

$$
a_{1}=\left(\frac{x_{2}}{x_{1}}\right)^{\alpha}, a_{2}=\left(\frac{x_{3}}{x_{2}}\right)^{\alpha}, \ldots, a_{n}=\left(\frac{x_{1}}{x_{n}}\right)^{\alpha}
$$

where $\alpha$ is a real number to be chosen, often taken to be 1.
