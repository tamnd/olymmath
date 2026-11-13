---
tag: TWHNSMD1P8
kind: problem
type: answer
answer: \pi(x)\geqslant\ln(\lnx)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We recall the key point of Euclid's proof of the existence of an infinity of prime numbers:

If $p_{1}, p_{2}, \ldots, p_{r}$ are prime numbers, then

$$
\prod_{k=1}^{r} p_{k}+1
$$

admits a prime divisor that is not among the $\left(p_{i}\right)_{1 \leqslant i \leqslant r}$.

By adapting this argument, show that the $n$-th prime number is less than $2^{2^{n}}$ and deduce that there exists a constant $c>0$ such that, for any real $x$,

$$
\pi(x) \geqslant c \ln (\ln x)
$$
