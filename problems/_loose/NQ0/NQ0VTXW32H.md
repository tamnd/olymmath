---
tag: NQ0VTXW32H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h497186
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2012
    source: hf-ai-mo-aops
    label: 2012 Indonesia MO
---
Given positive integers $m$ and $n$ . Let $P$ and $Q$ be two collections of $m \times n$ numbers of $0$ and $1$ , arranged in $m$ rows and $n$ columns. An example of such collections for $m=3$ and $n=4$ is
$$\left[ \begin{array}{cccc}
1 & 1 & 1 & 0
1 & 1 & 0 & 0
0 & 0 & 0 & 0 \end{array} \right].$$
Let those two collections satisfy the following properties:
(i) On each row of $P$ , from left to right, the numbers are non-increasing,
(ii) On each column of $Q$ , from top to bottom, the numbers are non-increasing,
(iii) The sum of numbers on the row in $P$ equals to the same row in $Q$ ,
(iv) The sum of numbers on the column in $P$ equals to the same column in $Q$ .
Show that the number on row $i$ and column $j$ of $P$ equals to the number on row $i$ and column $j$ of $Q$ for $i=1,2,\dots,m$ and $j=1,2,\dots,n$ .

*Proposer: Stefanus Lie*
