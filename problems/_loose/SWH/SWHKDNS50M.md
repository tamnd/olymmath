---
tag: SWHKDNS50M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that a polynomial of odd degree has at least one real root.

We can view this theorem differently:

Proposition 2.27. A polynomial of degree at most $n$ having at least $n+1$ roots is the zero polynomial (all its coefficients are zero).

The following property is of great utility:

Proposition 2.28. Let $P$ be a polynomial for which $a$ is a root. There exists a polynomial $Q$ such that $P=(X-a) Q$.

This can be proven by performing Euclidean division of $P$ by $X-a$. Finding roots of a polynomial thus allows it to be factored. Some roots can "divide" the polynomial more than others:

Definition 2.29. Let $P$ be a polynomial, a $k$-th root of $P$ is a real number $a$ such that $(X-a)^{k}$ divides $P$, but not $(X-a)^{k+1}$. We say that the multiplicity of the said root is $k$.

Example 2.30. For degree 2, if $P(X)=a X^{2}+b X+c$, we distinguish 3 cases:

- if the discriminant $\Delta:=b^{2}-4 a c > 0$, there are two distinct real roots.
- if the discriminant $\Delta:=b^{2}-4 a c = 0$, there is one real root with multiplicity 2.
- if the discriminant $\Delta:=b^{2}-4 a c < 0$, there are no real roots.
