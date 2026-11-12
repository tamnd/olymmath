---
tag: 8E8RT9CMN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834932
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2021
    source: hf-ai-mo-aops
    label: 2021 Princeton University Math Competition
---
We say that a polynomial $p$ is respectful if $\forall x, y \in Z$ , $y - x$ divides $p(y) - p(x)$ , and $\forall x \in Z$ , $p(x) \in Z$ . We say that a respectful polynomial is disguising if it is nonzero, and all of its non-zero coefficients lie between $0$ and $ 1$ , exclusive. Determine $\sum deg(f)\cdot f(2)$ , where the sum includes all disguising polynomials $f$ of degree at most $5$ .
