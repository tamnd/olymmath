---
tag: R2F2XCHPTR
kind: problem
appearances:
  - at: pumac/2017/ca4
    primary: true
  - at: pumac/2017/cb6
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
    url: https://artofproblemsolving.com/community/c6h1564389
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15916
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The four faces of a tetrahedral die are labelled $0, 1, 2,$ and $3,$ and the die has the property that, when it is rolled, the die promptly vanishes, and a number of copies of itself appear equal to the number on the face the die landed on. For example, if it lands on the face labelled $0,$ it disappears. If it lands on the face labelled $1,$ nothing happens. If it lands on the face labelled $2$ or $3,$ there will then be $2$ or $3$ copies of the die, respectively (including the original). Suppose the die and all its copies are continually rolled, and let $p$ be the probability that they will all eventually disappear. Find $\left\lfloor \frac{10}{p} \right\rfloor$ .
