---
tag: FF2G6GYYRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3099027
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2022
    source: hf-ai-mo-aops
    label: 2022 JBMO Shortlist
---
Let $n \ge 2$ be an integer. Alex writes the numbers $1, 2, ..., n$ in some order on a circle such that any two neighbours are coprime. Then, for any two numbers that are not comprime, Alex draws a line segment between them. For each such segment $s$ we denote by $d_s$ the difference of the numbers written in its extremities and by $p_s$ the number of all other drawn segments which intersect $s$ in its interior.
Find the greatest $n$ for which Alex can write the numbers on the circle such that $p_s \le |d_s|$ , for each drawn segment $s$ .
