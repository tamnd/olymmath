---
tag: C7TARNCQGC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541566
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
A permutation of $\{1, 2, 3, \dots, 16\}$ is called \emph{blocksum-simple} if there exists an integer $n$ such that the sum of any $4$ consecutive numbers in the permutation is either $n$ or $n+1$ . How many blocksum-simple permutations are there?

*Proposed by Yannick Yao*
