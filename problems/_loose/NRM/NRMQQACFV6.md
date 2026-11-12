---
tag: NRMQQACFV6
kind: problem
type: answer
answer: q
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let now $q$ and $p+1$ be divisible by 3. Represent the given polynomial in the form

$$
Q(x)=x^{3}-x+(p+1) x+q=x(x-1)(x+1)+(p+1) x+q
$$

The first term is divisible by 3 for any integer $x$. The second and third terms are divisible by 3 by the choice of $p, q$.
