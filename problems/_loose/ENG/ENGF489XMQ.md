---
tag: ENGF489XMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1065734
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
There exists a unique strictly increasing arithmetic sequence $\{a_i\}_{i=1}^{100}$ of positive integers such that $$a_1+a_4+a_9+\cdots+a_{100}=\text{1000},$$ where the summation runs over all terms of the form $a_{i^2}$ for $1\leq i\leq 10$ . Find $a_{50}$ .

*Proposed by David Altizio and Tony Kim*
