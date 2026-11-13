---
tag: 4R3NTK3RPJ
kind: problem
appearances:
  - at: pumac/2015/fa2
    primary: true
  - at: pumac/2015/fb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165931
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12949
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an odd prime number $p$ , let $S$ denote the following sum taken modulo $p$ :
$$ S \equiv \frac{1}{1 \cdot 2} + \frac{1}{3\cdot 4} + \ldots + \frac{1}{(p-2)\cdot(p-1)} \equiv \sum_{i=1}^{\frac{p-1}{2}} \frac{1}{(2i-1) \cdot 2i} \pmod p$$
Prove that $p^2 | 2^p - 2$ if and only if $S \equiv 0 \pmod p$ .
