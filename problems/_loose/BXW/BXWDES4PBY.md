---
tag: BXWDES4PBY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055656
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
For positive integers $i = 2, 3, \ldots, 2020$ , let $$
a_i = \frac{\sqrt{3i^2+2i-1}}{i^3-i}.
$$Let $x_2$ , $\ldots$ , $x_{2020}$ be positive reals such that $x_2^4 + x_3^4 + \cdots + x_{2020}^4 = 1-\frac{1}{1010\cdot 2020\cdot 2021}$ . Let $S$ be the maximum possible value of $$
\sum_{i=2}^{2020} a_i x_i (\sqrt{a_i} - 2^{-2.25} x_i)
$$ and let $m$ be the smallest positive integer such that $S^m$ is rational. When $S^m$ is written as a fraction in lowest terms, let its denominator be $p_1^{\alpha_1} p_2^{\alpha_2}\cdots p_k^{\alpha_k}$ for prime numbers $p_1 < \cdots < p_k$ and positive integers $\alpha_i$ . Compute $p_1\alpha_1+p_2\alpha_2 + \cdots + p_k\alpha_k$ .

*Proposed by Edward Wan and Brandon Wang*
