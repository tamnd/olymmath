---
tag: ZF435F9HFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10047
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $a_1,a_2,\ldots, a_{2013}$ be a permutation of the numbers from $1$ to $2013$ . Let $A_n = \frac{a_1 + a_2 + \cdots + a_n} {n}$ for $n = 1,2,\ldots, 2013$ . If the smallest possible difference between the largest and smallest values of $A_1,A_2,\ldots, A_{2013}$ is $\frac{m}{n}$ , where $m$ and $n$ are relatively prime positive integers, find $m+n$ .

*Ray Li*
