---
tag: TM1GWEYQRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585522
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
In Prime Land, there are seven major cities, labelled $C_0$ , $C_1$ , \dots, $C_6$ . For convenience, we let $C_{n+7} = C_n$ for each $n=0,1,\dots,6$ ; i.e. we take the indices modulo $7$ . Al initially starts at city $C_0$ .

Each minute for ten minutes, Al flips a fair coin. If the coin land heads, and he is at city $C_k$ , he moves to city $C_{2k}$ ; otherwise he moves to city $C_{2k+1}$ . If the probability that Al is back at city $C_0$ after $10$ moves is $\tfrac{m}{1024}$ , find $m$ .

*Proposed by Ray Li*
