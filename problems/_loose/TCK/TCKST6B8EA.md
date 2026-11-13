---
tag: TCKST6B8EA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two original definitions of a convex function. It was first introduced by Jensen in the form:
$$
f\left(\frac{x_{1}+x_{2}}{2}\right) \leqslant \frac{1}{2}\left(f\left(x_{1}\right)+f\left(x_{2}\right)\right),
$$

which later evolved into the following form:
$$
f\left(\lambda x_{1}+(1-\lambda) x_{2}\right) \leqslant \lambda f\left(x_{1}\right)+(1-\lambda) f\left(x_{2}\right) .
$$

In this paper, functions satisfying (2) are called convex functions (Convex function); functions satisfying the reverse inequality are called concave functions (Concave function). This has been consistent in Western mathematical literature, but there are discrepancies in this regard in university mathematics textbooks in our country. Among more than ten advanced mathematics textbooks for non-mathematics majors, textbooks [1-6] are consistent with the Western approach, or they add the correspondence of "convex" with "convex" and "concave" with "concave"; while textbooks [7-15] correspond "concave" with "convex" and "convex" with "concave," and even introduce the concepts of "upper concave" and "lower concave," causing inconvenience for many teachers' teaching and students' learning.

Regarding the relationship between (1) and (2), there is the following theorem:
Theorem 1 Continuous functions satisfying (1) also satisfy (2).
