---
tag: ZMTR1N63HQ
kind: problem
type: answer
answer: 2T_{n}(\frac{x}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials with the leading coefficient 1, the deviation of which from zero on the interval from -2 to +2 has the smallest possible value.

$134^{**}$. Find a polynomial of degree $n$ with the leading coefficient 1, the deviation of which from zero at the set of $n+1$ points $x=0,1,2, \ldots, n$ has the smallest possible value (the deviation of a function $f(x)$ from zero at the set of points $x=a, x=b, x=c, \ldots, x=l$ is the largest of the absolute values of the function at these points, i.e., the largest of the numbers $|f(a)|,|f(b)|, \ldots,|f(i)|$).

135 *. Let $A_{1}, A_{2}, \ldots, A_{n}$ be some $n$ points on the plane. Prove that on each segment of length $l$ there exists a point $M$ such that the product

$$
M A_{1} \cdot M A_{2} \ldots M A_{n}
$$

is not less than $2\left(\frac{l}{4}\right)^{n}$. How should the points $A_{1}, A_{2}, \ldots, A_{n}$ be arranged so that on a given segment $P Q$ of length $l$ it is impossible to find a point $M$ such that the product

$$
M A_{1} \cdot M A_{2} \ldots M A_{n}
$$

is greater than $2\left(\frac{l}{4}\right)^{n}$?
