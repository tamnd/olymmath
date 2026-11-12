---
tag: 4RM2Z7YAFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585185
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
Consider a $2025\times 2025$ board where we identify the squares with pairs $(i,j)$ where $i$ and $j$ denote the row and column number of that square, respectively.

Calvin picks two positive integers $a,b<2025$ and places a pawn at the bottom left corner (i.e. on $(1,1)$ ) and makes the following moves. In his $k$ -th move, he moves the pawn from $(i,j)$ to either $(i+a,j)$ or $(i,j+a)$ if $k$ is odd and to either $(i+b,j)$ and $(i,j+b)$ if $k$ is even. Here all the numbers are taken modulo $2025$ . Find the number of pairs $(a,b)$ that Calvin could have picked such that he can make moves so that the pawn covers all the squares on the board without being on any square twice.

*Proposed by Tejaswi Navilarekallu*
