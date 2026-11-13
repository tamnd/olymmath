---
tag: FDY63ZGP78
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h3107388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=757
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
In a school, every pair of students are either friends or strangers. Friendship is mutual, and no student is friends with themselves. A sequence of (not necessarily distinct) students $A_1, A_2, \dots, A_{2023}$ is called *mischievous* if

$\bullet$ Total number of friends of $A_1$ is odd.
$\bullet$ $A_i$ and $A_{i+1}$ are friends for $i=1, 2, \dots, 2022$ .
$\bullet$ Total number of friends of $A_{2023}$ is even.

Prove that the total number of *mischievous* sequences is even.
