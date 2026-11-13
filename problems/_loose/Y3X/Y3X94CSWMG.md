---
tag: Y3X94CSWMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219304
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14522
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
For a positive integer $n$ , let $f(n)$ be the integer formed by reversing the digits of $n$ (and removing any leading zeroes). For example $f(14172)=27141$ . Define a sequence of numbers $\{a_n\}_{n\ge 0}$ by $a_0=1$ and for all $i\ge 0$ , $a_{i+1}=11a_i$ or $a_{i+1}=f(a_i)$ . How many possible values are there for $a_8$ ?

*Proposed by James Lin*
