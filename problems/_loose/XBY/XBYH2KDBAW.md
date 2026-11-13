---
tag: XBYH2KDBAW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h201580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31761
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Bosnia And Herzegovina - Regional Olympiad
---
A rectangular table $ 9$ rows $ \times$ $ 2008$ columns is fulfilled with numbers $ 1$ , $ 2$ , ..., $ 2008$ in a such way that each number appears exactly $ 9$ times in table and difference between any two numbers from same column is not greater than $ 3$ . What is maximum value of minimum sum in column (with minimal sum)?
