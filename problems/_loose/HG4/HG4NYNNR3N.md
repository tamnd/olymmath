---
tag: HG4NYNNR3N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774546
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17551
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Call a polynomial $P$ *prime-covering* if for every prime $p$ , there exists an integer $n$ for which $p$ divides $P(n)$ . Determine the number of ordered triples of integers $(a,b,c)$ , with $1\leq a < b < c \leq 25$ , for which $P(x)=(x^2-a)(x^2-b)(x^2-c)$ is prime-covering.
