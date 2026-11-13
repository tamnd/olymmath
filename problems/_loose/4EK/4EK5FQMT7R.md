---
tag: 4EK5FQMT7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2928168
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39269
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1979
    source: hf-ai-mo-aops
    label: 1979 Bundeswettbewerb Mathematik
---
An infinite sequence $p_1, p_2, p_3, \ldots$ of natural numbers in the decimal system has the following property: For every $i \in \mathbb{N}$ the last digit of $p_{i+1}$ is different from $9$ , and by omitting this digit one obtains number $p_i$ . Prove that this sequence contains infinitely many composite numbers.
