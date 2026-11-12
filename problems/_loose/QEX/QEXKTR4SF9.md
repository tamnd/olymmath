---
tag: QEXKTR4SF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3646913
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2024
    source: hf-ai-mo-aops
    label: 2024 Stanford Mathematics Tournament
---
There are $4$ outlets $A,B,C,D$ in a room, each with $2$ sockets denoted with subscripts $1$ and $2$ (i.e. outlet ? has sockets $A_1$ and $A_2$ ). A baby starts plugging wires into the sockets. They have $3$ wires, and each wire has two ends that each plug into a socket. Each socket can take at most one plug. A short circuit happens when there is a loop from one outlet to itself. For example, $A_1 \leftrightarrow A_2$ is a short circuit and $A_1 \leftrightarrow B_1$ , $B_2 \leftrightarrow C_1$ , $A_2 \leftrightarrow C_2$ is a short circuit, but $A_1 \leftrightarrow B_1$ is not. Provided that the baby randomly connects every plug to a socket, what is the probability that the baby causes a short circuit?
