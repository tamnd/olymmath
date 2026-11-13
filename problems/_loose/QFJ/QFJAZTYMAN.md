---
tag: QFJAZTYMAN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35797
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Suppose $A=\{1,2,\dots,2002\}$ and $M=\{1001,2003,3005\}$ . $B$ is an non-empty subset of $A$ . $B$ is called a $M$ -free set if the sum of any two numbers in $B$ does not belong to $M$ . If $A=A_1\cup A_2$ , $A_1\cap A_2=\emptyset$ and $A_1,A_2$ are $M$ -free sets, we call the ordered pair $(A_1,A_2)$ a $M$ -partition of $A$ . Find the number of $M$ -partitions of $A$ .
