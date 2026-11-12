---
tag: 45HYJT2MYY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1113236
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2015
    source: hf-ai-mo-aops
    label: 2015 India IMO Training Camp
---
There are $n\ge 2$ lamps, each with two states: $\textbf{on}$ or $\textbf{off}$ . For each non-empty subset $A$ of the set of these lamps, there is a $\textit{soft-button}$ which operates on the lamps in $A$ ; that is, upon $\textit{operating}$ this button each of the lamps in $A$ changes its state(on to off and off to on). The buttons are identical and it is not known which button corresponds to which subset of lamps. Suppose all the lamps are off initially. Show that one can always switch all the lamps on by performing at most $2^{n-1}+1$ operations.
