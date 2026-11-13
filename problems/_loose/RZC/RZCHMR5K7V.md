---
tag: RZCHMR5K7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947302
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $S$ be the set of integers modulo $2020$ . Suppose that $a_1,a_2,...,a_{2020},b_1,b_2,...,b_{2020}, c$ are arbitrary elements of $S$ . For any $x_1,x_2,...,x_{2020}\in S$ , define $f(x_1,x_2,...,x_{2020})$ to be the $2020$ -tuple whose $i$ th coordinate is $x_{i-2} + a_i x_{2019} + b_ix_{2020} + cx_i$ , where we set $x_{-1}=x_0=0$ . Let $m$ be the smallest positive integer such that, for some values of $a_1,a_2,...,a_{2020},b_1,b_2,...,b_{2020}, c$ , we have, for all $x_1,x_2,...,x_{2020}\in S$ , that $f^m (x_1, x_2, ..., x_{2020} ) = (0,0,...,0)$ . For this value of $m$ , there are exactly $n$ choices of the tuple $(a_1,a_2,...,a_{2020},b_1,b_2,...,b_{2020},c)$ such that, for all $x_1,x_2,...,x_{2020}\in S$ , $f^m (x_1, x_2, ..., x_{2020} ) = (0,0,...,0)$ . Compute $100m+n$ .

*Proposed by Vincent Huang*
