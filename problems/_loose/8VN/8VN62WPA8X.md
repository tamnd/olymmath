---
tag: 8VN62WPA8X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha(n)$ denote the number of 1's in the binary representation of a positive integer $n$. Prove that
(1) $\alpha\left(n^{2}\right) \leqslant \frac{1}{2} \alpha(n)[\alpha(n)+1]$;
(2) The equality in the above inequality holds for infinitely many integers;
(3) There exists a sequence $\left(n_{i}\right)_{1}^{\infty}$, such that
$$
\frac{\alpha\left(n_{i}^{2}\right)}{\alpha\left(n_{i}\right)} \rightarrow 0, i \rightarrow \infty .
$$
(33rd International Mathematical Olympiad Preliminary Problem, 1992)
