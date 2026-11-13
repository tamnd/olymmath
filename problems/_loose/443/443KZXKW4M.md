---
tag: 443KZXKW4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h565600
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10014
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212010
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
Let $S = \{1,2,\cdots,2013\}$ . Let $N$ denote the number $9$ -tuples of sets $(S_1, S_2, \dots, S_9)$ such that $S_{2n-1}, S_{2n+1} \subseteq S_{2n} \subseteq S$ for $n=1,2,3,4$ . Find the remainder when $N$ is divided by $1000$ .

*Proposed by Lewis Chen*
