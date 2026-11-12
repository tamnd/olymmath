---
tag: ETB780FW8K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Second Mertens' Theorem. a) Let 2, $3, 5, 7, 11, \ldots, p$ be all prime numbers not exceeding the integer $N$. Prove that for any $N$, the expression

$$
\frac{1}{2}+\frac{1}{3}+\frac{1}{5}+\frac{1}{7}-\frac{1}{11}+\ldots+\frac{1}{p}-\ln \ln N
$$

( $\ln N$ - the natural logarithm of $N$; see above, p. 75) in absolute value will be less than some number $T$ (for example, the number 15 can be taken as $T$).

b) Prove that the difference

$$
\frac{1}{2}+\frac{1}{3}+\frac{1}{5}+\frac{1}{7}+\frac{1}{11}+\cdots+\frac{1}{p}-\ln \ln N
$$

as $N \rightarrow \infty$ tends to some definite limit $\beta^{1}$.

Thus, the approximate equality

$$
\frac{1}{2}+\frac{1}{3}+\frac{1}{5}+\frac{1}{7}+\frac{1}{11}+\ldots+\frac{1}{p} \approx \ln \ln N+\beta
$$

holds, the accuracy of which increases indefinitely with the growth of $N$.
