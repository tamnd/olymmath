---
tag: A5M4YFHMNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h481934
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7578
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2012
    source: hf-ai-mo-aops
    label: 2012 All-Russian Olympiad
---
Initially, ten consecutive natural numbers are written on the board. In one turn, you may pick any two numbers from the board (call them $a$ and $b$ ) and replace them with the numbers $a^2-2011b^2$ and $ab$ . After several turns, there were no initial numbers left on the board. Could there, at this point, be again, ten consecutive natural numbers?
