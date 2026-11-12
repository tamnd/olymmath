---
tag: 76SYMETRNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219306
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Jay is given a permutation $\{p_1, p_2,\ldots, p_8\}$ of $\{1, 2,\ldots, 8\}$ . He may take two dividers and split the permutation into three non-empty sets, and he concatenates each set into a single integer. In other words, if Jay chooses $a,b$ with $1\le a< b< 8$ , he will get the three integers $\overline{p_1p_2\ldots p_a}$ , $\overline{p_{a+1}p_{a+2}\ldots p_{b}}$ , and $\overline{p_{b+1}p_{b+2}\ldots p_8}$ . Jay then sums the three integers into a sum $N=\overline{p_1p_2\ldots p_a}+\overline{p_{a+1}p_{a+2}\ldots p_b}+\overline{p_{b+1}p_{b+2}\ldots p_8}$ . Find the smallest positive integer $M$ such that no matter what permutation Jay is given, he may choose two dividers such that $N\le M$ .

*Proposed by James Lin*
