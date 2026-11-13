---
tag: QVD7JGHGGC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\omega$ be a nonreal $47$th root of unity. Suppose that $\mathcal{S}$ is the set of polynomials of degree at most $46$ and coefficients equal to either $0$ or $1$. Let $N$ be the number of polynomials $Q \in \mathcal{S}$ such that
$$
\sum_{j = 0}^{46} \frac{Q(\omega^{2j}) - Q(\omega^{j})}{\omega^{4j} + \omega^{3j} + \omega^{2j} + \omega^j + 1} = 47.
$$
The prime factorization of $N$ is $p_1^{\alpha_1}p_2^{\alpha_2} \dots p_s^{\alpha_s}$ where $p_1, \ldots, p_s$ are distinct primes and $\alpha_1, \alpha_2, \ldots, \alpha_s$ are positive integers. Compute $\sum_{j = 1}^s p_j\alpha_j$.
