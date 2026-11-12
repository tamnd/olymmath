---
tag: VSA2P65HEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077920
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $N = 12!$ and denote by $X$ the set of positive divisors of $N$ other than $1$ . A *pseudo-ultrafilter* $U$ is a nonempty subset of $X$ such that for any $a,b \in X$ :
\begin{itemize}
\item If $a$ divides $b$ and $a \in U$ then $b \in U$ .
\item If $a,b \in U$ then $\gcd(a,b) \in U$ .
\item If $a,b \notin U$ then $\operatorname{lcm} (a,b) \notin U$ .
\end{itemize}
How many such pseudo-ultrafilters are there?

*Proposed by Evan Chen*
