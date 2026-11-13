---
tag: 2WDY202T8P
kind: problem
appearances:
  - at: pumac/2020/nb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_B_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73242
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Last year, the U.S. House of Representatives passed a bill which would make Washington, D.C. into the $51$ st state. Naturally, the mathematicians are upset that Congress won't prioritize mathematical interest of flag design in choosing how many U.S. states there should be. Suppose the U.S. flag must contain, as it does now, stars arranged in rows alternating between $n$ and $n - 1$ stars, starting and ending with rows of n stars, where $n \ge 2$ is some integer and the flag has more than one row. What is the minimum number of states that the U.S. would need to contain so that there are at least three different ways, excluding rotations, to arrange the stars on the flag?
