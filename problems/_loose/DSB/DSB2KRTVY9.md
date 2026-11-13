---
tag: DSB2KRTVY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611758
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11670
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213627
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
Let $a$ and $b$ be randomly selected three-digit integers and suppose $a > b$ .
We say that $a$ is *clearly bigger* than $b$ if each digit of $a$ is larger than the corresponding digit of $b$ .
If the probability that $a$ is clearly bigger than $b$ is $\tfrac mn$ , where $m$ and $n$ are relatively prime integers,
compute $m+n$ .

*Proposed by Evan Chen*
