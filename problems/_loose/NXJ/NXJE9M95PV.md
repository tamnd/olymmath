---
tag: NXJE9M95PV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 AMC 10
    url: https://artofproblemsolving.com/community/c6h330858
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2010 AMC 10
---
Jim starts with a positive integer $ n$ and creates a sequence of numbers. Each successive number is obtained by subtracting the largest possible integer square less than or equal to the current number until zero is reached. For example, if Jim starts with $ n=55$ , then his sequence contains $ 5$ numbers:
\begin{align*}
&55
55-7^2=&\ 6
6-2^2=&\ 2
2-1^2=&\ 1
1-1^2=&\ 0
\end{align*}Let $ N$ be the smallest number for which Jim's sequence has 8 numbers. What is the units digit of $ N$ ?

$ \textbf{(A)}\ 1 \textbf{(B)}\ 3 \textbf{(C)}\ 5 \textbf{(D)}\ 7 \textbf{(E)}\ 9$
