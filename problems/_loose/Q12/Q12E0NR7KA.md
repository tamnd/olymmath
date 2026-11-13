---
tag: Q12E0NR7KA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h365022
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4352
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
We have N objects with weights $1, 2,\cdots , N$ grams. We wish to choose two or more of these objects so that the total weight of the chosen objects is equal to average weight of the remaining objects. Prove that

*(a)* (2 points) if $N + 1$ is a perfect square, then the task is possible;

*(b)* (6 points) if the task is possible, then $N + 1$ is a perfect square.
