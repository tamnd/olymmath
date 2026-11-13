---
tag: RSET4CY1BR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219307
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14525
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
A *9-cube* is a nine-dimensional hypercube (and hence has $2^9$ vertices, for example). How many five-dimensional faces does it have?

(An $n$ dimensional hypercube is defined to have vertices at each of the points $(a_1,a_2,\cdots ,a_n)$ with $a_i\in \{0,1\}$ for $1\le i\le n$ )

*Proposed by Evan Chen*
