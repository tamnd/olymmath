---
tag: XH6ZGDDYZ4
kind: problem
appearances:
  - at: pumac/2021/aa2
    primary: true
  - at: pumac/2021/ab4
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
    url: https://artofproblemsolving.com/community/c6h2834889
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73310
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a bijective function $g : R \to R$ , we say that a function $f : R \to R$ is its superinverse if it satisfies the following identity $(f \circ g)(x) = g^{-1}(x)$ , where $g^{-1}$ is the inverse of $g$ . Given $g(x) = x^3 + 9x^2 + 27x + 81$ and $f$ is its superinverse, find $|f(-289)|$ .
