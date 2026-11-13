---
tag: 9KKDR71CMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h1957968
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219015
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2019
    source: hf-ai-mo-aops
    label: 2019 Brazil National Olympiad
---
An eight-digit number is said to be 'robust' if it meets both of the following conditions:
(i) None of its digits is $0$ .
(ii) The difference between two consecutive digits is $4$ or $5$ .

Answer the following questions:

(a) How many are robust numbers?
(b) A robust number is said to be 'super robust' if all of its digits are distinct. Calculate the sum of all
the super robust numbers.
