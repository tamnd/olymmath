---
tag: GJ7B6HXDXM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2927881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39282
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1981
    source: hf-ai-mo-aops
    label: 1981 Bundeswettbewerb Mathematik
---
Let $a$ and $n$ be positive integers and $s = a + a^2 + \cdots + a^n$ . Prove that the last digit of $s$ is $1$ if and only if the last digits of $a$ and $n$ are both equal to $1$ .
