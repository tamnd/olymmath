---
tag: SF7DCK7KT2
kind: problem
type: answer
answer: s^2 = 3^{a-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211709
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(x)$ and $q(x)$ be two polynomials, both of which have their sum of coefficients equal to $s.$ Let $p,q$ satisfy $p(x)^3-q(x)^3=p(x^3)-q(x^3).$ Show that
(i) There exists an integer $a\geq1$ and a polynomial $r(x)$ with $r(1)\neq0$ such that
$$p(x)-q(x)=(x-1)^ar(x).$$
(ii) Show that $s^2=3^{a-1},$ where $a$ is described as above.
