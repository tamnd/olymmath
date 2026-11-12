---
tag: KQWQWXKCG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2012
    source: hf-ai-mo-aops
    label: 2012 Princeton University Math Competition
---
Proctors Andy and Kristin have a PUMaC team of eight students labelled $s_1, s_2, ... , s_8$ (the PUMaC staff being awful with names). The following occurs: $1$ . Andy tells the students to arrange themselves in a line in arbitrary order. $2$ . Kristin tells each student $s_i$ to move to the current spot of student $s_j$ , where $j \equiv 3i + 1$ (mod $8$ ). $3$ . Andy tells each student $s_i$ to move to the current spot of the student who was in the $i$ th position of the line after step $1$ .
How many possible orders can the students be in now?
