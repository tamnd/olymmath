---
tag: 6WYXB80GYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h5782
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39317
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1985
    source: hf-ai-mo-aops
    label: 1985 Bundeswettbewerb Mathematik
---
Starting with the sequence $F_1 = (1,2,3,4, \ldots)$ of the natural numbers further sequences are generated as follows: $F_{n+1}$ is created from $F_n$ by the following rule: the order of elements remains unchanged, the elements from $F_n$ which are divisible by $n$ are increased by 1 and the other elements from $F_n$ remain unchanged. Example: $F_2 = (2,3,4,5 \ldots)$ and $F_3 = (3,3,5,5, \ldots)$ . Determine all natural numbers $n$ such that exactly the first $n-1$ elements of $F_n$ take the value $n.$
