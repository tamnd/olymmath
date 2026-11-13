---
tag: F32ND5KQNY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1557182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42256
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2017
    source: hf-ai-mo-aops
    label: 2017 India IMO Training Camp
---
Define a sequence of integers $a_0=m, a_1=n$ and $a_{k+1}=4a_k-5a_{k-1}$ for all $k \ge 1$ . Suppose $p>5$ is a prime with $p \equiv 1 \pmod{4}$ . Prove that it is possible to choose $m,n$ such that $p \nmid a_k$ for any $k \ge 0$ .
