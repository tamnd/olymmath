---
tag: S15XZCDG0G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1885911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18389
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2019
    source: hf-ai-mo-aops
    label: 2019 South East Mathematical Olympiad
---
Amy and Bob choose numbers from $0,1,2,\cdots,81$ in turn and Amy choose the number first. Every time the one who choose number chooses one number from the remaining numbers. When all $82$ numbers are chosen, let $A$ be the sum of all the numbers Amy chooses, and let $B$ be the sum of all the numbers Bob chooses. During the process, Amy tries to make $\gcd(A,B)$ as great as possible, and Bob tries to make $\gcd(A,B)$ as little as possible. Suppose Amy and Bob take the best strategy of each one, respectively, determine $\gcd(A,B)$ when all $82$ numbers are chosen.
