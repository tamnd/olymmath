---
tag: 9VSZ63CFXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585533
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11658
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Qing initially writes the ordered pair $(1,0)$ on a blackboard. Each minute, if the pair $(a,b)$ is on the board, she erases it and replaces it with one of the pairs $(2a-b,a)$ , $(2a+b+2,a)$ or $(a+2b+2,b)$ . Eventually, the board reads $(2014,k)$ for some nonnegative integer $k$ . How many possible values of $k$ are there?

*Proposed by Evan Chen*
