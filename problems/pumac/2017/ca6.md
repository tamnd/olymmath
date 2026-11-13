---
tag: Y2N5J01F4K
kind: problem
appearances:
  - at: pumac/2017/ca6
    primary: true
  - at: pumac/2017/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15917
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Jackson begins at $1$ on the number line. At each step, he remains in place with probability $85\%$ and increases his position on the number line by $1$ with probability $15\%$ . Let $d_n$ be his position on the number line after $n$ steps, and let $E_n$ be the expected value of $\tfrac{1}{d_n}$ . Find the least $n$ such that $\tfrac{1}{E_n}
> 2017$ .
