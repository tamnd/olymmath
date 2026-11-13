---
tag: C0ZA7NC0DA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78586
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267433
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
For any positive integer $n$ , let $S_n$ denote the set of positive integers which cannot be written in the form $an+2017b$ for nonnegative integers $a$ and $b$ . Let $A_n$ denote the average of the elements of $S_n$ if the cardinality of $S_n$ is positive and finite, and $0$ otherwise. Compute $$\left\lfloor \sum_{n=1}^{\infty}\frac{A_n}{2^n}\right\rfloor.$$

*Proposed by Tristan Shin*
