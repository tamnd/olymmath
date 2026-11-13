---
tag: 3VBGSGDQ6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With $R^{n}$ we denote the set of all $n$-tuples of real numbers. In $R^{n}$, addition is defined by

$$
\left(x_{1}, x_{2}, \ldots, x_{n}\right)+\left(y_{1}, y_{2}, \ldots, y_{n}\right)=\left(x_{1}+y_{1}, x_{2}+y_{2}, \ldots, x_{n}+y_{n}\right)
$$

and multiplication by a real number $\lambda$ is defined by

$$
\lambda\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\left(\lambda x_{1}, \lambda x_{2}, \ldots, \lambda x_{n}\right), \lambda \in \mathbb{R}
$$

Let $M$ be a subset of $R^{n}$ such that for any $\left(x_{1}, x_{2}, \ldots, x_{n}\right),\left(y_{1}, y_{2}, \ldots, y_{n}\right) \in M$, for every $\lambda$ with $0 \leq \lambda \leq 1$,

$$
\lambda\left(x_{1}, x_{2}, \ldots, x_{n}\right)+(1-\lambda)\left(y_{1}, y_{2}, \ldots, y_{n}\right) \in M
$$

An $n$-tuple $\left(s_{1}, s_{2}, \ldots, s_{n}\right) \in M$ is called an $x$-element of $M$ if from

$$
\left(s_{1}, s_{2}, \ldots, s_{n}\right)=\frac{1}{2}\left(x_{1}, x_{2}, \ldots, x_{n}\right)+\frac{1}{2}\left(y_{1}, y_{2}, \ldots, y_{n}\right)
$$

with $\left(x_{1}, x_{2}, \ldots, x_{n}\right),\left(y_{1}, y_{2}, \ldots, y_{n}\right) \in M$, it always follows that

$$
s_{1}=x_{1}=y_{1}, s_{2}=x_{2}=y_{2}, \ldots, s_{n}=x_{n}=y_{n}
$$

and thus $\left(s_{1}, s_{2}, \ldots, s_{n}\right)=\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\left(y_{1}, y_{2}, \ldots, y_{n}\right)$.

Show: $\left(s_{1}, s_{2}, \ldots, s_{n}\right)$ is an $x$-element if and only if for any $\lambda$ with $0<\lambda<1$, from

$$
\left(s_{1}, s_{2}, \ldots, s_{n}\right)=\lambda\left(x_{1}, x_{2}, \ldots, x_{n}\right)+(1-\lambda)\left(y_{1}, y_{2}, \ldots, y_{n}\right)
$$

with $\left(x_{1}, x_{2}, \ldots, x_{n}\right),\left(y_{1}, y_{2}, \ldots, y_{n}\right) \in M$, it always follows that

$$
s_{1}=x_{1}=y_{1}, s_{2}=x_{2}=y_{2}, \ldots, s_{n}=x_{n}=y_{n}
$$

and thus

$$
\left(s_{1}, s_{2}, \ldots, s_{n}\right)=\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\left(y_{1}, y_{2}, \ldots, y_{n}\right)
$$
