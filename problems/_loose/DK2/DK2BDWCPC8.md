---
tag: DK2BDWCPC8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460026
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8438
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210502
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
There are $20$ geese numbered $1-20$ standing in a line. The even numbered geese are standing at the front in the order $2,4,\dots,20,$ where $2$ is at the front of the line. Then the odd numbered geese are standing behind them in the order, $1,3,5,\dots ,19,$ where $19$ is at the end of the line. The geese want to rearrange themselves in order, so that they are ordered $1,2,\dots,20$ (1 is at the front), and they do this by successively swapping two adjacent geese. What is the minimum number of swaps required to achieve this formation?

*Author: Ray Li*
