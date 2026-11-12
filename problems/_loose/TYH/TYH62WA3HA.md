---
tag: TYH62WA3HA
kind: problem
type: answer
answer: \frac{23^{1873}+1}{23^{1974}+1}>\frac{23^{1974}+1}{23^{1975}+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is greater: $\frac{23^{1873}+1}{23^{1974}+1}$ or $\frac{23^{1974}+1}{23^{1975}+1}$ ?

30 *. Let $|y| \neq 1$ and $y \neq 0$. It is also known that

$$
x_{1}=\frac{y-1}{y+1}, x_{2}=\frac{x_{1}-1}{x_{1}+1}, x_{3}=\frac{x_{2}-1}{x_{2}+1}, \ldots
$$

What is $y$, if $x_{1974}=3$ ?

31 *. If the equalities hold

$$
x=\frac{a-b}{a+b}, y=\frac{b-c}{b+c}, z=\frac{c-a}{c+a}
$$

then $(1+x)(1+y)(1+z)=(1-x)(1-y)(1-z)$. Prove it.
