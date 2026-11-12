---
tag: AJ1SPSBZ20
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h597372
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2014
    source: hf-ai-mo-aops
    label: 2014 India IMO Training Camp
---
Starting with the triple $(1007\sqrt{2},2014\sqrt{2},1007\sqrt{14})$ , define a sequence of triples $(x_{n},y_{n},z_{n})$ by $x_{n+1}=\sqrt{x_{n}(y_{n}+z_{n}-x_{n})}$ $y_{n+1}=\sqrt{y_{n}(z_{n}+x_{n}-y_{n})}$ $ z_{n+1}=\sqrt{z_{n}(x_{n}+y_{n}-z_{n})}$ for $n\geq 0$ .Show that each of the sequences $\langle x_n\rangle _{n\geq 0},\langle y_n\rangle_{n\geq 0},\langle z_n\rangle_{n\geq 0}$ converges to a limit and find these limits.
