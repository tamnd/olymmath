---
tag: A58KQ77SRP
kind: problem
appearances:
  - at: pumac/2021/aa6
    primary: true
  - at: pumac/2021/ab8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73314
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a polynomial. We say that a complex number $p$ is a double attractor if there exists a polynomial $h(x)$ so that $f(x)-f(p) = h(x)(x-p)^2$ for all x \in R. Now, consider the polynomial $$ f(x) = 12x^5 - 15x^4 - 40x^3 + 540x^2 - 2160x + 1, $$ and suppose that it's double attractors are $a_1, a_2, ... , a_n$ . If the sum $\sum^{n}_{i=1}|a_i|$ can be written as $\sqrt{a} +\sqrt{b}$ , where $a, b$ are positive integers, find $a + b$ .
