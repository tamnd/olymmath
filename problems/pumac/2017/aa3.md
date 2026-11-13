---
tag: J1JYETZNCN
kind: problem
appearances:
  - at: pumac/2017/aa3
    primary: true
  - at: pumac/2017/ab5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1549827
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15897
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Gamma$ be the maximum possible value of $a+3b+9c$ among all triples $(a,b,c)$ of positive real numbers such that
$$ \log_{30}(a+b+c) = \log_{8}(3a) = \log_{27} (3b) = \log_{125} (3c) .$$
If $\Gamma = \frac{p}{q}$ where $p$ and $q$ are relatively prime positive integers, then find $p+q$ .
