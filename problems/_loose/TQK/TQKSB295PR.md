---
tag: TQKSB295PR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038197
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28988
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
Peter and Paul play the following game. First, Peter chooses some positive integer $a$ with the sum of its digits equal to $2012$ . Paul wants to determine this number, he knows only that the sum of the digits of Peter's number is $2012$ . On each of his moves Paul chooses a positive integer $x$ and Peter tells him the sum of the digits of $|x - a|$ . What is the minimal number of moves in which Paul can determine Peter's number for sure?
