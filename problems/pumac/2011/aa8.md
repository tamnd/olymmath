---
tag: QX0JWB3JEA
kind: problem
appearances:
  - at: pumac/2011/aa8
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
    url: https://artofproblemsolving.com/community/c6h1920821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7023
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $1,\alpha_1,\alpha_2,...,\alpha_{10}$ be the roots of the polynomial $x^{11}-1$ . It is a fact that there exists a unique polynomial of the form $f(x) = x^{10}+c_9x^9+ \dots + c_1x$ such that each $c_i$ is an integer, $f(0) = f(1) = 0$ , and for any $1 \leq i \leq 10$ we have $(f(\alpha_i))^2 = -11$ . Find $\left|c_1+2c_2c_9+3c_3c_8+4c_4c_7+5c_5c_6\right|$ .
