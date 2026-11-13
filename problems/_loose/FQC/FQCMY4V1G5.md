---
tag: FQCMY4V1G5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364148
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4753
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206920
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
Given integer $n\geq 2$ and real numbers $x_1,x_2,\cdots, x_n$ in the interval $[0,1]$ . Prove that there exist real numbers $a_0,a_1,\cdots,a_n$ satisfying the following conditions:
(1) $a_0+a_n=0$ ;
(2) $|a_i|\leq 1$ , for $i=0,1,\cdots,n$ ;
(3) $|a_i-a_{i-1}|=x_i$ , for $i=1,2,\cdots,n$ .
