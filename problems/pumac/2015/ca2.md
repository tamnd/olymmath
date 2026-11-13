---
tag: 7HJZKDJKAX
kind: problem
appearances:
  - at: pumac/2015/ca2
    primary: true
  - at: pumac/2015/cb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1600000
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12967
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Andrew has $10$ balls in a bag, each a different color. He randomly picks a ball from the bag $4$ times, with replacement. The expected number of distinct colors among the balls he picks is $\tfrac{p}{q}$ , where $\gcd(p, q) = 1$ and $p, q > 0$ . What is $p + q$ ?
