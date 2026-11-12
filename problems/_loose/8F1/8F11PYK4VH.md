---
tag: 8F11PYK4VH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Let $T$ be a fixed tree with vertices $v_1$ , $\dots$ , $v_n$ . Bug the bug starts on vertex $v_s$ . Then, for each $i \neq s$ , Bug does the following:

- Repeatedly move to a random neighboring vertex, until reaching vertex $v_i$ ; then,
- Walk the shortest path back to $v_s$ .

Show that the expected number of steps Bug takes is the same regardless of the choice of $s$ .

*Andrew Carratu*
