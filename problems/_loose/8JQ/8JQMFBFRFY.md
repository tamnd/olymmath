---
tag: 8JQMFBFRFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\left\{x_{k}\right\}$ of real numbers is said to be $C$-convergent to a real number $z$ if

$$
\lim _{n \rightarrow \infty}\left(\frac{1}{n} \sum_{k=1}^{n} x_{k}\right)=z
$$

holds.

A function $f$ is said to be $C$-continuous at a point $a$ in its domain if for every sequence $\left\{x_{k}\right\}$ that is $C$-convergent to $a$ and whose all terms $x_{k}$ lie in the domain of $f$, the sequence $\left\{f\left(x_{k}\right)\right\}$ is always $C$-convergent to $f(a)$.

Show:

a) If $A, B$, and $a$ are arbitrary real numbers, then:

The function defined by $f(x)=A x+B$ for all real numbers $x$ is $C$-continuous at the point $a$.

b) If a function $f$ defined for all real numbers $x$ has the function value $f(0)=0$ at the point $a=0$ and is $C$-continuous at this point, then for arbitrary real $p, q$ the equation $f(p+q)=$ $f(p)+f(q)$ holds.
