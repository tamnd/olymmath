---
tag: SK3XCEN75N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
On Lineland there are 2018 bus stations numbered 1 through 2018 from left to right. A self-driving bus that can carry at most $N$ passengers starts from station 1 and drives all the way to station 2018, while making a stop at each bus station. Each passenger that gets on the bus at station $i$ will get off at station $j$ for some $j>i$ (the value of $j$ may vary over different passengers). Call any group of four distinct stations $i_1, i_2, j_1, j_2$ with $i_u< j_v$ for all $u,v\in \{1,2\}$ a *good* group. Suppose that in any good group $i_1, i_2, j_1, j_2$ , there is a passenger who boards at station $i_1$ and de-boards at station $j_1$ , or there is a passenger who boards at station $i_2$ and de-boards at station $j_2$ , or both scenarios occur. Compute the minimum possible value of $N$ .

*Proposed by Yannick Yao*
