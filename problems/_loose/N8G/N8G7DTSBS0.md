---
tag: N8G7DTSBS0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider a polynomial:

$$
f(x)=x^{2020}+a_{2019} x^{2019}+\cdots+a_{1} x+a_{0}
$$

Albert Einstein and Homer Simpson are playing the following game. Taking turns, they choose one of the coefficients $a_{0}, \ldots, a_{2019}$, and assign it a real value. Once a value is assigned to a coefficient, it cannot be changed. Albert goes first. Homer's goal is to make $f(x)$ divisible by a polynomial $m(x)$, fixed in advance, and Albert's goal is to prevent this. Which player has a winning strategy if:

a) $m(x)=x^{2020} ?$

b) $m(x)=x^{2}+1$ ?

(We recall that the polynomial $m(x)$ divides the polynomial $f(x)$ if there exists a polynomial $g(x)$ such that $f(x)=m(x) g(x))$.

Solved by Matthieu Vogel
