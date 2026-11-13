---
tag: EK3THCTV4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1828612
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21968
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2015
    source: hf-ai-mo-aops
    label: 2015 Caucasus Mathematical Olympiad
---
On the table are $300$ coins. Petya, Vasya and Tolya play the next game. They go in turn in the following order: Petya, Vasya, Tolya, Petya. Vasya, Tolya, etc. In one move, Petya can take $1, 2, 3$ , or $4$ coins from the table, Vasya, $1$ or $2$ coins, and Tolya, too, $1$ or $2$ coins. Can Vasya and Tolya agree so that, as if Petya were playing, one of them two will take the last coin off the table?
