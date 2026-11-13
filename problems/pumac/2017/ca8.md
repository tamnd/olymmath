---
tag: 6Q7M5X5WAT
kind: problem
appearances:
  - at: pumac/2017/ca8
    primary: true
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
    url: https://artofproblemsolving.com/community/c6h1564395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15920
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bob chooses a $4$ -digit binary string uniformly at random, and examines an infinite sequence of uniformly and independently random binary bits. If $N$ is the least number of bits Bob has to examine in order to find his chosen string, then find the expected value of $N$ . For example, if Bob's string is $0000$ and the stream of bits begins $101000001 \dots$ , then $N = 7$ .
