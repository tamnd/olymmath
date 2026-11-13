---
tag: PDV2XWTK1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2k$ citizens in a town every two of which are either friends or enemies. For some positive integer $t$ each citizen has at most $t$ enemies and there exists a citizen having exactly $t$ enemies. A group is called *friendly* if any two members of the group are friends. It is known that a friendly group with more than $k$ members does not exist and all citizens can be partitioned into two friendly groups having $k$ members each. Prove that the number of friendly groups having $k$ members is not greater than $2^{k-1} + 2^{k-t}$.
