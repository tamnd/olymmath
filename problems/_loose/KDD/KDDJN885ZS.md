---
tag: KDDJN885ZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164282
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78544
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
You live in an economy where all coins are of value $1/k$ for some positive integer $k$ (i.e. $1, 1/2, 1/3, \dots$ ). You just recently bought a coin exchanging machine, called the *Cape Town Machine*. For any integer $n > 1$ , this machine can take in $n$ of your coins of the same value, and return a coin of value equal to the sum of values of those coins (provided the coin returned is part of the economy). Given that the product of coins values that you have is $2015^{-1000}$ , what is the maximum numbers of times you can use the machine over all possible starting sets of coins?

*Proposed by Yang Liu*
