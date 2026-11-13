---
tag: F1QHBD7Z65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97510
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35889
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2006
    source: hf-ai-mo-aops
    label: 2006 China Team Selection Test
---
Given positive integers $m$ , $a$ , $b$ , $(a,b)=1$ . $A$ is a non-empty subset of the set of all positive integers, so that for every positive integer $n$ there is $an \in A$ and $bn \in A$ . For all $A$ that satisfy the above condition, find the minimum of the value of $\left| A \cap \{ 1,2, \cdots,m \} \right|$
