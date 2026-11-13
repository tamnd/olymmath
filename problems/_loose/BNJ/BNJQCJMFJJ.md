---
tag: BNJQCJMFJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For some positive integer $n$, let $P(x)$ be an $n$th degree polynomial with real coefficients.

*Note: you may cite, without proof, the Fundamental Theorem of Algebra, which states that every non-constant polynomial with complex coefficients has a complex root.*

(a) Show that there is an integer $k \ge \frac{n}{2}$ and a sequence of non-constant polynomials with real coefficients $Q_1(x), Q_2(x), \dots, Q_k(x)$ such that
$$
P(x) = \prod_{i = 1}^k Q_i(x).
$$

(b) If $n$ is odd, then show that $P(x)$ has a real root.

(c) Let $a$ and $b$ be real numbers, and let $m$ be a positive integer. If $\zeta = a + bi$ is a nonreal root of $P(x)$ of multiplicity $m$, then show that $\overline{\zeta} = a - bi$ is a nonreal root of $P(x)$ of multiplicity $m$.
