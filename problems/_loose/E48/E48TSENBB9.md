---
tag: E48TSENBB9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A prime number $p$ has only two distinct divisors - 1 and $p$. When does a natural number have: a) 3; b) 4; c) 5 distinct divisors? List all such cases.

To solve such problems in more complex cases, it is useful to derive a formula for the number of divisors of a natural number.
$995^{\circ}$. Prove that the number of all distinct divisors of a natural number

$$
a=p_{1}^{\alpha_{1}} \cdot p_{2}^{\alpha_{2}} \cdot \ldots \cdot p_{n 1}^{\alpha_{n}}
$$

$\left(p_{1}, p_{2}, \ldots, p_{n}-\right.$ different prime numbers, $\alpha_{1}, \alpha_{2}, \ldots, \alpha_{n}$ - natural numbers) is calculated by the formula:

$$
\tau(a)=\left(\alpha_{1}+1\right)\left(\alpha_{2}+1\right) \ldots\left(\alpha_{n}+1\right)
$$

( $\tau$ - the Greek letter "tau").
