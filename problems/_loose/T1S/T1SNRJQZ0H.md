---
tag: T1SNRJQZ0H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1924946
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18249
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Romania Team Selection Test
---
For a natural number $ n, $ a string $ s $ of $ n $ binary digits and a natural number $ k\le n, $ define an $ n,s,k$ *-block* as a string of $ k $ consecutive elements from $ s. $ We say that two $ n,s,k\text{-blocks} , $ namely, $ a_1a_2\ldots a_k,b_1b_2\ldots b_k, $ are *incompatible* if there exists an $ i\in\{1,2,\ldots ,k\} $ such that $ a_i\neq b_i. $ Also, for two natural numbers $ r\le n, l, $ we say that $ s $ is $ r,l $ *-typed* if there are, at most, $ l $ pairwise incompatible $ n,s,r\text{-blocks} . $ Let be a $ 3,7\text{-typed} $ string $ t $ consisting of $ 10000 $ binary digits. Determine the maximum number $ M $ that satisfies the condition that $ t $ is $ 10,M\text{-typed} . $ *Cătălin Gherghe*
