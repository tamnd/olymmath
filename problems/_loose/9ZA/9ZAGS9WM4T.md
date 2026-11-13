---
tag: 9ZAGS9WM4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $\mathbb{Z}[x]$ be the set of polynomials with integer coefficients. Let $q$ be a prime number. A polynomial $P \in \mathbb{Z}[x]$ is called **q-reducible** if there exists $f_q, g_q \in \mathbb{Z}[x]$ such that $f_q, g_q$ have at least one non-constant coefficient which is not divisible by $q$, and all the coefficients of polynomial $Q(x) = P(x) - f_q(x)g_q(x)$ are divisible by $q$.

a. Prove that there exists infinitely many prime numbers $q$ such that the following polynomial is $q$-reducible
$$
P(x) = x^4 - 2x^3 + 3x^2 - 2x - 5
$$

b. Does there exist a polynomial $P \in \mathbb{Z}[x]$ which is $q$-reducible for every prime number $q$ but is irreducible over $\mathbb{Z}[x]$?
