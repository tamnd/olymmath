---
tag: G3SZG54ZHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the set $A=\{0,1,2,3,4,5,6\}$. Let $f: A \rightarrow A$ be a function from $A$ to $A$, for $i \in A$. Denote the remainder when $i-f(i)$ is divided by 7 as $d_{i}\left(0 \leqslant d_{i}<7\right)$. If $d_{0}, d_{1}, d_{2}, d_{3}, d_{4}, d_{5}, d_{6}$ are all distinct, then $f$ is called a $D$ function from $A$ to $A$.
(1) Determine whether the following two functions $f_{1}, f_{2}$ from $A$ to $A$ are $D$ functions:
\begin{tabular}{|c|l|l|l|l|l|l|l|}
\hline$i$ & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline$f_{1}(i)$ & 0 & 4 & 6 & 5 & 1 & 3 & 2 \\
\hline
\end{tabular}
\begin{tabular}{|c|c|c|c|c|c|c|c|}
\hline$i$ & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline$f_{2}(i)$ & 1 & 6 & 4 & 2 & 0 & 5 & 3 \\
\hline
\end{tabular}
(2) Let $f$ be a $D$ function from $A$ to $A$, and let $d_{i}$ represent the remainder when $i-f(i)$ is divided by 7 $\left(0 \leqslant d_{i}<7\right)$. Define $F(i)=d_{i}, i \in A$. Prove that $F$ is also a $D$ function from $A$ to $A$.
(3) Prove that the number of different $D$ functions from $A$ to $A$ is odd.
(Advanced Class for Science Experiment Mathematics Admission Test, 1987)
