---
tag: MPS3JQ031A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1397207
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15278
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
For a given positive integer $n$ and prime number $p$ , find the minimum value of positive integer $m$ that satisfies the following property: for any polynomial $$ f(x)=(x+a_1)(x+a_2)\ldots(x+a_n) $$ ( $a_1,a_2,\ldots,a_n$ are positive integers), and for any non-negative integer $k$ , there exists a non-negative integer $k'$ such that $$ v_p(f(k))<v_p(f(k'))\leq v_p(f(k))+m. $$ Note: for non-zero integer $N$ , $v_p(N)$ is the largest non-zero integer $t$ that satisfies $p^t\mid N$ .
