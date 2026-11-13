---
tag: GHZNNK3DH6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964667
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39334
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1988
    source: hf-ai-mo-aops
    label: 1988 Bundeswettbewerb Mathematik
---
Starting with four given integers $a_1, b_1, c_1, d_1$ is defined recursively for all positive integers $n$ : $$ a_{n+1} := |a_n - b_n|, b_{n+1} := |b_n - c_n|, c_{n+1} := |c_n - d_n|, d_{n+1} := |d_n - a_n|. $$ Prove that there is a natural number $k$ such that all terms $a_k, b_k, c_k, d_k$ take the value zero.
