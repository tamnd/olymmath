---
tag: AK9KY1BQBK
kind: problem
appearances:
  - at: pumac/2015/ca3
    primary: true
  - at: pumac/2015/cb5
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
    url: https://artofproblemsolving.com/community/c6h1600001
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12968
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a random permutation of the set $\{1, 2, . . . , 2015\}$ . In other words, for each $1 \le i \le 2015$ , $i$ is sent to the element $a_i$ where $a_i \in \{1, 2, . . . , 2015\}$ and if $i \neq j$ , then $a_i \neq a_j$ . What is the expected number of ordered pairs $(a_i, a_j )$ with $i - j > 155$ and $a_i - a_j > 266$ ?
