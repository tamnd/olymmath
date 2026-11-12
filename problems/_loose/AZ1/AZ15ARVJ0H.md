---
tag: AZ15ARVJ0H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2763330
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2015
    source: hf-ai-mo-aops
    label: 2015 BMT Spring
---
A binary decision tree is a list of $n$ yes/no questions, together with instructions for the order in which they should be asked (without repetition). For instance, if $n = 3$ , there are $12$ possible binary decision trees, one of which asks question $2$ first, then question $3$ (followed by question $ 1$ ) if the answer was yes or question $1$ (followed by question $3$ ) if the answer was no. Determine the greatest possible $k$ such that $2^k$ divides the number of binary decision trees on $n = 13$ questions.
