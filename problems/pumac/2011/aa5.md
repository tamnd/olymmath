---
tag: ASSNZ7ZBRA
kind: problem
appearances:
  - at: pumac/2011/aa5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920818
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let
$$f_1(x) = \frac{1}{x} \text{and} f_2(x) = 1 - x$$
Let $H$ be the set of all compositions of the form $h_1 \circ h_2 \circ \ldots \circ h_k$ , where each $h_i$ is either $f_1$ or $f_2$ . For all $h$ in $H$ , let $h^{(n)}$ denote $h$ composed with itself $n$ times. Find the greatest integer $N$ such that $\pi, h(\pi), \ldots, h^{(N)}(\pi)$ are all distinct for some $h$ in $H$ .
