---
tag: WT17NYGERV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h437030
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66413
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
$X$ , $Y$ and $Z$ are pairwise disjoint sets of people. The average ages of people in the sets $X$ , $Y$ , $Z$ , $X \cup Y$ , $X \cup Z$ and $Y \cup Z$ are given in the table below.

\begin{tabular}{|c|c|c|c|c|c|c|} \hline
\rule{0pt}{1.1em} Set & $X$ & $Y$ & $Z$ & $X\cup Y$ & $X\cup Z$ & $Y\cup Z$ [0.5ex] \hline \rule{0pt}{2.2em} \shortstack{Average age of people in the set} & 37 & 23 & 41 & 29 & 39.5 & 33[1ex]\hline\end{tabular}

Find the average age of the people in set $X \cup Y \cup Z$ . $ \textbf{(A)}\ 33 \textbf{(B)}\ 33.5 \textbf{(C)}\ 33.6\overline{6} \textbf{(D)}\ 33.83\overline{3} \textbf{(E)}\ 34 $
