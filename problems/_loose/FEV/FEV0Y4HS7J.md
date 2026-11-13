---
tag: FEV0Y4HS7J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h527804
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9970
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
A person flips $2010$ coins at a time. He gains one penny every time he flips a prime number of heads, but must stop once he flips a non-prime number. If his expected amount of money gained in dollars is $\frac{a}{b}$ , where $a$ and $b$ are relatively prime, compute $\lceil\log_{2}(100a+b)\rceil$ .

*Proposed by Lewis Chen*
