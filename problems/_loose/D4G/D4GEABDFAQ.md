---
tag: D4GEABDFAQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h366958
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1981
    source: hf-ai-mo-aops
    label: 1981 IMO Shortlist
---
Let $P$ be a polynomial of degree $n$ satisfying
$$P(k) = \binom{n+1}{k}^{-1} \text{ for } k = 0, 1, . . ., n.$$
Determine $P(n + 1).$
