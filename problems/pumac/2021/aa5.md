---
tag: H30A5DFT4S
kind: problem
appearances:
  - at: pumac/2021/aa5
    primary: true
  - at: pumac/2021/ab7
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
    url: https://artofproblemsolving.com/community/c6h2834896
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73313
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sum $$ S =\sum^{2021}_{j=1} \left|\sin \frac{2\pi j}{2021}\right|. $$ The value of $S$ can be written as $\tan \left( \frac{c\pi}{d} \right)$ for some relatively prime positive integers $c, d$ , satisfying $2c < d$ . Find the value of $c + d$ .
