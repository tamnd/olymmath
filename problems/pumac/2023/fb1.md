---
tag: TJ4BJEZ571
kind: problem
appearances:
  - at: pumac/2023/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_B_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3234685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73414
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a binary string $S$ (i.e. a string of 0 's and 1's) that contains at least one 0 , we produce a binary string $f(S)$ as follows:
- If the substring 110 occurs in $S$ , replace each instance of 110 with 01 to produce $f(S)$ ;
- Otherwise, replace the leftmost occurrence of 0 in $S$ by 1 to produce $f(S)$ .
Given binary string $S$ of length $n$ , we define the lifetime of $S$ to be the number of times $f$ can be applied to $S$ until the resulting string contains no more 0 's. For example, $$
