---
tag: QTVQHCY4KJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541544
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78592
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267439
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
The USAMO is a $6$ question test. For each question, you submit a positive integer number $p$ of pages on which your solution is written. On the $i$ th page of this question, you write the fraction $i/p$ to denote that this is the $i$ th page out of $p$ for this question. When you turned in your submissions for the $2017$ USAMO, the bored proctor computed the sum of the fractions for all of the pages which you turned in. Surprisingly, this number turned out to be $2017$ . How many pages did you turn in?

*Proposed by Tristan Shin*
