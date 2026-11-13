---
tag: M53EVPJ3QT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h99379
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35806
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234285
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
Can we find positive reals $a_1, a_2, \dots, a_{2002}$ such that for any positive integer $k$ , with $1 \leq k \leq 2002$ , every complex root $z$ of the following polynomial $f(x)$ satisfies the condition $|\text{Im } z| \leq |\text{Re } z|$ ,
$$f(x)=a_{k+2001}x^{2001}+a_{k+2000}x^{2000}+ \cdots + a_{k+1}x+a_k,$$ where $a_{2002+i}=a_i$ , for $i=1,2, \dots, 2001$ .
