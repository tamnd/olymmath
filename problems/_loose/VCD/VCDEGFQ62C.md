---
tag: VCDEGFQ62C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2013125
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49531
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2003
    source: hf-ai-mo-aops
    label: 2003 Abels Math Contest (Norwegian MO)
---
Let $m> 3$ be an integer. At a camp there are more than $m$ participants. The camp manager discovers that every time he picks out the camp participants, they say they have exactly one mutual friend among the participants. Which is the largest possible number of participants at the camp?
(If $A$ is a friend of $B, B$ is also a friend of $A$ . A person is not considered a friend of himself.)
