---
tag: JF25RKVWK5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2060240
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2011
    source: hf-ai-mo-aops
    label: 2011 Germany Team Selection Test
---
Vertices and Edges of a regular $n$ -gon are numbered $1,2,\dots,n$ clockwise such that edge $i$ lies between vertices $i,i+1 \mod n$ . Now non-negative integers $(e_1,e_2,\dots,e_n)$ are assigned to corresponding edges and non-negative integers $(k_1,k_2,\dots,k_n)$ are assigned to corresponding vertices such that: $i$ ) $(e_1,e_2,\dots,e_n)$ is a permutation of $(k_1,k_2,\dots,k_n)$ . $ii$ ) $k_i=|e_{i+1}-e_i|$ indexes $\mod n$ .

a) Prove that for all $n\geq 3$ such non-zero $n$ -tuples exist.
b) Determine for each $m$ the smallest positive integer $n$ such that there is an $n$ -tuples stisfying the above conditions and also $\{e_1,e_2,\dots,e_n\}$ contains all $0,1,2,\dots m$ .
