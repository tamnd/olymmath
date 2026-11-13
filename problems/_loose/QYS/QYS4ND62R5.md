---
tag: QYS4ND62R5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55863
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35788
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Find all natural numbers $n (n \geq 2)$ such that there exists reals $a_1, a_2, \dots, a_n$ which satisfy $$ \{ |a_i - a_j| \mid 1\leq i<j \leq n\} = \left\{1,2,\dots,\frac{n(n-1)}{2}\right\}. $$

Let $A=\{1,2,3,4,5,6\}, B=\{7,8,9,\dots,n\}$ . $A_i(i=1,2,\dots,20)$ contains eight numbers, three of which are chosen from $A$ and the other five numbers from $B$ . $|A_i \cap A_j|\leq 2, 1\leq i<j\leq 20$ . Find the minimum possible value of $n$ .
