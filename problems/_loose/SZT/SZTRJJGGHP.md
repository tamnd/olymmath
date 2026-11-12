---
tag: SZTRJJGGHP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3211900
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
Luffy is playing with some magic boxes and a machine. Each box has a value(number) inside. Opening a box, Luffy sees the value, adds the value to his score(if the box value is negative, Luffy loses points) and destroys the box. Putting a box of value $X$ in the machine, this box vanishes and it is replaced by two new boxes of values $X+1$ and $X-1$ (it's **not** known which one has the respective value, but he can identify the new boxes). At the beginning, Luffy has $0$ points and has a box whose value is known(it is zero).
a) Prove that Luffy can reach at least $1000$ points
b) Is it possible that Luffy reaches at least $1000000$ points, **without** have less than $-42$ points in any moment?
