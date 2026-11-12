---
tag: KE8R94CZCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let $d_{1}, d_{2}, d_{8}, \ldots, d_{n}$ be the distances from a point $M$, located on the arc $A_{2} A_{n}$ of the circle circumscribed around a regular $n$-gon $A_{1} A_{2} \ldots A_{n}$, to the vertices $A_{2}, A_{2}, A_{2}, \ldots, A_{n}$ of this $n$-gon. Prove that

$$
\frac{1}{d_{1} d_{2}}+\frac{1}{d_{2} d_{2}}+\frac{1}{d_{2} d_{4}}+\ldots+\frac{1}{d_{n-1} d_{n}}=\frac{1}{d_{1} d_{n}}
$$

[In particular, for $n=3$ we get:

$$
\frac{1}{d_{1} d_{2}}+\frac{1}{d_{2} d_{3}}=\frac{1}{d_{1} d_{3}}
$$

from which

$$
d_{3}+d_{1}=d_{2}
$$

or in words: the sum of the distances from any point on the circle circumscribed around an equilateral triangle to the two nearest vertices of the triangle is always equal to the distance to the third vertex.]

b) Prove that if $n$ is odd, then in the notation of part a) the following equality holds:

$$
d_{1}+d_{3}+d_{5}+\ldots+d_{n}=d_{2}+d_{4}+\ldots+d_{n-1}
$$

[In particular, for $n=3$ we arrive at the same statement as in the case of part a).]
