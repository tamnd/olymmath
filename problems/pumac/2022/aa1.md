---
tag: 4EAC3PQ1KQ
kind: problem
appearances:
  - at: pumac/2022/aa1
    primary: true
  - at: pumac/2022/ab3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Algebra_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444880
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73367
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two polynomials $f$ and $g$ satisfying $f(x) \ge g(x)$ for all real $x,$ a *separating line* between $f$ and $g$ is a line $h(x) = mx+k$ such that $f(x) \ge h(x) \ge g(x)$ for all real $x.$ Consider the set of all possible separating lines between $f(x) = x^2 - 2x + 5$ and $g(x) = 1 - x^2.$ The set of slopes of these lines is a closed interval $[a,b].$ Determine $a^4 + b^4.$
