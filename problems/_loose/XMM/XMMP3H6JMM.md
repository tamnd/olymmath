---
tag: XMMP3H6JMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364147
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4752
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Given integer $a_1\geq 2$ . For integer $n\geq 2$ , define $a_n$ to be the smallest positive integer which is not coprime to $a_{n-1}$ and not equal to $a_1,a_2,\cdots, a_{n-1}$ . Prove that every positive integer except 1 appears in this sequence $\{a_n\}$ .
