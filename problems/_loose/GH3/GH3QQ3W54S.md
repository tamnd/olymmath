---
tag: GH3QQ3W54S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h546368
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9584
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
---
Let $h \ge 3$ be an integer and $X$ the set of all positive integers that are greater than or equal to $2h$ . Let $S$ be a nonempty subset of $X$ such that the following two conditions hold:

- if $a + b \in S$ with $a \ge h, b \ge h$ , then $ab \in S$ ;
- if $ab \in S$ with $a \ge h, b \ge h$ , then $a + b \in S$ .

Prove that $S = X$ .
