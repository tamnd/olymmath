---
tag: 9THCM8X7SZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221819
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
In concurrent computing, two processes may have their steps interwoven in an unknown order, as long as the steps of each process occur in order. Consider the following two processes:

\begin{tabular}{c|cc}
Process & $A$ & $B$ \hline
Step 1 & $x\leftarrow x-4$ & $x\leftarrow x-5$ Step 2 & $x\leftarrow x\cdot3$ & $x\leftarrow x\cdot4$ Step 3 & $x\leftarrow x-4$ & $x\leftarrow x-5$ Step 4 & $x\leftarrow x\cdot3$ & $x\leftarrow x\cdot4$ \end{tabular}

One such interweaving is $A1$ , $B1$ , $A2$ , $B2$ , $A3$ , $B3$ , $B4$ , $A4$ , but $A1$ , $A3$ , $A2$ , $A4$ , $B1$ , $B2$ , $B3$ , $B4$ is not since the steps of $A$ do not occur in order. We run $A$ and $B$ concurrently with $x$ initially valued at $6$ . Find the minimal possible value of $x$ among all interweavings.
