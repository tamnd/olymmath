---
tag: FXJM1TS2NG
kind: problem
appearances:
  - at: pumac/2011/ca5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920832
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7032
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\sigma$ be a random permutation of $\{0, 1, \ldots, 6\}$ . Let $L(\sigma)$ be the length of the longest initial monotonic consecutive subsequence of $\sigma$ not containing $0$ ; for example, $$L(\underline{2,3,4},6,5,1,0) = 3,\ L(\underline{3,2},4,5,6,1,0) = 2,\ L(0,1,2,3,4,5,6) = 0.$$ If the expected value of $L(\sigma)$ can be written as $\frac mn$ , where $m$ and $n$ are relatively prime positive integers, then find $m + n$ .
