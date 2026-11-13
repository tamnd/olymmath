---
tag: 2VW7ABWS2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h589755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11595
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
10 students are arranged in a row. Every minute, a new student is inserted in the row (which can occur in the front and in the back as well, hence $11$ possible places) with a uniform $\tfrac{1}{11}$ probability of each location. Then, either the frontmost or the backmost student is removed from the row (each with a $\tfrac{1}{2}$ probability).

Suppose you are the eighth in the line from the front. The probability that you exit the row from the front rather than the back is $\tfrac{m}{n}$ , where $m$ and $n$ are relatively prime positive integers. Find $100m+n$ .

*Proposed by Lewis Chen*
