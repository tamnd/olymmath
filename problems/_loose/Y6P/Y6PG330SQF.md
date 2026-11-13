---
tag: Y6PG330SQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h523064
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39040
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2000
    source: hf-ai-mo-aops
    label: 2000 France Team Selection Test
  - at: ie-irmo/1999
    source: hf-ai-mo-aops
    label: 1999 Irish Math Olympiad
---
$a,b,c,d$ are positive reals with sum $1$ . Show that $\frac{a^2}{a+b}+\frac{b^2}{b+c}+\frac{c^2}{c+d}+\frac{d^2}{d+a} \ge \frac{1}{2}$ with equality iff $a=b=c=d=\frac{1}{4}$ .
