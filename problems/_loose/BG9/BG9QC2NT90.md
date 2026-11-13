---
tag: BG9QC2NT90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Find all prime numbers $p$ satisfying the following property: for all integers $a, b \in \mathbb{Z}$, if $p \mid (a^2 + b^2)$ then $p \mid a$ and $p \mid b$.

(2) Show that there are infinitely many prime numbers congruent to 1 modulo 4.

Theorem 58 (Law of Quadratic Reciprocity). Let $p$ and $q$ be two odd prime numbers.

- If at least one of the two numbers $p$ and $q$ is congruent to 1 modulo 4, then $q$ is a quadratic residue modulo $p$ if and only if $p$ is a quadratic residue modulo $q$;
- If both numbers $p$ and $q$ are congruent to 3 modulo 4, then $q$ is a quadratic residue modulo $p$ if and only if $p$ is not a quadratic residue modulo $q$.

Using the Legendre symbol, this result can be reformulated as follows: for all odd prime numbers $p$ and $q$, we have $\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \frac{q-1}{2}} \left(\frac{p}{q}\right)$.

This theorem says nothing about the case where $p=2$. For this, we have the following proposition:

Proposition 59. Let $p$ be an odd prime number. Then 2 is a quadratic residue modulo $p$ if and only if $p$ is congruent to 1 or -1 modulo 8. In other words, $\left(\frac{2}{p}\right) = (-1)^{\frac{p^2-1}{8}}$.

With the law of quadratic reciprocity and the preceding proposition, we can quickly determine whether an integer is or is not a quadratic residue modulo a prime number $p$. We can also, to simplify calculations (even though it is not really necessary), use the fact that -1 is a quadratic residue modulo $p$ if and only if $p$ is congruent to 1 or 2 modulo 4, in other words $\left(\frac{-1}{p}\right) = (-1)^{\frac{p-1}{2}}$.
