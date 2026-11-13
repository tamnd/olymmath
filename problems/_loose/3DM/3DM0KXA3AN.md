---
tag: 3DM0KXA3AN
kind: problem
type: answer
answer: \binom{n+k+1}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the sum of the following series:

$$
\binom{n}{0}+\binom{n+1}{1}+\binom{n+2}{2}+\ldots+\binom{n+k}{k}
$$

where $n$ and $k$ are natural numbers. (The symbol $\binom{n}{k}$ represents the number of ways to choose $k$ elements from a set of $n$ elements, disregarding the order of the elements. As is known, $\binom{n}{k}=\frac{n(n+1)(n+2) \ldots(n+k-1)}{1 \cdot 2 \cdot 3 \cdot \ldots \cdot k}$, and $\binom{n}{0}=1$. These numbers are the coefficients that appear in the expansion of binomials, hence they are also called "binomial coefficients".)
