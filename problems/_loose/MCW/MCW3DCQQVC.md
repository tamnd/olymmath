---
tag: MCW3DCQQVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560331
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
In the universe of Pi Zone, points are labeled with $2 \times 2$ arrays of positive reals. One can teleport from point $M$ to point $M'$ if $M$ can be obtained from $M'$ by multiplying either a row or column by some positive real. For example, one can teleport from $\left( \begin{array}{cc} 1 & 2 3 & 4 \end{array} \right)$ to $\left( \begin{array}{cc} 1 & 20 3 & 40 \end{array} \right)$ and then to $\left( \begin{array}{cc} 1 & 20 6 & 80 \end{array} \right)$ .

A *tourist attraction* is a point where each of the entries of the associated array is either $1$ , $2$ , $4$ , $8$ or $16$ . A company wishes to build a hotel on each of several points so that at least one hotel is accessible from every tourist attraction by teleporting, possibly multiple times. What is the minimum number of hotels necessary?

*Proposed by Michael Kural*
