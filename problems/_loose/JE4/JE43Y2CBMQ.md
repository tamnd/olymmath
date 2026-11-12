---
tag: JE43Y2CBMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751848
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2016
    source: hf-ai-mo-aops
    label: 2016 BMT Spring
---
Suppose $f(x, y)$ is a function that takes in two integers and outputs a real number, such that it satisfies $$ f(x, y) = \frac{f(x, y + 1) + f(x, y - 1)}{2} $$ $$ f(x, y) = \frac{f(x + 1, y) + f(x - 1, y)}{2} $$ What is the minimum number of pairs $(x, y)$ we need to evaluate to be able to uniquely determine $f$ ?
