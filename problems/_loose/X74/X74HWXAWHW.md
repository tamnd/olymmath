---
tag: X74HWXAWHW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Gaussian Integers) The Gaussian integers $\mathbb{Z}*$ are all numbers of the form

$$
a=a_{1}+i a_{2}, a_{1}, a_{2} \in \mathbb{Z}
$$

We define the norm of $a$ by $N(a)=a_{1}^{2}+a_{2}^{2}$, and we call the elements of $\mathbb{Z}*$ with norm 1 the units.

1. Verify that $N(a b)=N(a) N(b)$.
2. Prove the existence of Euclidean division: Let $a$ and $b$ be two Gaussian integers, show that we can find two Gaussian integers $q$ and $r$ (not necessarily unique) such that

- $a=b q+r$

- $N(r)<N(b)$

Deduce the Bézout's theorem for Gaussian integers.

3. We define the following two concepts:

- we say that $p$ is irreducible if its only divisors are 1 and itself (up to a unit)
- we say that $q$ is prime if $q|a b \Rightarrow q| a$ or $q \mid b$.

Show that in $\mathbb{Z}*$, $p$ prime $\Leftrightarrow p$ irreducible. (Hint: one direction is easy and the other direction uses Bézout)

4. Prove the existence and uniqueness of the prime factorization in $\mathbb{Z}*$.
5. Show that a Gaussian integer $a$ is prime if and only if one of the following cases is satisfied:

- $N(a)=2$ or $N(a)=p$ with $p$ an integer prime $\equiv 1[4]$

- $N(a)=q^{2}$ with $q$ an integer prime $\equiv 3[4]$
