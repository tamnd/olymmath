---
tag: N8EEX4YD7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F(x_1,..., x_n)$ be a polynomial with real coefficients in$ n > 1$ "indeterminate" variables $x_1,..., x_n$. We say that $F$ is $n$-*alternating *if for all integers $1 \le i < j \le n$, $$F(x_1,..., x_i,..., x_j,..., x_n) = =F(x_1,..., x_j,..., x_i,..., x_n),$$ i.e. swapping the order of indeterminates $x_i, x_j$ flips the sign of the polynomial. For example, $x^2_1x_2 - x^2_2x_1$ is $2$-alternating, whereas $x_1x_2x_3 +2x_2x_3$ is not $3$-alternating.

*Note: two polynomials $P(x_1,..., x_n)$ and $Q(x_1,..., x_n)$ are considered equal if and only if each monomial constituent $ax^{k_1}_1... x^{k_n}_n$ of $P$ appears in $Q$ with the same coefficient $a$, and vice versa. This is equivalent to saying that $P(x_1,..., x_n) = 0$ if and only if every possible monomial constituent of $P$ has coefficient $0$.
*
(1) Compute a $3$-alternating polynomial of degree $3$.
(2) Prove that the degree of any nonzero $n$-alternating polynomial is at least ${n \choose 2}$.
