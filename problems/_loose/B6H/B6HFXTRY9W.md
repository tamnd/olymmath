---
tag: B6HFXTRY9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=156900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the set of functional expressions to be the smallest set of expressions so that the following properties hold:
- Any variable $x_{i}$, or any fixed real number, is a functional expression.
- Given any functional expression $V$, the expression $f(V)$ is a functional expression, and given any two functional expressions $V, W$, the expressions $V+W$ and $V \cdot W$ are functional expressions.

A functional equation is an equation of the form $V=0$ for any functional expression $V$; a function satisfies it if that equation holds for all choices of each $x_{i}$ in the real numbers.
(For example, the equation $f\left(x_{1}\right)+f\left(x_{2}\right)+(-1)\left(x_{1}+x_{2}\right)=0$ is a functional equation satisfied by only the identity function, while the equation $f\left(x_{1}\right)+f\left(x_{2}\right)+(-1) f\left(x_{1}+x_{2}\right)=$ 0 is a functional equation satisfied by infinitely many functions. The equation $f\left(\frac{1}{1+x_{1}^{2}}\right)=0$ is not a functional equation at all.)

Does there exist a functional equation satisfied by a exactly one function $f$, and the function $f$ satisfies $f(\mathbb{R})=\mathbb{Z}$ ?
(Carl Schildkraut)
