---
tag: N37AZ61DDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8421
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Let $s_n$ be the number of solutions to $a_1 + a_2 + a_3 +a _4 + b_1 + b_2 = n$ , where $a_1,a_2,a_3$ and $a_4$ are elements of the set $\{2, 3, 5, 7\}$ and $b_1$ and $b_2$ are elements of the set $\{ 1, 2, 3, 4\}$ . Find the number of $n$ for which $s_n$ is odd.

*Author: Alex Zhu*
