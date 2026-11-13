---
tag: 1H2TWM6VPE
kind: problem
type: answer
answer: "671"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey 16th Turkish Mathematical Olympiad
---
In a computer network consisting of $2008$ computers no two cycles intersect. At time $t = 0$, a hacker hacks into a computer in this network; and at time $t = 1$, the network administrator installs a protective software to an unhacked computer. For each positive integer $k$, at time $t = 2k$, the hacker hacks into another computer, if there is one, that is not protected and that is directly connected to a hacked computer; and at time $t = 2k + 1$, the administrator installs the protective software to another computer, if there is one, that is not hacked and that is directly connected to a protected computer. Determine the maximum number of computers the hacker can guarantee to hack into no matter how the network is configured.

[For $m \ge 3$, $\{C_1, C_2, \dots, C_m\}$ is a cycle if the computers $C_1$ and $C_m$ and, for all $2 \le i \le m$, the computers $C_{i-1}$ and $C_i$ are directly connected.]
