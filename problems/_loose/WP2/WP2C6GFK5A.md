---
tag: WP2C6GFK5A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h2121051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54651
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Romania Team Selection Tests
---
Let $D$ be a non-empty subset of positive integers and let $d$ be the greatest common divisor of $D$ , and let $d\mathbb{Z}=[dn: n \in \mathbb{Z} ]$ . Prove that there exists a bijection $f: \mathbb{Z} \rightarrow d\mathbb{Z} $ such that $| f(n+1)-f(n)|$ is member of $D$ for every integer $n$ .
