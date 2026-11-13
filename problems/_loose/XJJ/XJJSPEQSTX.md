---
tag: XJJSPEQSTX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31243
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Belarusian National Olympiad
---
Nick and Mike are playing the following game. They have a heap and 330 stones in it. They take turns. In one turn it is allowed to take from the heap exactly $1$ , exactly $n$ or exactly $m$ stones. The boy who takes the last stone wins. Before the beginning Nick says the number $n$ , ( $1<n<10$ ). After that Mike says the number $m$ , ( $m\neq n$ , $1<m<10$ ). Nick goes first. Is it possible for one of the boys to say the number to provide the victory to himself, regardless of his opponents number and strategy?
