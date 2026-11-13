---
tag: YAV1J6K4DH
kind: problem
appearances:
  - at: pumac/2011/na5
    primary: true
  - at: pumac/2011/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920870
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(n)$ denote the number of divisors of $n$ (including itself). You are given that $$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.$$ Find $p(6)$ , where $p(x)$ is the unique polynomial with rational coefficients satisfying $$p(\pi) = \sum_{n=1}^{\infty} \frac{d(n)}{n^2}.$$
