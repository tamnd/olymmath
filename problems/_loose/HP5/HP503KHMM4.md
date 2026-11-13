---
tag: HP503KHMM4
kind: problem
type: answer
answer: \binom{n}{r}\frac{n!}{(n-r)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a group of $n$ girls $F_{1}, F_{2}, \ldots, F_{n}$ and $2 n-1$ boys $G_{1}, G_{2}, \ldots, G_{2 n-1}$. The girl $F_{i}$ knows the boys $G_{1}, \ldots, G_{2 i-1}$ and no others.

We want to form pairs to make the girls and boys dance. Show that the number of ways to form $r \leq n$ pairs such that each girl knows the boy is:

$$
\binom{n}{r} \frac{n!}{(n-r)!}
$$
