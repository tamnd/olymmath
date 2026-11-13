---
tag: HT501GM9JG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h147360
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29357
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2003
    source: hf-ai-mo-aops
    label: 2003 Tuymaada Olympiad
---
Given are polynomial $f(x)$ with non-negative integral coefficients and positive integer $a.$ The sequence $\{a_{n}\}$ is defined by $a_{1}=a,$ $a_{n+1}=f(a_{n}).$ It is known that the set of primes dividing at least one of the terms of this sequence is finite.
Prove that $f(x)=cx^{k}$ for some non-negative integral $c$ and $k.$ *Proposed by F. Petrov*
