---
tag: 7RWGEFF88G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2995328
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29797
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2013
    source: hf-ai-mo-aops
    label: 2013 Argentina National Olympiad
---
On a table there are $2013$ cards that have written, each one, a different integer number, from $1$ to $2013$ ; all the cards face down (you can't see what number they are). It is allowed to select any set of cards and ask if the average of the numbers written on those cards is integer. The answer will be true.
a) Find all the numbers that can be determined with certainty by several of these questions.
b) We want to divide the cards into groups such that the content of each group is known even though the individual value of each card in the group is not known. (For example, finding a group of $3$ cards that contains $1, 2$ , and $3$ , without knowing what number each card has.) What is the maximum number of groups that can be obtained?
